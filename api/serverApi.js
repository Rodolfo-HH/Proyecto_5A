const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 TUS RUTAS DE API
const authRoutes = require('./own/auth');

app.use('/api', authRoutes);

app.listen(4000, () => {
    console.log('API en http://localhost:4000');
});