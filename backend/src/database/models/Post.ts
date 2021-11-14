import { Model, Sequelize, DataTypes } from 'sequelize';
import { SequelizeStaticType } from '..';

interface Post extends Model {
  readonly id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export type PostStatic = SequelizeStaticType<Post>;

export function build(sequelize: Sequelize) {
  const Post = sequelize.define(
    'posts',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  ) as PostStatic;
  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  };
  return Post;
}
