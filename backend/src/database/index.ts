import { Sequelize } from 'sequelize';

import * as config from './config';
import * as User from './models/User';

import 'dotenv/config';

function isNodeEnvValid(env?: string): env is keyof typeof config {
  return !!env && env in config;
}

const env = process.env.NODE_ENV;
console.log(env);

if (!isNodeEnvValid(env)) {
  throw new Error('Teste');
}

const seqConfig = config[env];

export const sequelize = new Sequelize(seqConfig);

function buildModel(seq: Sequelize) {
  return {
    User: User.build(seq),
  };
}

export const models = buildModel(sequelize);
export type Models = ReturnType<typeof buildModel>;
