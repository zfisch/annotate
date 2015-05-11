var Sequelize = require('sequelize');
var db = require('../../config/db');

module.exports = db.sequelize.define('Media', {
  media_id: {
    type: Sequelize.INTEGER, 
    autoIncrement: true,
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
  video_id: {
    type: Sequelize.STRING,
    defaultValue: 'video name',
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },
  source: {
    type: Sequelize.ENUM('YouTube'), // add more values as needed e.g. Spotify
    defaultValue: 'YouTube',
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: 'video name',
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },
  annotations: {
    type: Sequelize.JSON, 
    allowNull: true
  }
});