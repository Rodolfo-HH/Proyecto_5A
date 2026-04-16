// /api/own/auth.js

const authController = require('../../Backend/controllers/authController.js');

function registrarRutas(app) {
    // POST /api/own/auth/registro
    app.post('/api/own/auth/registro', authController.registro);
    
    // POST /api/own/auth/login
    app.post('/api/own/auth/login', authController.login);
}

module.exports = registrarRutas;