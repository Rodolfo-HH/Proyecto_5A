const express = require('express');
const router = express.Router();
const db = require('../config/database');
const bcrypt = require('bcrypt'); // o bcryptjs si usaste ese

// =======================
// REGISTRO
// =======================
router.post('/registro', async (req, res) => {
    const { nombre, correo, telefono, direccion, password } = req.body;

    if (!nombre || !correo || !password) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        const hash = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO usuarios (nombre, correo, telefono, direccion, password)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(sql, [nombre, correo, telefono, direccion, hash], (err) => {
            if (err) {
                console.error("Error DB:", err);
                return res.status(500).json({ error: "Error al registrar" });
            }

            res.json({ mensaje: "Usuario registrado correctamente 🔥" });
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en servidor" });
    }
});


// =======================
// LOGIN
// =======================
router.post('/login', (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const sql = "SELECT * FROM usuarios WHERE correo = ?";

    db.query(sql, [correo], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error servidor" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const usuario = results[0];

        try {
            const coincide = await bcrypt.compare(password, usuario.password);

            if (!coincide) {
                return res.status(401).json({ error: "Contraseña incorrecta" });
            }

            // 🔥 QUITAR PASSWORD ANTES DE ENVIAR
            const { password: _, ...usuarioSinPassword } = usuario;

            res.json({ usuario: usuarioSinPassword });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al verificar contraseña" });
        }
    });
});

// =======================
// CAMBIAR CONTRASEÑA
// =======================
router.post('/crear-password', async (req, res) => {
    const { correo, password } = req.body;

    console.log("📩 Datos recibidos:", correo, password);

    if (!correo || !password) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        const hash = await bcrypt.hash(password, 10);

        const sql = "UPDATE usuarios SET password = ? WHERE correo = ?";

        db.query(sql, [hash, correo], (err, result) => {

            if (err) {
                console.error("❌ ERROR SQL:", err);
                return res.status(500).json({ error: "Error al actualizar contraseña" });
            }

            console.log("✅ Resultado:", result);

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            res.json({ mensaje: "Contraseña actualizada correctamente 🔥" });
        });

    } catch (error) {
        console.error("❌ ERROR SERVER:", error);
        res.status(500).json({ error: "Error en servidor" });
    }
});

module.exports = router;