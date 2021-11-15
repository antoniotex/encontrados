import { DataTypes, QueryInterface } from 'sequelize';

export const up = async (q: QueryInterface) => {
  await q.addColumn('posts', 'category_id', {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
};
