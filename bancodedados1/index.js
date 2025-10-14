const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize');


// Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_aula2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela " funcionario" no banco de dados.
const funcionario = sequelize.define('funcionario', {
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    cpf: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true
    },
    rg: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true
    },
     matricula: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true
    },
     datanascimento: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        
    },
     salario: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
      
    },
     telefone: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true
    },
    email: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true // NÃO PODE REPETIR
    }
});



// ROTA PARA LISTAR TODOS OS FUNCIONARIOS
app.get('/funcionario', async (req, res) => {
    const funcionario = await Funcionario.findAll();
    res.json(funcionario);
});

// ROTA PARA CRIAR UM NOVO FUNCIONARIO
app.post('/funcionario', async (req, res) => {
    try {
        const { nome,cpf, rg, matricula, datanascimento, salario, telefone, email } = req.body;
        const novoFuncionario = await Funcionario.create({ nome, cpf, rg, matricula, datanascimento, salario, telefone, email });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({ mensagem: "Funcionario já cadastrado." });
        
    }
});

// Definindo o modelo para tabela " Produto " no banco de dados.

const produto = sequelize.define('produto', {
    id: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true  
    },
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    lote: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true  
    },
    validade: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        
    },
});



// ROTA PARA LISTAR TODOS OS PRODUTOS   
app.get('/produto', async (req, res) => {
    const produto = await produto.findAll();
    res.json(produto);
});

// ROTA PARA CRIAR UM NOVO FUNCIONARIO
app.post('/produto', async (req, res) => {
    try {
        const { id, nome, lote, validade} = req.body;
        const produto = await Produto.create({ id, nome, lote, validade });
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ mensagem: "Produto já cadastrado." });
        
    }
});


// Definindo o modelo para tabela " Cliente " no banco de dados.

const cliente = sequelize.define('cliente', {
    id: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true  
    },
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    datanascimento: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        
    },
    protocoloAtendimento: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true
    },
});




// ROTA PARA LISTAR TODOS OS PRODUTOS   
app.get('/cliente', async (req, res) => {
    const cliente = await cliente.findAll();
    res.json(cliente);
});

// ROTA PARA CRIAR UM NOVO FUNCIONARIO
app.post('/cliente', async (req, res) => {
    try {
        const { id, nome, datanascimento, protocoloAtendimento} = req.body;
        const cliente = await Cliente.create({ id, nome, datanascimento, protocoloAtendimento });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ mensagem: "Cliente já cadastrado." });
        
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


// creio q esse codigo esteja funcionando