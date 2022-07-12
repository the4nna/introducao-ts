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
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log(somarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase));
});
// if (button) {
//     button.addEventListener('click', () => {
//         if (input1 && input2) {
//             console.log(somarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase))
//         }
//     })
// }
// button?.addEventListener OU ^
