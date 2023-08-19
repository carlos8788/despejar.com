const { DataTypes } = require('sequelize');
const sequelize = require('../db.config');

const Avion = sequelize.define('Avion', {
  id_avion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  capacidad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  modelo: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  anio_creacion: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'avion', 
  timestamps: false,
  freezeTableName: true
});

module.exports = Avion;
