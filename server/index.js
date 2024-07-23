// src/app.js
const express = require('express');
const { connectDB } = require('./config/sequelize');
const userRoutes = require('./routes/userRoute');

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Conectar a la base de datos y sincronizar modelos
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
}).catch(err => {
  console.error('No se pudo conectar a la base de datos:', err);
});

module.exports = app;
