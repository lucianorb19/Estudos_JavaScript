/*
1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
 

const pessoa = {
    nome: "Luciano Rodrigues Batista",
    idade: 28,
    solteiro: true,
    hobbies: ["filmes", "academia", "álcool"]
}

function mostrarInfoPessoa(objPessoa){
    console.log(`Nome: ${objPessoa.nome} - ${typeof(objPessoa.nome)}
      Idade: ${objPessoa.idade} - ${typeof(objPessoa.idade)}
      Solteiro: ${objPessoa.solteiro} - ${typeof(objPessoa.solteiro)}
      Hobbies: ${objPessoa.hobbies} - ${typeof(objPessoa.hobbies)}`)
}

mostrarInfoPessoa(pessoa);
//-------------------------------------
2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

const pessoa = {
    nome: "Luciano Rodrigues Batista",
    idade: 28,
    solteiro: true,
    hobbies: ["filmes", "academia", "álcool"]
};

pessoa.endereco = {
    rua: "Rua das Mercês",
    cidade: "Diamantina",
    estado: "MG - Minas Gerais"
};

function mostrarInfoPessoa(objPessoa){
    console.log(`Nome: ${objPessoa.nome} - ${typeof(objPessoa.nome)}
      Idade: ${objPessoa.idade} - ${typeof(objPessoa.idade)}
      Solteiro: ${objPessoa.solteiro} - ${typeof(objPessoa.solteiro)}
      Hobbies: ${objPessoa.hobbies} - ${typeof(objPessoa.hobbies)}
      Endereço: 
        Rua: ${objPessoa.endereco.rua}
        Cidade: ${objPessoa.endereco.cidade}
        Estado: ${objPessoa.endereco.estado}`)
}

mostrarInfoPessoa(pessoa);
//-------------------------------------
3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.


function mostrarListaPessoas(arrayPessoas){
    for(let pessoa of arrayPessoas){
        console.log(`Nome: ${pessoa.nome}
            Idade: ${pessoa.idade}
            Cidade: ${pessoa.cidade}`)
    }
}

function filtrarPorCidade(listaPessoas, cidade){
    return listaPessoas.filter((pessoa)=> pessoa.cidade === cidade)
}

pessoas = [];
pessoas.push({
    nome: "Luciano R B",
    idade: 28,
    cidade: "Diamantina",
});

pessoas.push({
    nome: "Carla Campos",
    idade: 13,
    cidade: "Belo Horizonte",
});

pessoas.push({
    nome: "Gustavo Alves",
    idade: 8,
    cidade: "Santana",
});

pessoas.push({
    nome: "Tereza Palmer",
    idade: 25,
    cidade: "Diamantina"
})

mostrarListaPessoas(pessoas);
const resultado = filtrarPorCidade(pessoas, "Diamantina");
console.log(resultado);
//-------------------------------------
4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
*/

//-------------------------------------
//-------------------------------------