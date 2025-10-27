// src\components\header\index.jsx
import {Link} from "reac-router-dom";
import "./style.css"

function header() {
    return(
        <header className="header-container">
            <div> Gerencimento de Usuarios</div>
            <nav>
                <link to="/"> home </link>
                <link to="/cadastro"cadastrar > </link>
                <link to="/lisar"> Listar Usuarios</link>
            </nav>

        </header>
    );
}


export default header;
