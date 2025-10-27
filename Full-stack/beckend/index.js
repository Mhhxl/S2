// index.js

const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_fullstack', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
  },
},
{
  tableName: 'usuarios',
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/usuarios', async (req, res) => {
    const todosUsuarios = await Usuario.findAll();
    res.json(todosUsuarios);
});

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const novoUsuario = await Usuario.create({ nome, email, telefone });
        res.status(201).json({mensagem: 'Usuário criado com sucesso!'});
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar usuário.'});
    }
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🔌Servidor rodando na porta ${PORT}`);
        console.log('🚀 Conectado ao banco de dados MySQL');
    });
}).catch((error) => {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
});