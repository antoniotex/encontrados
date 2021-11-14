import { Controller, Get, Post } from '@overnightjs/core';
import { models } from '@src/database';
import { Response, Request } from 'express';

@Controller('api/post')
export class PostController {
  @Get('')
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const posts = await models.Post.findAll({
        include: [{ model: models.User, as: 'user' }],
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json(error)
    }
  }

  @Post('')
  public async store(req: Request, res: Response): Promise<void> {
    try {
      const newPost = await models.Post.create(req.body);
      res.status(200).json(newPost);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
