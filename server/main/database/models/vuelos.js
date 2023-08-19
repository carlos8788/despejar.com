const sequelize = require('../db.config');
const { DataTypes } = require('sequelize');


const vueloModel = sequelize.define('Vuelo', {
  id_vuelo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_azafata: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  id_piloto: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  id_ruta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_avion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  horario_vuelo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: 'vuelo', // Reemplazar por el nombre real de la tabla
  timestamps: false, // Si la tabla no tiene campos de timestamps, desactivar esta opción
});

module.exports = vueloModel;