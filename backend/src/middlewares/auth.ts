import jwt, { GetPublicKeyOrSecret, Secret } from 'jsonwebtoken';
import 'dotenv/config';

// Next é chamado caso o usuario tenha permissão para acessar o controller
export default (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  console.log('passei por aqui');

  if (!authHeader) {
    return res.status(401).send({ error: 'O token não foi informado' });
  }

  // Formato token: Bearer ioaniecebubwxuxbaicvqebicbeuvxywdgvcgdveybxw
  const pieces = authHeader.split(' ');

  if (pieces.length !== 2) {
    return res.status(401).send({ error: 'Erro de token' });
  }

  const [scheme, token] = pieces;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token não está formatado' });
  }

  const secret: Secret | GetPublicKeyOrSecret = process.env.JWT_SECRET as
    | Secret
    | GetPublicKeyOrSecret;

  jwt.verify(token, secret, (error: any, decoded: any) => {
    if (error) return res.status(401).send({ error: 'Token inválido' });

    req.userId = decoded.id;
    return next();
  });
};
