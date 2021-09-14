/************************************************************************************* */
//Repositorio Avaliativo:https://github.com/tryber/sd-016-b-project-mistery-letter/pull/2
//Repositorio Descritivo:https://github.com/tryber/sd-016-b-project-mistery-letter
//************************************************************************************ */
//                          FONTE PESQUISA                                             /
//Documentação:w3schools.com
//
//************************************************************************************ */
//Implementações:Tonis Torres
//************************************************************************************ */

let buttonGenerate = document.getElementById('criar-carta');

window.onload = function () {

}

//Função gerar Carta 
function generateLetter() {

    let letterContent = document.getElementById('carta-texto');
    let resultLetterContent = letterContent.value.split(" ");
    let containerFather = document.getElementById('carta-gerada');

    for (let i = 0; i < resultLetterContent.length; i += 1) {
        let createSpan = document.createElement('span');
        createSpan.setAttribute("class", "popular")
        containerFather.appendChild(createSpan);
    }
    popularSpan();
}

function popularSpan() {
    let captureContentSpan = document.getElementsByClassName('popular');
    let letterContent = document.getElementById('carta-texto');
    let resultLetterContent = letterContent.value.split(" ");
    for (let i = 0; i < resultLetterContent.length; i++) {
        captureContentSpan[i].innerText=resultLetterContent[i];
    }
}


//Criando uma Escuta para Botaão Gerara Carta
buttonGenerate.addEventListener("click", generateLetter);
