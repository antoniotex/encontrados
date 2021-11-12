import { Controller, Post } from '@overnightjs/core';
import { Response, Request } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { models } from '../database';

async function getToken(params = {}) {
  return jwt.sign(params, process.env.JWT_SECRET as Secret, {
    expiresIn: 86400,
  });
}

@Controller('api/users')
export class UserController {
  @Post('register')
  public async Register(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    try {
      if (await models.User.findOne({ where: { email } })) {
        res
          .status(400)
          .send({ error: 'Já existe um cadastro com este e-mail' });
        return;
      }

      const user = await models.User.create(req.body);

      res.json({ user, token: await getToken() });
    } catch (error) {
      res.status(400).send({ error: error });
    }
  }
}
