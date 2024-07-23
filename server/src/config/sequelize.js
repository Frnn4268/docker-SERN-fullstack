// src/config/sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_SERVER,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, 
      enableArithAbort: true
    }
  },
  pool: {
    max: 10,
    min: 0,
    idle: 30000
  }
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a SQL Server');
  } catch (err) {
    console.error('Error al conectar a SQL Server:', err);
    throw err;
  }
};

module.exports = {
  sequelize,
  connectDB
};
