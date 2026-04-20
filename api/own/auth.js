const authController = require('../../Backend/controllers/authController.js');

function registrarRutas(app) {

    // 🔐 REGISTRO
    app.post('/api/own/auth/registro', authController.registro);
    
    // 🔐 LOGIN
    app.post('/api/own/auth/login', authController.login);

    // 🔐 CREAR PASSWORD (GOOGLE)
    app.post('/api/crear-password', authController.crearPassword);
}

module.exports = registrarRutas;