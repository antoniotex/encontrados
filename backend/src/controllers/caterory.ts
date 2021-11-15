import { Controller, Get } from '@overnightjs/core';
import { Response, Request } from 'express';
import { models } from '../database';

@Controller('api/categories')
export class CategoryController {
  @Get('')
  public async GetAll(req: Request, res: Response): Promise<void> {
    try {
      const categories = await models.Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).send({ error: error });
    }
  }
}
