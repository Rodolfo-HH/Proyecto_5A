require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const cors = require('cors');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({
    origin: ['http://localhost:5500', 'http://localhost:3000'],
    credentials: true
}));

app.use(express.json());

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// RUTAS AUTH (Google/GitHub)
const googleAuth = require('../api/integration/googleAuth');
const githubAuth = require('../api/integration/githubAuth');

app.use('/auth', googleAuth);
app.use('/auth', githubAuth);

// RUTA PARA SABER SI ESTÁ LOGUEADO
app.get('/api/usuario', (req, res) => {
    if (req.user) {
        res.json({ logueado: true, usuario: req.user });
    } else {
        res.json({ logueado: false });
    }
});

// LOGOUT
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('http://localhost:5500/HTML/PantallaInicio.html');
    });
});

app.post('/api/pago/crear-sesion', async (req, res) => {
    try {

        const { nombre, precio } = req.body;

        const precioNumero = Number(precio);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'mxn',
                    product_data: { name: nombre },
                    unit_amount: Math.round(precioNumero * 100)
                },
                quantity: 1
            }],
            mode: 'payment',

            success_url: 'http://localhost:3000/html/compraExitosa.html',
            cancel_url: 'http://localhost:3000/html/Productos.html'
        });

        res.json({ url: session.url });

    } catch (error) { // 🔥 AQUÍ ESTÁ LA CLAVE
        console.error("ERROR STRIPE:", error);
        res.status(500).json({ error: 'Error en pago' });
    }
});

// Servir frontend
app.use(express.static(path.join(__dirname, '../Frontend')));

app.listen(3000, () => {
    console.log('Backend en http://localhost:3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/PantallaPrincipal.html'));
});