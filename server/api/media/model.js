var Sequelize = require('sequelize');
var db = require('../../config/db');

module.exports = db.sequelize.define('Media', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      notEmpty: true,
      isUrl: true
    }
  },
  source: {
    type: Sequelize.ENUM('YouTube'), // add more values as needed e.g. Spotify
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
});