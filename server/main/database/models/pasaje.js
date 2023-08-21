const { DataTypes } = require('sequelize');
const sequelize = require('../db.config');

const Pasaje = sequelize.define('Pasaje', {
  nombrePasajero: {
    type: DataTypes.STRING
  },
  id_avion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  id_vuelo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_punto:{
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  precio:{
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  numeroAsiento: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  premium: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
  
}, {
  tableName: 'pasaje', 
  freezeTableName: true
});

module.exports = Pasaje;
