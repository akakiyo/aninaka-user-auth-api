const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../sequelize");

const users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email_address: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = {
  users,
};
