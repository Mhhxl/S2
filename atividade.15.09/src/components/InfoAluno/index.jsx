import React, { useState } from 'react';
import './style.css';
import ListarAluno from '../ListarAluno';

function InfoAluno() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [listarAluno, setListarAluno] = useState([]);

    function adicionarAluno(event) {
        event.preventDefault();
        setListarAluno([
            ...listarAluno,
            { nome, idade, email, telefone }
        ]);
        setNome('');
        setIdade('');
        setEmail('');
        setTelefone('');
    }

    return (
        <div className='Info-cliente'>
            <h2>Cadastro Do Aluno</h2>
            <form onSubmit={adicionarAluno}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Idade:</label>
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar Aluno</button>
            </form>
            <hr />
            {/* Remova o <ul> e o .map() daqui */}
            {/* Renderize a lista usando o componente ListarAluno */}
            <ListarAluno alunos={listarAluno} />
        </div>
    );
}

export default InfoAluno;