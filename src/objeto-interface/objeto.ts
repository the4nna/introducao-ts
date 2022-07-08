enum Profissao {
    Desenvolvedora,
    Professora,
    Engenheira,
    Delegada
}

interface Pessoa {
    nome: string,
    idade: number,
    profissão?: Profissao
}

interface Estudante extends Pessoa {
    matérias: string[]
}

const pessoa1: Pessoa = {
    nome: "Anna",
    idade: 24,
    profissão: Profissao.Desenvolvedora
}

const pessoa2: Pessoa = {
    nome: "Ana Paula",
    idade: 51,
    profissão: Profissao.Delegada
}

const pessoa3: Estudante = {
    nome: "Marcella",
    idade: 15,
    matérias: ['Matemática', 'Filosofia', 'Química']
}

function Listar(lista: string[]) {
    for (const item of lista) {
        console.log("-" + item)
    }
}

Listar(pessoa3.matérias)