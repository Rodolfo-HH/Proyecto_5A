const express = require('express');
const router = express.Router();
const passport = require('../../Backend/config/passport');

// 🔥 INICIAR LOGIN
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// 🔥 CALLBACK
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/HTML/IniciarSecion.html' }),
    (req, res) => {

        if (!req.user) {
            return res.redirect('/HTML/IniciarSecion.html');
        }

        if (req.user.necesitaPassword) {
            return res.redirect(`/HTML/CrearContraseña.html?correo=${req.user.correo}`);
        }

        res.redirect('/HTML/PantallaInicio.html'); // 🔥 TU PANTALLA FINAL
    }
);

module.exports = router;