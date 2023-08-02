/**
 * document.createElement 
 * -> criar um elemento no documento
 * 
 * node.appendChild 
 * -> Adicionar o elemento como ÚLTIMO nó do pai
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
 * Exercício
 * - Criar uma div pelo JS
 * - Incluir essa div no body
 * - Incluir um H1
 * - Colocar o texto "Hello World" no H1
 * - Incluir esse H1 na div criada
 * - Incluir um HR na div criada
 * - Incluir um P na div criada
 * - Colocar o seu nome no elemento P
 */

const newDiv = document.createElement('div')     // crie uma const(variável) newDiv (nome da variável) no HTML (document.createElement)
const h1 = document.createElement('h1')         //   "      ''        ''     h1 (nome da variável)      ''      ''      ''      ''    
const hr = document.createElement('hr')        //  
const p = document.createElement('p')
const body = document.body                     // variável Body(ja existe body no html)
body.appendChild(newDiv)                     // coloca o body
h1.innerText = 'Hello World'                //
p.innerHTML = 'Augusto Bentes'
newDiv.appendChild(h1)                       // faz o h1 (titulo) ser adicionado no HTML
newDiv.appendChild(hr)                      // faz a linha hr ser adicionada no HTML
newDiv.appendChild(p)                      // faz o p (paragrafo) ser adicionado no HTML