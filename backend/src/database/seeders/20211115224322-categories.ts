import { QueryInterface } from 'sequelize';

export const up = async (q: QueryInterface) => {
  await q.bulkInsert(
    'categories',
    [
      {
        description: 'Pessoa encontrada',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: 'Pessoa desaparecida',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: 'Objeto/pertence encontrado',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: 'Objeto/pertence perdido',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {}
  );
};
