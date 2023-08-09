/**
 * element.getAttribute(attributeName)       (pega o attributo)
 * -> retorna o valor do atributo
 * element.setAttribute(attributeName, value)   (bota um novo valor no atributo)
 * -> configura um novo valor pro atributo
 * element.removeAttribute(attributeName) 
 * -> remove o atributo
 */

const p = document.querySelector('p')
const input = document.querySelector('input')
////const botao = document.querySelector('#botao') //document.getElementById('botao'), pode utilizar um ou outro.
// input.removeAttribute('type')
p.innerHTML = 'Parágrafo'
p.setAttribute('class', 'novoParagrafo')

function visualizarSenha() {                                   // Crie uma função para Visualizar a Senha
    if (input.getAttribute('type') === 'password') {          // pegue o o input com Attribute 'type', com valor (===) a password(senha)
        input.setAttribute('type', 'text')                   // mude seu valor para texto. (para aparecer a senha)
        botao.innerHTML = 'Esconder senha'                  // faça o button mudar para ''Esconder senha'' quando for clicado
    } else if (input.getAttribute('type') === 'text') {    // caso o attribute 'type' esteja com o valor (===) text,
        input.setAttribute('type', 'password')            // coloque o input com valor === senha
        botao.innerHTML = 'Visualizar senha'             // e mostre Visualizar senha
    }
}