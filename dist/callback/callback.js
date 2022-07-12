"use strict";
function somarValoresETratar(num1, num2, callback) {
    var resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(num) {
    return num * num;
}
function dividirPorEleMesmo(num) {
    return num / num;
}
console.log(somarValoresETratar(1, 3, aoQuadrado));
console.log(somarValoresETratar(1, 5, dividirPorEleMesmo));
