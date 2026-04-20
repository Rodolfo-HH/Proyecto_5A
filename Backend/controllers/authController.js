const db = require('../config/database.js');
const { hashPassword } = require('../utils/hash.js');

// REGISTRO DE USUARIOS
exports.registro = async (req, res) => {
    const { nombre, correo, telefono, direccion, password } = req.body;
    
    // Validar campos
    if (!nombre || !correo || !telefono || !direccion || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    
    // Verificar si correo existe
    db.query('SELECT * FROM usuarios WHERE correo = ?', [correo], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en base de datos' });
        if (results.length > 0) return res.status(400).json({ error: 'El correo ya está registrado' });
        
        // Encriptar password
        const hashedPassword = await hashPassword(password);
        
        // Insertar usuario
        db.query(
            'INSERT INTO usuarios (nombre, correo, password, telefono, direccion, id_rol) VALUES (?, ?, ?, ?, ?, 3)',
            [nombre, correo, hashedPassword, telefono, direccion],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Error al registrar usuario' });
                }
                res.status(201).json({ 
                    mensaje: 'Usuario registrado exitosamente',
                    id_usuario: result.insertId 
                });
            }
        );
    });
};

// LOGIN
exports.login = async (req, res) => {
    const { correo, password } = req.body;
    
    if (!correo || !password) {
        return res.status(400).json({ error: 'Correo y contraseña requeridos' });
    }
    
    db.query(
        'SELECT u.*, r.nombre_rol FROM usuarios u JOIN roles r ON u.id_rol = r.id_rol WHERE u.correo = ?',
        [correo],
        async (err, results) => {
            if (err) return res.status(500).json({ error: 'Error en base de datos' });
            if (results.length === 0) return res.status(401).json({ error: 'Usuario no encontrado' });
            
            const usuario = results[0];
            const { comparePassword } = require('../utils/hash');
            const validPassword = await comparePassword(password, usuario.password);
            
            if (!validPassword) return res.status(401).json({ error: 'Contraseña incorrecta' });
            
            res.json({
                mensaje: 'Login exitoso',
                usuario: {
                    id_usuario: usuario.id_usuario,
                    nombre: usuario.nombre,
                    correo: usuario.correo,
                    rol: usuario.nombre_rol
                }
            });
        }
    );
};

// GOOGLE LOGIN / REGISTER
exports.googleAuth = (perfil) => {
    return new Promise((resolve, reject) => {

        const nombre = perfil.displayName;
        const correo = perfil.emails[0].value;

        db.query(
            'SELECT u.*, r.nombre_rol FROM usuarios u JOIN roles r ON u.id_rol = r.id_rol WHERE u.correo = ?',
            [correo],
            (err, results) => {

                if (err) return reject(err);

                // 👉 NO EXISTE → CREAR
                if (results.length === 0) {

                    db.query(
                        'INSERT INTO usuarios (nombre, correo, password, telefono, direccion, id_rol) VALUES (?, ?, ?, ?, ?, 3)',
                        [nombre, correo, null, null, null],
                        (err, result) => {
                            if (err) return reject(err);

                            resolve({
                                id_usuario: result.insertId,
                                nombre,
                                correo,
                                rol: 'cliente',
                                necesitaPassword: true
                            });
                        }
                    );

                } else {
                    const usuario = results[0];

                    resolve({
                        id_usuario: usuario.id_usuario,
                        nombre: usuario.nombre,
                        correo: usuario.correo,
                        rol: usuario.nombre_rol,
                        necesitaPassword: usuario.password === null
                    });
                }
            }
        );
    });
};

// CREAR PASSWORD
exports.crearPassword = async (req, res) => {

    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }

    const { hashPassword } = require('../utils/hash');
    const hashed = await hashPassword(password);

    db.query(
        'UPDATE usuarios SET password = ? WHERE correo = ?',
        [hashed, correo],
        (err) => {
            if (err) return res.status(500).json({ error: 'Error al guardar contraseña' });

            res.json({ mensaje: 'Contraseña creada correctamente' });
        }
    );
};