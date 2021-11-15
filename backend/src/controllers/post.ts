import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { models } from '@src/database';
import { Response, Request } from 'express';
import auth from '@src/middlewares/auth';

@Controller('api/posts')
export class PostController {
  @Get('')
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const posts = await models.Post.findAll({
        include: [{ model: models.User, as: 'user', attributes: ['id', 'name'] }],
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json(error)
    }
  }

  @Get(':id')
  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    try {
      const post = await models.Post.findByPk(id, {
        include: [{ model: models.User, as: 'user', attributes: ['id', 'name'] }],
      })
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json(error)
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
}
