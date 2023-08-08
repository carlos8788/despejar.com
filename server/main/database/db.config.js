const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vuelos_comerciales', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
