"use strict";
// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
var Pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissão: Profissao.Atriz
};
var Pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissão: Profissao.Padeiro
};
var Pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissão: Profissao.Atriz
};
var Pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissão: Profissao.Padeiro
};
