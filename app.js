let lista_numeros_sorteados = [];


function getRndIntegerMinMax(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let numeroSorteado = Math.floor(Math.random() * (max - min)) + min;

    return numeroSorteado;
}


function sortear() {

    let numDigitado = document.getElementById('quantidade').value;

    let minimo = document.getElementById('de').value;

    let maximo = document.getElementById('ate').value;


    for (let i = 0; i < numDigitado; i++) {

        lista_numeros_sorteados.push(getRndIntegerMinMax(minimo, maximo));

    }
    lista_numeros_sorteados.sort();
    exibirResultado('h3', `Os números sorteados foram: ${lista_numeros_sorteados}`);
    document.getElementById('btn-sortear').setAttribute('disabled', true)
    document.getElementById('btn-reiniciar').removeAttribute('disabled');


}

function exibirResultado(tag, texto) {

    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function reiniciar() {

    let campo1 = document.getElementById('quantidade');
    let campo2 = document.getElementById('de');
    let campo3 = document.getElementById('ate');
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    lista_numeros_sorteados = [];
    document.getElementById('btn-sortear').removeAttribute('disabled');
    document.getElementById('btn-reiniciar').setAttribute('disabled', true)

}