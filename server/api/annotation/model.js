var Sequelize = require('sequelize');
var db = require('../../config/db');

module.exports = db.sequelize.define('Annotation', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  notes: {
    type: Sequelize.JSON, 
    allowNull: true
  }
});