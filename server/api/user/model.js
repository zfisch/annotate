var Sequelize = require('sequelize');
var db = require('../../config/db');

module.exports = db.sequelize.define('User', {
  user_id: {
    type: Sequelize.INTEGER, 
    autoIncrement: true,
    primaryKey: true
  },
  isAnnotator: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    validate: {
      notEmpty: true
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING, 
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  }
});