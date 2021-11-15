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

@Controller('api/posts')
export class PostController {
  @Get('')
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const posts = await models.Post.findAll({
        include: [
          { model: models.User, as: 'user', attributes: ['id', 'name'] },
        ],
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @Get(':id')
  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const post = await models.Post.findByPk(id, {
        include: [
          { model: models.User, as: 'user', attributes: ['id', 'name'] },
        ],
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @Get('user/:user_id')
  public async getByUser(req: Request, res: Response): Promise<void> {
    const { user_id } = req.params;
    try {
      const user = await models.User.findByPk(user_id);
      if (!user) {
        res.status(400).send({ msg: 'Usuário não encontrado' });
        return;
      }
      const post = await models.Post.findAll({
        where: {
          user_id,
        },
        include: [
          { model: models.User, as: 'user', attributes: ['id', 'name'] },
        ],
      });

      res.status(200).json(post);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @Post('')
  @Middleware(auth)
  public async store(req: Request, res: Response): Promise<void> {
    try {
      const newPost = await models.Post.create(req.body);
      res.status(200).json(newPost);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @Put(':id')
  @Middleware(auth)
  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const post = await models.Post.findByPk(id);

      if (!post) {
        res.status(400).send({ error: 'Post não encontrado' });
        return;
      }
      post.update(req.body);

      res.status(200).json({ post, msg: 'Post atualizado com sucesso' });
    } catch (error) {
      res.status(400).json(error);
    }
  }

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
