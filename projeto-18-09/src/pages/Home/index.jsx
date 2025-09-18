// src\pages\Home\index.jsx
import './style.css'

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero__wrap">
                    <h1> Contabilidade descomplicada para seu negócio </h1>
                    <p> Economize tempo e foque no que importa. Cuidamos da sua folha, impostos e obrigações com tecnologia e atendimento humano </p>
                    <div className='hero__cta'>
                        <link to="/servicos" className=' btn primary'> Conheça nossos serviços</link>
                    </div>
                </div>
                <div className='hero__img'>
                    <img src={Hero} alt= 'equipe de contabilidade'></img>

                </div>
            </section>
            <section className='features'>
                <h2> Por que nos escolher? </h2>
                <div className='grid cls-3'>
                    <div className='card'>
                        <h3> Atendimento prioritário </h3>
                        <p> Suporte rapido pelo WhatsApp, E-mail e reuniões online.</p>
                        <div className='card'>
                            <h3> Tecnologia  </h3>
                            <p> Integrações com banco de dados e plataformas para automatização .</p>
                        </div>
                        
                        <div className='card'>
                            <h3> Planejamento Tributário  </h3>
                            <p>Escolha o regime ideal e estratégias legais para pagar menos impostos.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className='social-proof'>
                <div className=' SocialProof__image'>
                    <img src= {office } alt = 'Escritório da empresa'/>
                </div>
                <div className='social-proof__text'>
                    <h2> Mais de 200 empresas confiam em nós</h2>
                    <p></p>
                </div>
            </section>
        </div>
    )
}

export default Home;