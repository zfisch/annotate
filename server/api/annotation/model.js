var Sequelize = require('sequelize');
var db = require('../../config/db');

module.exports = db.sequelize.define('Annotation', {
  annotation_id: {
    type: Sequelize.INTEGER, 
    autoIncrement: true,
    primaryKey: true
  },
  notes: {
    type: Sequelize.JSON, 
    allowNull: true
  }
});