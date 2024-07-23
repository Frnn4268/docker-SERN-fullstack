// src/routes/userRoute.js
const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');
const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

// Ruta para crear un nuevo usuario
router.post('/users', createUser);

module.exports = router;
