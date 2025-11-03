// ativ_fix\src\components\HomePage\index.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Bem-vindo ao Sistema de Gestão</h1>
        <p>Gerencie clientes e produtos de forma simples e eficiente.</p>
      </header>

      <main className="homepage-content">
        <div className="card">
          <h2>Clientes</h2>
          <p>Cadastre e visualize os clientes do sistema.</p>
          <Link to="/clientes" className="btn">
            Acessar Clientes
          </Link>
        </div>

        <div className="card">
          <h2>Produtos</h2>
          <p>Gerencie os produtos cadastrados no estoque.</p>
          <Link to="/produtos" className="btn">
            Acessar Produtos
          </Link>
        </div>
      </main>

      <footer className="homepage-footer">
        <p>© {new Date().getFullYear()} - Sistema de Gestão</p>
      </footer>
    </div>
  );
};

export default HomePage;
