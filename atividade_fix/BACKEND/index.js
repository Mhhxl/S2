const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize');


// Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_ativ_fix', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela "cliente" no banco de dados.
const cliente = sequelize.define('cliente', {
    nome: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> obrigatório
    },
    endereco: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> obrigatório
    },
    email: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> obrigatório
        unique: true // não pode repetir
    },
    formaPagamento: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> obrigatório
    },
    telefone: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> obrigatório
        unique: true // não pode repetir
    }
});

module.exports = cliente;

// ROTA PARA LISTAR TODOS OS CLIENTES
app.get('/cliente', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar clientes." });
    }
});

// ROTA PARA CRIAR UM NOVO CLIENTE
app.post('/cliente', async (req, res) => {
    try {
        const { nome, endereco, email, formaPagamento, telefone } = req.body;

        // Criação do cliente
        const novoCliente = await Cliente.create({
            nome,
            endereco,
            email,
            formaPagamento,
            telefone
        });

        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao cadastrar cliente. Verifique se já existe um cliente com este email ou telefone." });
    }
});


// Definindo o modelo para tabela "produto" no banco de dados.
const produto = sequelize.define('produto', {
    nome: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> obrigatório
    },
    lote: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> obrigatório
        unique: true // cada lote é único
    },
    quantidade: {
        type: DataTypes.INTEGER, // número inteiro
        allowNull: false // NOT NULL -> obrigatório
    },
    categoria: {
        type: DataTypes.STRING, // VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> obrigatório
    },
    validade: {
        type: DataTypes.DATEONLY, // apenas a data (AAAA-MM-DD)
        allowNull: false // NOT NULL -> obrigatório
    }
});

module.exports = produto;

// ROTA PARA LISTAR TODOS OS PRODUTOS
app.get('/produto', async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar produtos." });
    }
});

// ROTA PARA CRIAR UM NOVO PRODUTO
app.post('/produto', async (req, res) => {
    try {
        const { nome, lote, quantidade, categoria, validade } = req.body;

        // Criação do produto
        const novoProduto = await Produto.create({
            nome,
            lote,
            quantidade,
            categoria,
            validade
        });

        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao cadastrar produto. Verifique se já existe um produto com este lote."
        });
    }
});

const app = express(); // INICIALIZA O EXPRESS
app.use(cors()); // PERMITE QUE API ACEITE CONEXÃO DO FRONT-END.
app.use(express.json()); // HABILITA O EXPRESS PARA ENTENDER REQUISIÇÕES COM JSON;

const port = 3000; // PORTA QUE A APLICAÇÃO VAI RODAR

// SINCRONIZA O MODELO COM O BANCO DE DADOS E INICIA O SERVIDOR
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:',);
});
