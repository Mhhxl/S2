// frontend\projetinhofellas\src\components\Header\index.jsx
import './style.css';

function Header() {
    return (
        <header className="header-container">
            <div className="logo">Sistema de Clientes</div>
            <nav>
                <Link> to = "/" Home </Link>
                <Link> to = "/cadastro" Cadastrar </Link>
                <Link> to = "/lista" listar </Link>
            </nav>
        </header>
    )
}