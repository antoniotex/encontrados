import { BuildOptions, Model, Sequelize } from 'sequelize';

import * as config from './config';
import * as User from './models/User';
import * as Post from './models/Post';
import * as Category from './models/Category';
import * as Image from './models/Image';

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
  const models = {
    User: User.build(seq),
    Post: Post.build(seq),
    Category: Category.build(seq),
    Image: Image.build(seq),
  };
  Object.keys(models).forEach((key) => {
    const modelKey = key as keyof typeof models;
    if (models[modelKey].associate) {
      models[modelKey].associate!(models);
    }
  });
  return models;
}

export const models = buildModel(sequelize);

export type Models = ReturnType<typeof buildModel>;

type AvailableModelKeys = keyof Models;

type AvailableModels = Models[AvailableModelKeys];

type SequelizeInstanceType<TStatic> = TStatic extends typeof Model & {
  new (values?: Partial<infer U>, options?: BuildOptions): infer U;
}
  ? U
  : never;

export type AvailableModelInstanceTypes =
  SequelizeInstanceType<AvailableModels>;

export type SequelizeStaticType<TInstance> = typeof Model & {
  new (values?: Partial<TInstance>, options?: BuildOptions): TInstance;
} & {
  associate?: (
    assocModels: Record<
      string,
      typeof Model & {
        new (values?: Partial<any>, options?: BuildOptions): any;
      }
    >
  ) => void;
};

export type AnyModel = SequelizeStaticType<AvailableModelInstanceTypes>;
