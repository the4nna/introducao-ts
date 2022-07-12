let button = document.getElementById('button')
let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement

function somarNumeros(num1: number, num2: number, printarResultado: boolean, frase: string) {
    const resultado = num1 + num2
    if (printarResultado) {
        console.log(frase + resultado)
    }
    return resultado;
}

let printarResultado = true;
let frase: string;
frase = "O resultado é: ";

button?.addEventListener('click', () => {
    console.log(somarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase))
})


// if (button) {
//     button.addEventListener('click', () => {
//         if (input1 && input2) {
//             console.log(somarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase))
//         }
//     })
// }
    // button?.addEventListener OU ^




