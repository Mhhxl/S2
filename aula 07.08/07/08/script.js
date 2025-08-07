function gerarBotao() 
{

    const iddadeInput = document.getElementById("idadeInput");
    const idade = parseInt(iddadeInput.value);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";  // limpa o conteúdo anterior


    if (idade < 16){
        resultadoDiv.innerHTML = <p>"Você não pode votar.";</p>;
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        resultadoDiv.innerHTML = <p>"Seu voto é opcional.";</p>;

    } else {
        resultadoDiv.innerHTML = <p>"Seu voto é obrigatório.";</p>;
    }
}