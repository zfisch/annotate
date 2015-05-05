var Sequelize = require('sequelize');
var db = require('../../config/db');

module.exports = db.sequelize.define('Annotator', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
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