import { Model, UUIDV4, Sequelize, DataTypes, BuildOptions } from 'sequelize';
import * as bcrypt from 'bcryptjs';

interface User extends Model {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  password_reset_token: string;
  password_reset_expires: Date;
  created_at: Date;
  updated_at: Date;
}

type UserStatic = typeof Model & {
  new (values?: Partial<User>, options?: BuildOptions): User;
};

export function build(sequelize: Sequelize) {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [5, 100] },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { len: [5, 100], isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password_reset_token: {
        type: DataTypes.STRING,
      },
      password_reset_expires: {
        type: DataTypes.DATE,
      },
    },
    {
      hooks: {
        beforeSave: async (user: User) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        },
      },
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  ) as UserStatic;
  return User;
}
