// ativ_fix\src\components\ListaProdutos\index.jsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api"; // ajuste conforme seu caminho
import "./styles.css";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarProdutos = async () => {
    try {
      setLoading(true);
      const response = await api.get("/produto");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      toast.error("Erro ao carregar produtos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div className="lista-produtos-container">
      <div className="lista-produtos-header">
        <h2>Lista de Produtos</h2>
        <button onClick={carregarProdutos} className="btn-atualizar">
          🔄 Atualizar
        </button>
      </div>

      {loading ? (
        <p className="mensagem-status">Carregando produtos...</p>
      ) : produtos.length === 0 ? (
        <p className="mensagem-status">Nenhum produto cadastrado.</p>
      ) : (
        <table className="tabela-produtos">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Lote</th>
              <th>Quantidade</th>
              <th>Categoria</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.lote}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.categoria}</td>
                <td>{produto.validade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaProdutos;
