import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>AtivFix</h3>
          <p>Seu sistema de gestão simples e eficiente</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/clientes">Clientes</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/cadastro">Cadastrar</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} — <strong>AtivFix</strong>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
