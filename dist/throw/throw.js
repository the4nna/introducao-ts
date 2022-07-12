"use strict";
function mostrarErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
console.log(mostrarErro('Aconteceu um erro!', 627));
