// src\components\Header\index.jsx
import { NavLink, Link } from "react-router-dom";
import './style.css'
import logo from '../../assets/logo.png'


function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <Link to='/' className="Brand">
                    <img src={logo} alt="Logo da contabilidade" />
                    <span> Contabilidade Simples</span>

                </Link>
            </div>
            <nav className="nav">
                <NavLink to='/Servicos' className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Servicos </NavLink>

                <NavLink to='/Sobre-Nos' className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Sobre nós </NavLink>

                <NavLink to='/Fale-Conosco' className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Fale Conosco </NavLink>
            </nav>
        </header>
    )
}


export default Header;
