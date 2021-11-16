import {
  Controller,
  Delete,
  Get,
  Middleware,
  Post,
  Put,
} from '@overnightjs/core';
import { models } from '@src/database';
import { Response, Request } from 'express';
import auth from '@src/middlewares/auth';
import { Op } from 'sequelize';
import uploadS3 from '../middlewares/uploadS3';

@Controller('api/posts')
export class PostController {
  /**
   * @swagger
   * /api/posts:
   *  get:
   *      tags:
   *          - post
   *      produces:
   *          - application/json
   *      parameters:
   *      responses:
   */
  @Get('')
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const posts = await models.Post.findAll({
        attributes: { exclude: ['category_id', 'user_id'] },
        include: [
          { model: models.User, as: 'user', attributes: ['id', 'name'] },
          {
            model: models.Category,
            as: 'category',
            attributes: ['id', 'description'],
          },
          { association: 'images' },
        ],
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ error, msg: 'Erro ao obter posts' });
    }
  }

  /**
   * @swagger
   * /api/posts/search:
   *  get:
   *      tags:
   *          - post
   *      produces:
   *          - application/json
   *      parameters:
   *      responses:
   */
  @Get('search')
  public async search(req: Request, res: Response): Promise<void> {
    const { query } = req.query;

    if (!query) {
      res.status(200).send([]);
    }

    const arrQuery = [];
    for (let i = 0; i < (query as string).split(' ').length; i++) {
      arrQuery.push({
        [Op.or]: [
          { title: { [Op.substring]: (query as string).split(' ')[i] } },
          { description: { [Op.substring]: (query as string).split(' ')[i] } },
        ],
      });
    }
    try {
      const posters = await models.Post.findAll({
        attributes: { exclude: ['category_id', 'user_id'] },
        where: {
          [Op.and]: arrQuery,
        },
        order: [['id', 'DESC']],
        include: [
          { model: models.User, as: 'user', attributes: ['id', 'name'] },
          {
            model: models.Category,
            as: 'category',
            attributes: ['id', 'description'],
          },
          { association: 'images' },
        ],
      });
      res.status(200).json(posters);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  /**
   * @swagger
   * /api/posts/:id:
   *  get:
   *      tags:
   *          - post
   *      produces:
   *          - application/json
   *      parameters:
   *      responses:
   */
  @Get(':id')
  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const post = await models.Post.findByPk(id, {
        attributes: { exclude: ['category_id', 'user_id'] },
        include: [
          { model: models.User, as: 'user', attributes: ['id', 'name'] },
          {
            model: models.Category,
            as: 'category',
            attributes: ['id', 'description'],
          },
          { association: 'images' },
        ],
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  /**
   * @swagger
   * /api/posts/:user_id:
   *  get:
   *      tags:
   *          - post
   *      produces:
   *          - application/json
   *      parameters:
   *      responses:
   */
  @Get('user/:user_id')
  @Middleware(auth)
  public async getByUser(req: Request, res: Response): Promise<void> {
    const { user_id } = req.params;
    try {
      const user = await models.User.findByPk(user_id);
      if (!user) {
        res.status(400).send({ msg: 'Usuário não encontrado' });
        return;
      }
      const post = await models.Post.findAll({
        attributes: { exclude: ['category_id', 'user_id'] },
        where: {
          user_id,
        },
        include: [
          { model: models.User, as: 'user', attributes: ['id', 'name'] },
          {
            model: models.Category,
            as: 'category',
            attributes: ['id', 'description'],
          },
          { association: 'images' },
        ],
      });

      res.status(200).json(post);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  /**
   * @swagger
   * /api/posts:
   *  post:
   *      tags:
   *          - post
   *      produces:
   *          - application/json
   *      parameters:
   *      responses:
   */
  @Post('')
  @Middleware([auth, uploadS3.array('images', 6)])
  public async store(req: Request, res: Response): Promise<void> {
    const { user_id } = req.body;
    try {
      const user = await models.User.findByPk(user_id);
      if (!user) {
        res.status(400).send({ msg: 'Usuário não encontrado' });
        return;
      }
      const newPost = await models.Post.create(req.body);

      const images = ((await req?.files) as Array<any>)?.map((image: any) => {
        return {
          location: image.location,
          post_id: newPost.id,
        };
      });

      if (images.length > 0) {
        await models.Image.bulkCreate(images);
      }

      res.status(200).json(newPost);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  /**
   * @swagger
   * /api/posts/:id:
   *  put:
   *      tags:
   *          - post
   *      produces:
   *          - application/json
   *      parameters:
   *      responses:
   */
  @Put(':id')
  @Middleware([auth, uploadS3.array('images', 6)])
  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const post = await models.Post.findByPk(id);

      if (!post) {
        res.status(400).send({ error: 'Post não encontrado' });
        return;
      }
      post.update(req.body);

      const images = ((await req?.files) as Array<any>)?.map((image: any) => {
        return {
          location: image.location,
          post_id: post.id,
        };
      });

      if (images.length > 0) {
        await models.Image.bulkCreate(images);
      }

      res.status(200).json({ post, msg: 'Post atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ error, msg: 'Ocorreu um erro ao atualizar post' });
    }
  }

  /**
   * @swagger
   * /api/posts:id:
   *  delete:
   *      tags:
   *          - post
   *      produces:
   *          - application/json
   *      parameters:
   *      responses:
   */
  @Delete(':id')
  @Middleware(auth)
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const post = await models.Post.findByPk(id);

      if (!post) {
        res.status(400).send({ error: 'Post não encontrado' });
        return;
      }
      post.destroy();
      res.status(200).send({ msg: 'Post excluído com sucesso' });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
