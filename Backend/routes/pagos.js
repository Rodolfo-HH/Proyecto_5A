const express = require('express');
const router = express.Router();
const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/crear-sesion', async (req, res) => {
    try {
        const { nombre, precio } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'mxn',
                    product_data: {
                        name: nombre,
                    },
                    unit_amount: precio * 100, // centavos
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:5500/html/compraExitosa.html',
            cancel_url: 'http://localhost:5500/html/Productos.html',
        });

        res.json({ url: session.url });

    } catch (error) {
        console.log("ERROR STRIPE:", error);
        res.status(500).json({ error: 'Error al crear sesión' });
    }
});

module.exports = router;