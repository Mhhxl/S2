// ativ_fix\src\components\ListaClientes\index.jsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api"; // ajuste o caminho conforme sua estrutura
import "./styles.css";

function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar clientes
  const carregarClientes = async () => {
    try {
      setLoading(true);
      const response = await api.get("/cliente");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
      toast.error("Erro ao carregar clientes. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Carregar clientes ao montar o componente
  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <div className="lista-clientes-container">
      <div className="lista-clientes-header">
        <h2>Lista de Clientes</h2>
        <button onClick={carregarClientes} className="btn-atualizar">
          🔄 Atualizar
        </button>
      </div>

      {loading ? (
        <p className="mensagem-status">Carregando clientes...</p>
      ) : clientes.length === 0 ? (
        <p className="mensagem-status">Nenhum cliente cadastrado.</p>
      ) : (
        <table className="tabela-clientes">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Forma de Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.endereco}</td>
                <td>{cliente.formaPagamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaClientes;
