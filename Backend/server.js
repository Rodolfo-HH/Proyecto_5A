require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../Frontend')));

// Importar y registrar rutas de API
const registrarRutasAuth = require('../api/own/auth');
registrarRutasAuth(app);

// REDIRIGIR RAÍZ A PANTALLA PRINCIPAL
app.get('/', (req, res) => {
    res.redirect('/HTML/PantallaPrincipal.html');
});

// Ruta de prueba API (opcional)
app.get('/api', (req, res) => {
    res.json({ mensaje: 'API Carniceria Mi Mary funcionando' });
});

// IMPORTANTE: importar ruta de integration
import googleAuth from '../api/integration/googleAuth.js'

const app = express()

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

// USAR RUTA GOOGLE
app.use('/auth', googleAuth)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Frontend: http://localhost:${PORT}/html/PantallaPrincipal.html`);
});