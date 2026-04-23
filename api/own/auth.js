const express = require('express');
const router = express.Router();
const authController = require('../../Backend/controllers/authController');

// REGISTRO
router.post('/registro', authController.registro);

// LOGIN
router.post('/login', authController.login);

// CREAR PASSWORD
router.post('/crear-password', authController.crearPassword);

module.exports = router;