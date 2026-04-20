const express = require('express');
const passport = require('../../Backend/config/passport');

const router = express.Router();

// LOGIN GOOGLE
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// CALLBACK
router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/HTML/IniciarSesion.html'
    }),
    (req, res) => {

        const user = req.user;

        // 👉 SI NO TIENE PASSWORD
        if (user.necesitaPassword) {
            return res.redirect(`/HTML/CrearContraseña.html?correo=${user.correo}`);
        }

        // 👉 SI YA TIENE
        res.redirect('/HTML/PantallaPrincipal.html');
    }
);

module.exports = router;