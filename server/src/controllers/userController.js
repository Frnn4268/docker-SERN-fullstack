// src/controllers/userController.js
const User = require('../models/userModel');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error('Error al obtener los usuarios:', err);
    res.status(500).send('Error al obtener los usuarios');
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({ name, email, password });
    res.status(201).send('Usuario creado exitosamente');
  } catch (err) {
    console.error('Error al crear el usuario:', err);
    res.status(500).send('Error al crear el usuario');
  }
};

module.exports = {
  getAllUsers,
  createUser
};
