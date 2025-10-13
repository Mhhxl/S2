import React, {useState, useEffect} from "react";
import api from "../../services/api";
import  './styles.css';

function ListaUsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setCarregando(false);
            }
        }

        fetchUsuarios();
    }, []);

    if (carregando) {
        return <div className="lista-container"><h2>Carregando...</h2></div>;
    }

    return (
        <div className="lista-container">
            <h1>Lista de Usuários</h1>
            {usuarios.length === 0 ? (
                <p>Nenhum usuário encontrado.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ListaUsuariosPage;