// projeto\\src\\components\\AdicionarProduto\\index.js
// project2\src\components\addItems\index.js

import React, { useState } from 'react';
import './style.css';

const AdicionarProduto = ({ onAdd }) => {
    const [texto, setTexto] = useState('');

    const enviar = (e) => {
        // Previne o comportamento padrão do formulário
        // que é recarregar a página
        e.preventDefault();
        // Adiciona o produto se o texto não estiver vazio
        if (texto.trim()) {
            // Chama a função onAdd passada via props
            // Props são os parâmetros que um componente recebe
            onAdd(texto);
            // Limpa o campo de texto
            setTexto('');
        }

};
    // retorna o formulário
    return (
        // fromulário para adicionar produtos
        <form className="adicionar-produto" onSubmit={enviar}>
            <input
            // campo para o nome do produto
                type="text"
                // estado controlado
                value={texto}
                // atualiza o estado ao mudar o valor
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Adicionar produto"
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AdicionarProduto;


