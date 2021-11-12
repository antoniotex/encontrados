import { Options } from 'sequelize';
import 'dotenv/config';

function getOptions(
  prefix: string,
  aditionalOptions?: Partial<Options>
): Options {
  return {
    database: 'Encontrados',
    dialect: 'mssql',
    host: process.env[`${prefix}_DB_HOST`],
    port: Number.parseInt(process.env[`${prefix}_DB_PORT`] || '1433', 10),
    username: process.env[`${prefix}_DB_USERNAME`],
    password: process.env[`${prefix}_DB_PASSWORD`],
    define: {
      timestamps: true,
    },
    ...aditionalOptions,
  };
}

export const development: Options = getOptions('DEV');
export const test: Options = getOptions('TEST');
