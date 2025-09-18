// src\pages\Servicos\index.jsx
import './style.css'

function Servicos() {
    return (
        <section className="servicos">
            <h1> Serviços de contabilidade</h1>
            <p> Atendemos empresas de todos os portes com pacotes sob medida</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3> Abertura de empresa</h3>
                    <p>Do zero à regulação: CAE, contrato social e inscrição</p>
            </div>
                <div className='card'>
                    <h3> Fiscal & Tributário</h3>
                    <p> Apuração de impostos, SPED, DCTF, EFD e obrigações acessórias</p>
            </div>
                <div className='card'>
                    <h3> Folha de pagamento</h3>
                    <p> Processamento, encargos, admissões, demissões e obrigações trabalhistas</p>
            </div>
            </div>
       </section>


    )
}


export default Servicos;