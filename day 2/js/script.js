
    //variáveis //
    const userNome = document.getElementById('nome').string;
    const userIdade = document.getElementById('idade').string;
    const userLinguagem = document.getElementById('linguagem').string;
    const msgContainer = document.getElementById('mensagem');
    const btnEnviar = document.getElementById('enviar');

    function mostrarMensagem(){
       msgContainer.innerHTML = `Olá ${userNome}, você tem ${userIdade} anos e já está aprendendo ${userLinguagem} ! ` 
    }
    btnEnviar.addEventListener("click", mostrarMensagem);