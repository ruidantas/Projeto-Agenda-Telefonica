const prompt = require("prompt-sync")()
console.clear()


// Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
// Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto à uma lista com todos os contatos.
// Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone. Exiba uma mensagem de erro caso o contato não exista.
// Ao deletar, ele deve apagar o objeto com o nome passado.
// Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número. Exiba uma mensagem de erro caso o contato não exista.


// Agenda Telefônica

let qtdctt = prompt('Quantos contatos você deseja adicionar? ')
let listcontato = []

for (let i = 1 ; i <= qtdctt ;  i++) {
let nome = prompt('Digite o nome do contato: ')
let tel = +prompt ('Digite o número: ')

let contato = {
    nome: nome,
    tel: tel
}  


function adicionar () {

    listcontato.push(contato)

}

adicionar()

}
console.log(listcontato)

function alterar() {
    let novocontato = prompt('Qual contato você deseja alterar?')

    listcontato[novocontato - 1].nome = prompt('Qual Nome? ')
    listcontato[novocontato - 1].tel = prompt('Qual telefone? ')

    
}



function deletar () {

let deletarcontato = +prompt('Qual contato você deseja deletar? ')
listcontato.splice(deletarcontato - 1, 1)


}



function consultar (){
for (let n = 0; n < listcontato.length ; n++) {
console.log()
console.log(`Contato: Contato ${(n+1)}`)
console.log(`Nome: ${listcontato[n].nome}`)
console.log(`Número: ${listcontato[n].tel}`)
console.log()
}


}

consultar()

while(true) {
    console.clear()
    consultar()
    let opcao = +prompt("O que você gostaria de fazer  [1]ALTERAR, [2]DELETAR ou [3]SAIR?")
    if(opcao == 1) {
        alterar()
    } else if (opcao == 2) {
        deletar()
    } else if (opcao == 3) {
        break
    }
    
}
console.clear()
console.log()
consultar()