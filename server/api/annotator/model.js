var Sequelize = require('sequelize');
var db = require('../../config/db');

module.exports = db.sequelize.define('Annotator', {
  annotator_id: {
    type: Sequelize.INTEGER, 
    autoIncrement: true,
    primaryKey: true
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