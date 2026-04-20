import express from 'express'
import passport from '../../Backend/config/passport.js'

const router = express.Router()

// 🔹 Iniciar con Google
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

// 🔹 Callback de Google
router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        console.log('Usuario autenticado:', req.user)

        // 👉 puedes cambiar esto a tu HTML real
        res.redirect('../HTML/PantallaInicio.html')
    }
)

export default router