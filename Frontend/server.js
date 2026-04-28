const express = require('express');
const path = require('path');

const app = express();

// Archivos estáticos (CSS, Imágenes) — SIEMPRE antes de las rutas
app.use(express.static(path.join(__dirname, 'public')));

// Configurar Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.get('/', (req, res) => res.render('principal'));
app.get('/login', (req, res) => res.render('login'));
app.get('/registro', (req, res) => res.render('registro'));
app.get('/ofertas', (req, res) => res.render('ofertas'));
app.get('/productos', (req, res) => res.render('productos'));
app.get('/compra-exitosa', (req, res) => res.render('compra-exitosa'));
app.get('/crear-password', (req, res) => res.render('crear-password'));
app.get('/validar', (req, res) => res.render('validar'));
app.get('/inicio', (req, res) => res.render('inicio'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});