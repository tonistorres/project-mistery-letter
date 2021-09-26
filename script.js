// Repositorio Avaliativo: https: //github.com/tryber/sd-016-b-project-mistery-letter/pull/2
// Repositorio Descritivo: https: //github.com/tryber/sd-016-b-project-mistery-letter
// FONTE PESQUISA
// Implementações: Tonis Torres

const buttonGenerate = document.querySelector('#criar-carta');
const letterContent = document.querySelector('#carta-texto');

// eslint-disable-next-line no-unused-vars
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
        captureContentSpan[i].innerText = resultLetterContent[i];
    }
}

function validationLetter(str) {
    //Documentação:https://www.w3schools.com/jsref/jsref_trim_string.asp
    //Remova os espaços em branco de ambos os lados de uma string:
    const filterString = str.value.trim();
    if ((filterString === "") || (filterString === " ")) {
        estilizaCriaUmaBarraInfo();
    } else {
        criarContainerPhrases(filterString);
    }

}

function estilizaCriaUmaBarraInfo() {
    alert('função estilizar')
    let response = document.querySelector('#carta-gerada');
    let input = document.querySelector('#carta-texto');
    input.focus();
    input.value = "";
    input.style.background = "yellow";
    response.innerText = "Por favor, digite o conteúdo da carta.";

}


function criarContainerPhrases(str) {
    //Documentação:https://www.w3schools.com/jsref/jsref_trim_string.asp
    //Remova os espaços em branco de ambos os lados de uma string:
    let input = document.querySelector('#carta-texto');
    const phrasesArray = str.split(" ");
    let containerPhrasesGenerated = document.querySelector('#carta-gerada');
    containerPhrasesGenerated.innerHTML = "";
    for (let i = 0; i < phrasesArray.length; i += 1) {
        let createSpan = document.createElement('span');
        createSpan.innerText = phrasesArray[i];
        containerPhrasesGenerated.appendChild(createSpan);
    }
    input.style.background = "white";

}

buttonGenerate.addEventListener("click", (evt) => {
    //Documentação:https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    evt.preventDefault();
    validationLetter(letterContent);
});