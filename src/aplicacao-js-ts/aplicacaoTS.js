"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function somarNumeros(num1, num2, printarResultado, frase) {
    var resultado = num1 + num2;
    if (printarResultado) {
        console.log(frase + resultado);
    }
    return resultado;
}
var printarResultado = true;
var frase;
frase = "O resultado é: ";
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase));
        }
    });
}
