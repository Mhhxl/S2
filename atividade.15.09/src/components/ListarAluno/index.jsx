import React, {useState} from 'react';
import './style.css';


function ListarAluno({ alunos }) {
    return (
        <div className='listar-aluno'>
            <h2>Lista de Alunos</h2>
            <ul>
                {alunos && alunos.length > 0 ? (
                    alunos.map((aluno, index) => (
                        <li key={index} >
                            {aluno.nome}  - {aluno.idade} anos - {aluno.email} - {aluno.telefone}
                        </li>
                    )) 
                ) : (
                    <li>Nenhum aluno cadastrado.</li>
                )}
            </ul>
            
                </div>
            )
            
}

export default ListarAluno;