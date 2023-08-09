/**
 * document.createElement 
 * -> criar um elemento no documento [ex: cria uma div pro HTML utilizando o javascript. ele sobrepõe.]
 * 
 * node.appendChild 
 * -> Adicionar o elemento como ÚLTIMO nó do pai [adiciona um elemento dentro de outro elemento como filho]
 * exemplo: div.appendChild(h1) [colocamos o h1 dentro da div]
 * 
 * node.insertBefore 
 * -> inserir um elemento antes de outro elemento
 * 
 * node.removeChild 
 * -> remover um filho do elemento
 * 
 * document.getElementById
 * -> Busca o elemento com o Id específico
 * 
 * document.getElementsByClassName
 * -> Busca os elementos com a classe específica
 * 
 * document.querySelector
 * -> Busca o primeiro elemento de forma especificada no método 
 * -> (id, class, name, etc)
 * 
 * document.querySelectorAll
 * -> Busca todos os elementos que satisfaçam a busca
 * 
 * elemento.innerHTML
 * -> Escrever HTML no elemento selecionado
 * 
 * elemento.innerText
 * -> Escrever texto no elemento selecionado
 */





/**
 *  EXERCÍCIO
 * - Criar uma div pelo JS
 * - Incluir essa div no body
 * - Incluir um H1
 * - Colocar o texto "Hello World" no H1
 * - Incluir esse H1 na div criada
 * - Incluir um HR na div criada
 * - Incluir um P na div criada
 * - Colocar o seu nome no elemento P
 */

const newDiv = document.createElement('div') // crie uma variável(const) de nome newDiv que tenha o valor de div no HTML
const h1 = document.createElement('h1')     // crie uma variável(const) de nome h1 que tenha o valor de h1 no HTML (h1= titulo)
const hr = document.createElement('hr')    // crie uma variável(const) de nome hr que tenha o valor de hr no HTML (hr= linha)
const p = document.createElement('p')     // crie uma variável(const) de nome p que tenha o valor de p no html (p=paragrafo)
const newDiv2 = document.createElement('div')
const h2 = document.createElement('h2')

const body = document.body    // pelo fato de já existir o body no HTML, utlizamos document.body ou document.querySelector('body')

body.appendChild(newDiv)     // coloca o body como pai da newDiv (coloca a div dentro do body)
body.appendChild(newDiv2)
newDiv.appendChild(h1)      // coloca a div como pai do h1 (coloca o h1 dentro da div)
newDiv.appendChild(hr)     //  ""    ''  ''    ''  '' hr (coloca o hr dentro da div)
newDiv.appendChild(p)     //  ''       ''     ''  '' p (coloca o p dentro da div)
newDiv2.appendChild(h2)
newDiv2.appendChild(newDiv)


h1.innerHTML = 'Hello World'
p.innerHTML = 'Lil B'
h2.innerHTML = "TESTE"

newDiv.insertBefore(newDiv2)

