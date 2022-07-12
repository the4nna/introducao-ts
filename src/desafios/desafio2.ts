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

enum Profissao {
    Padeiro,
    Atriz
}

interface Pessoa {
    nome: string,
    idade: number,
    profissão?: Profissao
}

const Pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissão: Profissao.Atriz
}

const Pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissão: Profissao.Padeiro
}


const Pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissão: Profissao.Atriz
}

const Pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissão: Profissao.Padeiro
}