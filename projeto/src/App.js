import React, { useState } from 'react';
import './App.css';
import logo from '../src/assets/Images/logo_senai.png';

import AdicionarProduto from "./components/AdicionarProduto";
import ListaDeProdutos from "./components/ListaDeProdutos";

function App(){
  const [Produtos, setProdutos] = React.useState(['Mouse', 'Teclado', 'Monitor']);

  const adicionarUsuario = (nome) => {
    const Produtos =nome.trim();

    if (Produtos.includes(Produtos)) {
      alert('Produto já existe na lista!');
      return;
    }
    setProdutos((Produtos) => [...Produtos, nome]);

  };
  return (
    <div className="App">
      <img src={logo} className="logo" alt="Logo do Senai" />
      <h1>Produtos</h1>
      <AdicionarProduto onAdicionar={adicionarUsuario} />
      <ListaDeProdutos itens={Produtos} />
    </div>
  );
}

export default App;