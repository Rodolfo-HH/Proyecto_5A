const express = require('express');
const router = express.Router();
const db = require('../config/database');
const bcrypt = require('bcrypt'); // o bcryptjs si usaste ese

// =======================
// REGISTRO
// =======================
router.post('/registro', async (req, res) => {
    const { nombre, correo, telefono, direccion, password } = req.body;

    if (!nombre || !correo || !password || !telefono || !direccion) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const hash = await bcrypt.hash(password, 10);

    const sql = `
        INSERT INTO usuarios (nombre, correo, telefono, direccion, password)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [nombre, correo, telefono, direccion, hash], (err) => {
        if (err) return res.status(500).json({ error: "Error DB" });

        res.json({ mensaje: "Usuario completo creado 🔥" });
    });
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

    // 🔥 PRIMERO declarar variables
    const { correo, password, telefono, direccion } = req.body;

    console.log("Datos recibidos:", { correo, password, telefono, direccion });

    if (!correo || !password || !telefono || !direccion) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        // 🔍 VERIFICAR SI EXISTE USUARIO
        const checkSql = "SELECT * FROM usuarios WHERE correo = ?";

        db.query(checkSql, [correo], async (err, results) => {

            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Error en consulta" });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: "Usuario no existe" });
            }

            // 🔐 HASH PASSWORD
            const hash = await bcrypt.hash(password, 10);

            // 🔥 UPDATE
            const updateSql = `
                UPDATE usuarios 
                SET password = ?, telefono = ?, direccion = ?
                WHERE correo = ?
            `;

            db.query(updateSql, [hash, telefono, direccion, correo], (err, result) => {

                if (err) {
                    console.error("ERROR SQL:", err);
                    return res.status(500).json({ error: "Error al actualizar" });
                }

                res.json({ mensaje: "Datos actualizados correctamente 🔥" });
            });

        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en servidor" });
    }
});

module.exports = router;