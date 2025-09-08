// src\components\InfoCliente\index.jsx
import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/images/logo.png';

function InfoCliente() {
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [telefone, settelefone] = useState('');



    const [listaClientes, setlistaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setlistaClientes([...listaClientes, {nome, email}]);
            setnome('');
            setemail('');
            settelefone('');
    }

    return (
        <>
            <div className='Info-cliente'>
                <img src={logo} alt="Logou" className='clientela'/>
                <h2>Cadastro Cliente</h2>
                <form onSubmit={adicionarCliente}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" 
                        value={nome}
                        onChange={(e) => setnome(e.target.value)}
                        required/>
                        
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" 
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required/>
                    </div>
                    <button type="submit">Adicionar Cliente</button>
                </form>
                <hr />
                
                <h3>Lista de Clientes</h3>
                <ul>
                    {listaClientes.map((cliente, index) => (
                        <li key={index}>
                            {cliente.nome} - {cliente.email}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                
            </div>1
            
        </>
    )
}

export default InfoCliente;