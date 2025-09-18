// src\components\Footer\index.jsx
import './style.css'
import { Navlink, link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div>
                    <strong> Contabilidade Dendezeiros</strong> -cnpj: 00.000.000/0001-00                    
                </div>
                <div>
                    Avenida Dendezeiros,  890 - Bonfim - Salvador - BA
                </div>
                <div className='copy'>
                    © {new Date().getFullYear()} Todos os direitos reservados
                    
                </div>
            </div>
        </footer>
    )
}
export default Footer;