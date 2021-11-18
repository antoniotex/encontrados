import { Controller, Post } from '@overnightjs/core';
import { Response, Request } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
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
          .send({ msg: 'Já existe um cadastro com este e-mail' });
        return;
      }

      const user = await models.User.create(req.body);
      user.password = '';

      res.json({ user, token: await getToken() });
    } catch (error) {
      res.status(400).send({ error: error });
    }
  }

  @Post('authenticate')
  public async Authenticate(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      const user: any = await models.User.findOne({ where: { email } });

      if (!user) {
        res
          .status(400)
          .send({ msg: 'Não encontramos cadastro com estes dados' });
        return;
      }

      if (!(await bcrypt.compare(password, user.password))) {
        res.status(400).send({ msg: 'Usuário ou senha incorretos' });
        return;
      }

      user.password = undefined;
      res.json({ user, token: await getToken({ id: user.id }) });
    } catch (error) {
      res.status(400).send({ error: error, msg: 'Erro ao fazer login' });
    }
  }
}
