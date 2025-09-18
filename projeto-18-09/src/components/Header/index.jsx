// src\components\Header\index.jsx
import { Navlink, link } from "react-router-dom";
import './style.css'
import logo from '../../assets/logo.png'


function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <link to='/' className="Brand">
                    <img src={logo} alt="Logo da contabilidade" />
                    <span> Contabilidade Simples</span>

                </link>
            </div>
            <nav className="nav">
                <Navlink to='/Servicos' className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Servicos </Navlink>

                <Navlink to='/Sobre-Nos' className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Sobre nós </Navlink>

                <Navlink to='/Fale-Conosco' className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Fale Conosco </Navlink>
            </nav>
        </header>
    )
}


export default Header;
