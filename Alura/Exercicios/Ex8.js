/*
1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const array = [2,4,6,8,10];
// array.forEach((numero)=>console.log(`${array.indexOf(numero)} - ${numero}`));

//USANDO FOR
for(let pos=0; pos<array.length;pos++){
    console.log(`${pos}º - ${array[pos]}`);
}
//-------------------------------------------------------------------
2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

const lista = [2,4,6,8,10];

let total = 0;
function somarAoTotal(numero){
    total += numero;
}

function executaOperacaoEmArray(array, funcaoCallBack){
    array.forEach(funcaoCallBack);
    return total;
}

let resultado = executaOperacaoEmArray(lista, somarAoTotal);
console.log(resultado);
//-------------------------------------------------------------------
3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".


function posicaoDoNumeroNoArray(numero, array){
    if(array.includes(numero)){
        return array.indexOf(numero);
    }else{
        return -1;
    }
}

const numeros = [2,4,9,10,25,32];
let valor = 22;

let posicao = posicaoDoNumeroNoArray(valor, numeros);
console.log(posicao);
//-------------------------------------------------------------------
Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

let todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
todasAsTurmas = todasAsTurmas.map((aluno)=> aluno.toUpperCase());
console.log("Lista de alunos: \n",todasAsTurmas);
console.log();

let nomeProcurado = "ANA";
const resultado = todasAsTurmas.find((aluno)=> aluno.includes(nomeProcurado));
resultado ? resultado : "Aluno não encontrado!";
console.log(resultado);
//-------------------------------------------------------------------
Considere um array de números inteiros.
Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.


const numeros = [6, 9, 12, 15, 18, 21];
console.log("Array original:\n ",numeros);
console.log("Array triplicado:\n");
numeros.forEach((numero)=> console.log(numero*3));
console.log();

let numeroProcurado = 0;
let indiceNumeroProcurado = numeros.findIndex((numero)=> numero===numeroProcurado);
let resultado = indiceNumeroProcurado === -1? 
    `Número ${numeroProcurado} não encontrado` : 
    `Número ${numeroProcurado} na pos ${indiceNumeroProcurado}`;

console.log(resultado);
//-------------------------------------------------------------------
*/

const nomes = ["Luciano","Gustavo","Luciano","Ana","Gustavo"];
//const nomesSemDuplicatasSet = new Set(nomes);
//const nomesSemDuplicatasArray = [...nomesSemDuplicatasSet];

//VERSÃO REDUZIDA
const nomesSemDuplicatasArray = [...(new Set(nomes))];

console.log(nomesSemDuplicatasArray);