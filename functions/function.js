// Escreva uma função que receba o peso (em quilogramas) e a altura (em metros)
// de uma pessoa como entrada e retorne o Índice de Massa Corporal (IMC).
// O IMC é calculado dividindo o peso pela altura ao quadrado.
// IMC abaixo de 18.5: Abaixo do peso
// IMC entre 18.5 e 24.9: Peso normal
// IMC entre 25 e 29.9: Sobrepeso
// IMC entre 30 e 34.9: Obesidade Grau I
// IMC entre 35 e 39.9: Obesidade Grau II
// IMC acima de 40: Obesidade Grau III(Obesidade Mórbida)
// IMC = peso / altura^2
// Arredonde o valor do IMC para duas casas decimais utilizando a 
// função de arredondamento da linguagem de programação que estiver utilizando.
// function somaNum(num1, num2) {
//     console.log(num1 + num2)
// }
// const soma = (val1, val2) => {
//     console.log(val1 * val2)
// }
// soma(150, 4)

// const calculoImc = (peso, altura) => {
//     const imc = (peso / (altura ** 2)).toFixed(2)
//     if (imc < 18.5) {
//         console.log(imc, 'Abaixo do peso')
//     } else if (imc >= 18.5 && imc <= 24.9) {
//         console.log(imc, 'Peso normal')
//     } else if (imc >= 25 && imc <= 29.9) {
//         console.log(imc, 'Sobrepeso')
//     } else if (imc >= 30 && imc <= 34.9) {
//         console.log(imc, 'Obesidade Grau I')
//     } else if (imc >= 35 && imc <= 39.9) {
//         console.log(imc, 'Obesidade Grau II')
//     } else if (imc >= 40) {
//         console.log(imc, 'Obesidade Grau III (Obesidade Mórbida)')
//     }
// }

 function calculoImc(peso, altura) {
 const imc = (peso / (altura ** 2)).toFixed(2)
 if (imc < 18.5) {
     console.log(imc, 'Abaixo do peso')
 } else if (imc >= 18.5 && imc <= 24.9) {
     console.log(imc, 'Peso normal')
 } else if (imc >= 25 && imc <= 29.9) {
     console.log(imc, 'Sobrepeso')
 } else if (imc >= 30 && imc <= 34.9) {
     console.log(imc, 'Obesidade Grau I')
 } else if (imc >= 35 && imc <= 39.9) {
     console.log(imc, 'Obesidade Grau II')
 } else if (imc >= 40) {
     console.log(imc, 'Obesidade Grau III (Obesidade Mórbida)')
 }
 }

 calculoImc(70, 1.80)

// Exercício: Calculadora Simples.
// Recebe três parâmetros: dois números
// e uma operação matemática representada por uma string.
// A função deve retornar o resultado da operação entre os dois números.
// Operações: soma, subtração, multiplicação e divisão

function calculadoraSimples(num1, num2, operacao) {
    if (operacao === 'soma') {
        console.log(num1 + num2)
    } else if (operacao === 'subtracao') {
        console.log(num1 - num2)
    } else if (operacao === 'multiplicacao') {
        console.log(num1 * num2)
    } else if (operacao === 'divisao') {
        console.log(num1 / num2)
    } else {
        console.log('Operação não realizada')
    }
}

calculadoraSimples(2, 97, 'multiplicacao')
calculadoraSimples(100, 2, 'divisao')
calculadoraSimples(28, -1, 'soma')
calculadoraSimples(10, 5, 'subtracao')