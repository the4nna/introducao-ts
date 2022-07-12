// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";

interface Imployee {
    nome: string,
    code: number
}

const NewImployee: Imployee = {
    nome: "John",
    code: 10
}