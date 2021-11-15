import { Model, Sequelize, DataTypes } from 'sequelize';
import { SequelizeStaticType } from '..';

interface Category extends Model {
  readonly id: number;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export type CategoryStatic = SequelizeStaticType<Category>;

export function build(sequelize: Sequelize) {
  const Category = sequelize.define(
    'categories',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  ) as CategoryStatic;
  Category.associate = (models) => {
    Category.hasMany(models.Post, {
      foreignKey: 'category_id',
      as: 'categories',
    });
  };
  return Category;
}
