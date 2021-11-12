'use strict';

import { DataTypes, QueryInterface, UUIDV4 } from "sequelize";

export const up = async (q: QueryInterface) => {
    await q.createTable('users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [5, 100] }
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { len: [5, 100], isEmail: true }
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password_reset_token: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password_reset_expires: {
            type: DataTypes.DATE,
            allowNull: false
          },
          created_at: {
              type: DataTypes.DATE,
              allowNull: false
          },
          updated_at: {
              type: DataTypes.DATE,
              allowNull: false
          }
    })
}
