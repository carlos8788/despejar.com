const sequelize  = require('./db.config.js');

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected...');
    } catch (err) {
        console.error('Error: ' + err);
    }
};

// connectDatabase()
module.exports = connectDatabase;