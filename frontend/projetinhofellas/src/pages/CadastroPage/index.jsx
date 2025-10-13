import '.styles.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useForm } from 'react-hook-form';

// Esquema de validação usando Yup.
const esquemaDeCadastro = yup.object().shape({
    nome: yup.string()
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .required('Nome é obrigatório'),
    email: yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
});

function CadastroPage() {
    // Configuração do React Hook Form com validação Yup.
    const {
        register: registrarCampo,
        handleSubmit: lidarComEnvioDoFormulario,
        formState: { errors: errosDoFormulario, isSubmitting: estaEnviando },
        setError: definirErroNoCampo,
        reset: limparCamposDoFormulario
    } = useForm({
        resolver: yupResolver(esquemaDeCadastro),
        defaultValues: { nome: '', email: '' }
    });

    // Função para enviar os dados do formulário.
    async function enviarDados(dadosDoFormulario) {
        try {
            // Envia os dados para a API.
            await api.post('/usuarios', dadosDoFormulario);
            toast.success('Cadastro realizado com sucesso!');
            limparCamposDoFormulario();
        } catch (error) {
            const codigoStatus = error.response?.status;
            const mensagemDeErro = error.response?.data?.message || '';

            // Verifica se o erro é relacionado ao email já cadastrado.
            if (codigoStatus === 400 || mensagemDeErro.toLowerCase().includes('email')) {
                definirErroNoCampo('email', { type: 'manual', message: 'Email já cadastrado.' });
            }

            toast.error('Erro ao cadastrar. Tente novamente.');
            console.error('Erro ao cadastrar usuário:', error);
        }
    }

    return (
        <div className="cadastro-container">
            <h1>Cadastro de Usuário</h1>
            <form noValidate onSubmit={lidarComEnvioDoFormulario(enviarDados)}>
                {/* Nome */}
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        id="campo-nome"
                        type="text"
                        placeholder='Ex.: Marta Silva'
                        {...registrarCampo('nome')}
                    />
                    {errosDoFormulario.nome && (
                        <p className="error-message">{errosDoFormulario.nome.message}</p>
                    )}
                </div>
                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="campo-email"
                        type="email"
                        placeholder='Ex.: maria.silva@email.com'
                        {...registrarCampo('email')}
                    />
                    {errosDoFormulario.email && (
                        <p className="error-message">{errosDoFormulario.email.message}</p>
                    )}
                </div>

                {/* Botão de envio */}
                <button type="submit" disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default CadastroPage;