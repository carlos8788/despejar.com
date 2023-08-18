const { DataTypes } = require('sequelize');
const sequelize = require('../db.config');

const VueloView = sequelize.define('VueloView', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  Destino: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Origen: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Avion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  'Horario de vuelo': {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  'Fecha': {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
}, {
  tableName: 'vuelo_view', 
  timestamps: false,
  freezeTableName: true
});

module.exports = VueloView;
