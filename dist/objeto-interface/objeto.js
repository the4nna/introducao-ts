"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedora"] = 0] = "Desenvolvedora";
    Profissao[Profissao["Professora"] = 1] = "Professora";
    Profissao[Profissao["Engenheira"] = 2] = "Engenheira";
    Profissao[Profissao["Delegada"] = 3] = "Delegada";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "Anna",
    idade: 24,
    profissão: Profissao.Desenvolvedora
};
var pessoa2 = {
    nome: "Ana Paula",
    idade: 51,
    profissão: Profissao.Delegada
};
var pessoa3 = {
    nome: "Marcella",
    idade: 15,
    matérias: ['Matemática', 'Filosofia', 'Química']
};
function Listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log("-" + item);
    }
}
Listar(pessoa3.matérias);
