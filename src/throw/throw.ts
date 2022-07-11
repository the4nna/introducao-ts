function mostrarErro(erro: string, codigo: number): never {
    throw { error: erro, code: codigo };
}

console.log(mostrarErro('Aconteceu um erro!', 627))