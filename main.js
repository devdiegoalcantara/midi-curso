function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = () => {
        tocaSom(idAudio);
    }

    tecla.onkeydown = (evento) => {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

}

/*
const botoes = document.querySelectorAll('.tecla');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        
        const somId = "som_tecla_" + botao.innerText.toLowerCase().trim();
        
        const audio = document.getElementById(somId);

        if (audio) {
            audio.currentTime = 0; // Reinicia o áudio, se já estiver tocando
            audio.play();
        }
    });
});
*/

