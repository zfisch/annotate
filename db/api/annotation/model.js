/**
 * Because Media and Annotation have a one to one relationship,
 * we are putting annotation directly on the Media model for 
 * fast ramp up. Uncomment the code below to create a separate
 * annotation table.
 */

// var Sequelize = require('sequelize');
// var db = require('../../config/db');

// module.exports = db.sequelize.define('Annotation', {
//   annotation_id: {
//     type: Sequelize.INTEGER, 
//     autoIncrement: true,
//     primaryKey: true
//   },
//   notes: {
//     type: Sequelize.JSON, 
//     allowNull: true
//   }
// });