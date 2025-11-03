import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
    return (
        <header className="header-container">
            <div className="header-logo">Gerenciamento de Usuários</div>
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/listar">Listar Usuários</Link>
            </nav>
        </header>
    );
}

export default Header;
