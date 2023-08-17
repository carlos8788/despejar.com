const sequelize = require('../db.config');
const { DataTypes } = require('sequelize');

const rutasModel = sequelize.define('Rutas', {
  id_ruta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  origen: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destino: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  distancia: {
    type: DataTypes.DECIMAL(8,3),
    allowNull: false,
  },
}, {
  tableName: 'rutas', // Nombre real de la tabla
  timestamps: false,  // Si la tabla no tiene campos de timestamps, desactivar esta opción
});

module.exports = rutasModel;
