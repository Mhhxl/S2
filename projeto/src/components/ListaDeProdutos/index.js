// projeto\\src\\components\\AdicionarProduto\\index.js

import React from 'react';
import './styles.css';

const ListaDeProdutos = ({itens= [] }) => {
  return (
    <ol Classname= "Lista-Produtos">
        {itens.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ol>
    );
}

export default ListaDeProdutos;