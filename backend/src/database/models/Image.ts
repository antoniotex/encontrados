import { Model, Sequelize, DataTypes } from 'sequelize';
import { SequelizeStaticType } from '..';

interface Image extends Model {
  readonly id: number;
  location: string;
  created_at: Date;
  updated_at: Date;
}

export type ImageStatic = SequelizeStaticType<Image>;

export function build(sequelize: Sequelize) {
  const Image = sequelize.define(
    'images',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  ) as ImageStatic;
  Image.associate = (models) => {
    Image.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' });
  };
  return Image;
}
