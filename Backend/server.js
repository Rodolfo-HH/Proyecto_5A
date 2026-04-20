require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const passport = require('./config/passport');

const app = express();

app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// FRONTEND
app.use(express.static(path.join(__dirname, '../Frontend')));

// RUTAS
const registrarRutasAuth = require('../api/own/auth');
registrarRutasAuth(app);

const googleAuth = require('../api/integration/googleAuth');
app.use('/auth', googleAuth);

// INICIO
app.get('/', (req, res) => {
    res.redirect('/HTML/PantallaPrincipal.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});