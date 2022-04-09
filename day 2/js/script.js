
    function mostrarMensagem(){
        const userNome = document.getElementById('nome');
        const userIdade = document.getElementById('idade');
        const userLinguagem = document.getElementById('linguagem');
        const msgContainer = document.getElementById('mensagem');
        const btnEnviar = document.getElementById('enviar');

        msgContainer.innerHTML = `Olá ${userNome}, você tem ${userIdade} anos e já está aprendendo ${userLinguagem} ! ` 
        btnEnviar.addEventListener("click", mostrarMensagem);
    }
    