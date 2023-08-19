const { DataTypes } = require('sequelize');
const sequelize = require('../db.config');

const Punto = sequelize.define('Punto', {
  id_punto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  nombre_ciudad: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  codigo_aeropuerto: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
}, {
  tableName: 'punto', 
  timestamps: false,
  freezeTableName: true
});

module.exports = Punto;
