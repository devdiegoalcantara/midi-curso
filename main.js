
 function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');




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

