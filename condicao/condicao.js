// Operadores Lógicos
// Soma: +
// Subtrair: -
// Dividir: /
// Multiplicar: *
// Resto: %     -> RESTO DA DIVISÃO

// += : soma continua

// === : "ISSO SIGNIFICA ISSO !!!!!!" ex: letra === a (diga que a palavra "letra" tenha o mesmo significado/valor de a)
// != : DIFERENTE

//  || (OR OU) retorna verdadeiro se pelo menos UMA das expressões fornecidas for verdadeira.
// && (AND E) testa se as DUAS (ou mais) expressões comparadas são veridadeiras.

// console.log

// let = váriavel (pode ser qualquer váriavel)
// var
// const (cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.)

// if   : SE FOR
// else if : CASO FOR (ESPECIFICO)
// else : CASO NÃO SEJA

// switch  -> "TROQUE"
// case    -> "PASTA CORRESPONDENTE"
// break   -> "ENCERRE AQUI"

//EXERCÍCIOS


//BÁSICO

const pessoa = 'Augusto'
let idade = 9


if (idade > 18) {                // "SE A IDADE FOR MAIOR QUE 18, MOSTRE "VERDADE, É MAIOR QUE 18"
   console.log('verdade', idade)
}
else {                          // "CASO NÃO SEJA MAIOR QUE 18, MOSTRE "FALSO, É MENOR QUE 18"
    console.log('falso', idade)    
}

// OBS: SE IDADE FOR = 18, O COMPUTADOR DIRÁ QUE É FALSO, POIS ESTÁ SOMENTE " > ", SE FOSSE " >= " APARECERIA VERDADE.



let num1 = 2     // VÁRIAVEL 1 (num1)
let num2 = 3     // VÁRIAVEL 2 (num2)

const resultado = num1 + num2   // "QUERO QUE A PALAVRA "RESULTADO" REPRESENTE A SOMA ENTRE AS VARIÁVEIS (num1) e (num2)"  

console.log(resultado % 2 === 0)  // "MOSTRE QUE A CONST 'RESULTADO' DIVIDIDO POR 2 TENHA 'RESTO %' IGUAL A ZERO" mostre True pra verdade e False para mentira


if (num1 % 2 === 0) {            // SE A VARIÁVEL 1 (num1) DIVIDA POR 2 TER 'RESTO %' IGUAL A ZERO, MOSTRE "par"
  console.log ('par', resultado)
}
else {                                    // CASO NÃO SEJA PAR, MOSTRE "impar" 
    console.log ('impar', resultado)  
}

// EXÉRCICIO 1  (SOBRE IF, IF ELSE, ELSE)

// Escreva um programa que verifique se um número é positivo, negativo ou zero.  IF ELSEIF ELSE

let num = 0 // VARIÁVEL (num)

if(num > 0) {                           // SE A VARIÁVEL (num) FOR MAIOR QUE ZERO, MOSTRE "Positivo e o número"
    console.log('positivo', num);  
}
else if (num === 0) {                 // CASO ELE SEJA ZERO, MOSTRE "ZERO"
    console.log('zero', num);
}
else {                                // CASO NÃO SEJA POSITIVO, MOSTRE "NEGATIVO"
    console.log('negativo', num);
}

// EXERCÍCIOS 2 (SWITCH)

//Escreva um programa que receba o número de um mês (1 a 12) e exiba o nome do mês correspondente.

let mes = "2";   // VARIÁVEL (mês)

switch (mes) {               // SWITCH :  CASO A VARIÁVEL SEJA DE 1 A 12, MOSTRE O RESULTADO DA PASTA (case) CORRESPONDENTE
    case "1":
        console.log("Janeiro")
        break;
    case "2":
        console.log("Fevereiro")
        break;
    case "3":
        console.log("Março")
        break;
    case "4":
        console.log("Abril")
        break;
    case "5":
        console.log("Maio")
        break;
    case "6":
        console.log("Junho")
        break;
    case "7":
        console.log("Julho")
        break;
    case "8":
        console.log("Agosto")
        break;
    case "9":
        console.log("Setembro")
        break;
    case "10":
        console.log("Outubro")
        break;
    case "11":
        console.log("Novembro")
        break;
    case "12":
        console.log("Dezembro")
        break;
    default:
        console.log("Mês inválido")   // CASO NÃO SEJA OS NÚMEROS 1 ATÉ 12, MOSTRE " MÊS INVÁLIDO"
        break; 
}


//Escreva um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente.

let diaDaSemana = "4";

switch (diaDaSemana) {
    case "1":                           //SWITCH : MOSTRE A CASE (pasta) CORRETA PARA O NÚMERO CORRESPONDENTE
        console.log("Domingo")
        break;
    case "2":
        console.log("Segunda-feira")
        break;
    case "3":
        console.log("Terça-feira")
        break;
    case "4":
        console.log("Quarta-feira")
        break;
    case "5":
        console.log("Quinta-feira")
        break;
    case "6":
        console.log("Sexta-feira")
        break;
    case "7":
        console.log("Sábado")
        break;


    default:
        console.log("Dia da Semana não existente") // CASO NÃO TENHA O DIA DA SEMANA, MOSTRE "DIA DA SEMANA NÃO EXISTENTE"
        break;
}

//EXERCÍCIO 03

//Escreva um programa que receba uma letra e verifique se é uma vogal ou uma consoante.

let letra = 'l'                          // SE A VARIÁVEL (letra) FOR (a,e,i,o,u), MOSTRAR "VOGAL" 

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {   
    console.log('Vogal')
} else {                                  // CASO  A VARIÁVEL (letra) NÃO SEJA, MOSTRAR "CONSOANTE"
    console.log('Consoante')                  
}



// EXERCICIO 04

// Escreva um programa que verifica se um ano é bissexto.

let ano = "2020"                   // VARIÁVEL (ano) = 2020

if(ano % 4 === 0){                  // SE A VARIÁVEL (ano) FOR UM NÚMERO DIVISÍVEL POR 4, MOSTRE : "BISSEXTO"
    console.log(ano ,"bissexto");
} else {                             // CASO NÃO SEJA, MOSTRE "NÃO BISSEXTO"
    console.log(ano, "nao bissexto");
}



// EXERCÍCIO 05

// Converta uma temperatura de Celsius para Farenheit

let temperaturaCelsius = "-100"                        // VARIÁVEL (temperaturaCelsius)  
const resultado1 = (temperaturaCelsius * 1.8) + 32         //  CONST (resultado1) PARA COLOCAR O RESULTADO DA EXPRESSÃO

console.log(resultado1,"Farenheit")         //JEITO SIMPLES DE FAZER


if(temperaturaCelsius > 0) {                                                   // JEITO MAIS DETALHADO
    console.log(temperaturaCelsius, "Celsius", "=", resultado1, "Farenheit")
} else{
    console.log(temperaturaCelsius, "Celsius", "=", resultado1, "Fanhereit")
}

// EXERCÍCIO 06
// Faça um programa que mostre se o aluno foi aprovado (nota >= 7.0) ou reprovado (nota < 7.0)

let nota = "6.99"

if(nota >= 7.0) {
    console.log(nota, "Aprovado")
} else{
    console.log(nota,"Reprovado")
}