// Operadores Lógicos
// Soma: +
// Subtrair: -
// Dividir: /
// Multiplicar: *
// Resto: %     -> RESTO DA DIVISÃO

// += : soma continua

// === : "ISSO SIGNIFICA ISSO !!!!!!" ex: letra === a (diga que a palavra "letra" tenha o mesmo significado/valor de a) (IGUAL)
// != : (DIFERENTE)

//  || (OR OU) retorna verdadeiro se pelo menos UMA das expressões fornecidas for verdadeira.
// && (AND E) testa se as DUAS (ou mais) expressões comparadas são veridadeiras.
// ++ (increment) aumenta um do valor inicial do i
// -- (decrement) Diminui um do valor inicial do i


// console.log

// let = váriavel (pode ser qualquer váriavel)
// var
// const (cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.)

// for (para): cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
    //

for (let i= 0; i < 10; i++) {   // EXPRESSÃO UM: i=0 , EXPRESSÃO DOIS: i < 10 , EXPRESSÃO TRÊS: i++ , // SÃO MEIO QUE UM PADRÃO
    console.log(i + 1)         // MOSTRE O RESULTADO DA SOMA ENTRE O VALOR DA VARIÁVEL (i) + O NÚMERO UM (1)
}



//Imprima os números pares de 1 a 10.

for (let i= 1; i <= 10; i++) {                   // PARA VARIÁVEL (i) SER IGUAL A UM (1), SER MENOR OU IGUAL A DEZ (10)
    if (i % 2 === 0) {                          
        console.log(i, "Número par")             // "CASO VARIÁVEL (i) DIVIDO PELO NÚMERO DOIS (2) TER RESTO IGUAL A ZERO, MOSTRE O VALOR DA VARIÁVEL (i) e DIGA QUE É PAR"  1 divido por 2 tem resto = 0
        }
    else {
        console.log(i, "Número ímpar")          // CASO NÃO TENHA RESTO IGUAL A ZERO, MOSTRE " NÚMERO IMPAR"
    }
}


//Imprima os múltiplos de 3 de 1 a 20.

for (let i=3; i<=20; i++) {                    // PARA i=3, i <=20
    if(i % 3 === 0) {
        console.log(i, "Múltiplo de 3")          // CASO i DIVIDIDO POR 3 TER RESTO (%) ZERO, MOSTRE "MULTIPLO DE 3"
    }
    else {
        console.log(i, "Não múltiplo de 3")       // CASO i TENHA RESTO (%), MOSTRE "NÃO MÚLTIPLO DE 3"
    }
}


//Imprima os números primos de 1 a 100

for(let i=2; i<=100; i++) {         // PARA i = 2 , i <= 100
    let primo = true;              // DENTRO DO PARA (for), DIGA QUE A VARIÁVEL (primo) SEJA "TRUE"

    for(let j=2; j<i; j++){       // DENTRO DO PRIMEIRO PARA, CRIE PARA j=2 , j < i
        if(i % j === 0) {        // DENTRO DO SEGUNDO PARA, CASO A VARIÁVEL (i) SEJA DIVISÍVEL PELA VARIAVEL (j), DIGA
            primo = false;      // BOOLEAN = TRUE OU FALSE : 
            break;

        }
    }
    if (primo){
        console.log(i);
    }
}


//Imprima os números divisíveis por 5

for( let i=5; i<=100; i++){                       // PARA i=5, i<=100
    if (i % 5 != 0) {                            // SE i DIVIDIDO POR 5 FOR DIFERENTE (!=) DE ZERO, NÃO MOSTRE NADA  
    } else{                                     // SE FOR DIVISÍVEL POR 5, MOSTRE A VARIÁVEL (i) E OS NÚMEROS DIVISIVEIS.
        console.log(i)
    }
}


//Imprima os números de 10 a 1 de forma decrescente

for (let i = 10; i >= 1; i--) {       // PARA i=10 (ou seja, i INICIAL SER 10) e PARA i>=1 (ou seja, O i SÓ PODE TER NÚMEROS IGUAIS OU MAIORES QUE 1)
    console.log(i);                    // MOSTRE i        
}

  

//Conte quantas vogais existem em uma palavra fornecida.

let sequencia = [1, 1];
let n = 10;
  
for (let i = 2; i < n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
}
  
console.log("Sequência de Fibonacci até o " + n + "º termo:", sequencia);



  
//Array

const arr = [2,3,4]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i],i)
}


//Multiplique todos os elementos de uma lista por 2

const arr2 = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i< arr2.length; i++){
  console.log(arr2[i]*2);
   
}


//Calcule a média de uma lista de números

const arr3 = [1,2,3,4,5,6,7,8,9,10]            //CONST (variável fixa) array = [1,2,3,4,5,6,7,8,9,10] CRIA UMA VARIÁVEL COM UM CONJUNTO DE VALORES
let soma = 0;                                 // VARIÁVEL (soma) NUMBER = 0

for(let i = 0; i < arr3.length; i++) {      // PARA i=0, i<comprimento da arr3, i++(i=i+1)
   soma += arr3[i];                        //
}
const media = soma / arr3.length;
console.log("Média:",media);



// Conte quantas vogais há em uma palavra.

const arr4 = 'caso'

for(let i = 0; i < arr4.length; i++) {
   
}

// object

const carro = {
    marca: 'fiat',
    modelo: 'Sedan',
    ano: 2022,
    cor: 'rosa'
}
console.log(carro.modelo)

const aluno = {
    nome: 'Augusto',
    matricula: 1810441
}
console.log(aluno.nome,aluno.matricula)

const produtos = [
    {nome: 'Camisa', valor: 35},
    {nome: 'Calça', valor: 300},
    {nome: 'Sapato', valor: 65},
]
const nomesDosProdutos = produtos.map(produto => produto.nome);
console.log(nomesDosProdutos);
