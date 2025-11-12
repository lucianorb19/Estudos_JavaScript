/*
1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

{
    "produtos": [
        {
            "id": 1,
            "nome": "Camiseta",
            "preco": 25.99
        },
        {
            "id": 2,
            "nome": "Calça Jeans",
            "preco": 49.99
        }
    ],
    "usuarios": [
        {
            "id": 101,
            "nome": "João",
            "email": "joao@example.com"
        },
        {
            "id": 102,
            "nome": "Maria",
            "email": "maria@example.com"
        }
    ]
}

Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.

Imprima no console o conteúdo importado utilizando a função console.log().

Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.


const dados = require("./dados.json");

console.log("Produtos cadastrados:");
for(let produto of dados.produtos){
    for(let chave in produto){
        console.log(`${chave} - ${produto[chave]}`);
    }
    console.log();
}
console.log();

console.log("Usuário cadastrados:");
for(let usuario of dados.usuarios){
    for(let chave in usuario){
        console.log(`${chave} - ${usuario[chave]}`);
    }
    console.log();
}
console.log();
//------------------------------------------------

2 - Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.

{
    "produtos": [
        {
            "id": 1,
            "nome": "Camiseta",
            "preco": 25.99
        },
        {
            "id": 2,
            "nome": "Calça Jeans",
            "preco": 49.99
        }
    ],
    "usuarios": [
        {
            "id": 101,
            "nome": "João",
            "email": "joao@example.com"
        },
        {
            "id": 102,
            "nome": "Maria",
            "email": "maria@example.com"
        }
    ]
}

Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.

Imprima no console o objeto JavaScript resultante da leitura do arquivo.


const dados = require("./dados.json");
console.log(dados);
//------------------------------------------------
3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do produto.
nome (string): nome do produto.
preco (number): preço do produto.

Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.


const produto = {
    id: 5,
    nome: "Camisa",
    preco: 60.75
}

stringProduto = JSON.stringify(produto);
console.log(stringProduto);
//------------------------------------------------
4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

{
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
}

Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.



const dadosAnimais = require("./animais.json");

dadosAnimais.animais.push({
    id: 4,
    nome: "Cachorro",
    tipo: "Mamífero",
    habitat: "Urbano"
});

for(let animal of dadosAnimais.animais){
    if(animal.nome === "Cobra"){
        animal.habitat = "Floresta Tropical e Equatorial";
    }
}         

dadosAnimais.animais.splice(0,1,);

stringAnimais = JSON.stringify(dadosAnimais);

console.log("Objeto resultante: ",dadosAnimais,"\n");
console.log("String resultante: \n",stringAnimais);
//------------------------------------------------
5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

id (number): identificador da pessoa.
nome (string): nome da pessoa.
idade (number): idade da pessoa

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.


const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function copiaEModificaPessoa(objetoOriginal){
   const copia =  JSON.parse(JSON.stringify(objetoOriginal));
   copia.nome = "Ana";
   return copia;
}

pessoaCopia = copiaEModificaPessoa(pessoaOriginal);
console.log(pessoaOriginal);
console.log(pessoaCopia);
//------------------------------------------------


//ORDENAR UMA LISTA DE OBJETOS DADA UM PROPRIEDADE
const estudantes = require("./estudantes.json");

function ordenar(lista, propriedade){
    return lista.sort((a,b) => {
        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade]) return 1;
        return 0;
    });
};

const listaOrdenada = ordenar(estudantes, "nome");
console.log(listaOrdenada);

//ORDENAÇÃO DECRESCENTE
function ordenar(lista, propriedade, decrescente = false) {
    return lista.sort((a, b) => {
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if (typeof valorA === 'string') {
            valorA = valorA.toUpperCase();
        }
        if (typeof valorB === 'string') {
            valorB = valorB.toUpperCase();
        }

        if (valorA < valorB) {
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB) {
            return decrescente ? -1 : 1;
        }
        return 0;
    });
}

// Exemplo de uso para ordenar de forma decrescente pelo nome
const ordenadoNomeDecrescente = ordenar(clientes, "nome", true);
*/