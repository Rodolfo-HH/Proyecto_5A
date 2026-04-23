const express = require('express');
const router = express.Router();
const passport = require('../../Backend/config/passport');

// 🔥 INICIAR
router.get('/github',
    passport.authenticate('github', { scope: ['user:email'] })
);

// 🔥 CALLBACK
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/HTML/IniciarSecion.html' }),
    (req, res, next) => {

        // 🔥 FORZAR GUARDADO DE SESIÓN
        req.logIn(req.user, (err) => {
            if (err) return next(err);

            console.log("USUARIO LOGIN:", req.user);

            if (req.user.necesitaPassword) {
                return res.redirect(`/HTML/CrearContraseña.html?correo=${req.user.correo}`);
            }

            return res.redirect('/HTML/PantallaInicio.html');
        });

    }
);

module.exports = router;