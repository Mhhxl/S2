// src\pages\FaleConosco\index.jsx
import './style.css'

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');

    }
    return (
        <section className="contato">
            <h1>Fale Conosco</h1>
            <p> Tire suas duvidas e peça um orçamento se compromisso.</p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <span> Nome: </span>
                        <input type="text" name='nome' placeholder='Seu nome'required />
                    </label>
                    <label className='field'>
                        <span> Email: </span>
                        <input type="email" name='email' required />
                    </label>
                    <label className='field'>
                        <span> Telefone: </span>
                        <input type="tel" name='telefone' placeholder='(xx) xxxx-xxxx' required />
                    </label>    
                </div>

                <label className='field'>
                    <span> Assunto: </span>
                    <input type="text"   required placeholder=' "EX: Abertura de empresa"' />
                </label>

                <label className='field'>
                    <span> Mensagem: </span>
                    <textarea rows={6} placeholder='Escreva sua mensagem aqui...' required></textarea>
                </label>
                <button className='brn primary' type='submit'> Enviar </button>
            </form>
        </section>


    )

    
}



export default FaleConosco;