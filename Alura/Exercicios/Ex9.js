/*
1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.


function juntaArraysEmUm(array1=[], array2=[],array3=[],array4=[]){
    return [...array1,...array2,...array3,...array4];
}

const lista1=[1,2,3,4];
const lista2=[5,6,7,8];
const lista3=[9,10,11,12];
const lista4=[13,14,15,16];

const arraysJuntos = juntaArraysEmUm(lista1, lista2, lista3, lista4);
console.log(arraysJuntos);
//----------------------------------------------------------

2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

valores = [1,2,3,4,5,6];
const resultado = valores.reduce((acumulador,valorAtual) =>acumulador+=valorAtual ,0);
console.log(resultado);
//----------------------------------------------------------

Considere duas listas de cores:
Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.


const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const listaConjunta = coresLista1.concat(coresLista2);
const listaFinalSemDuplicatas = [...(new Set(listaConjunta))];
console.log(listaFinalSemDuplicatas);
//----------------------------------------------------------

4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function filtraPares(array){
    return resultado = array.filter((numero) => numero%2 == 0);
}

const lista = [1,2,3,4,5,6,7,8,9,10];
const pares = filtraPares(lista);
console.log(pares);
//----------------------------------------------------------

Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.


function filtraMultiplosDeTresEMaioresQueCinco(array){
    return array.filter((numero) => numero%3 == 0 && numero > 5);
}

const lista = [1,2,3,4,5,6,7,8,9,10,15,20,25,35,18,90];
const resultado = filtraMultiplosDeTresEMaioresQueCinco(lista);
console.log(resultado);
//----------------------------------------------------------

 Crie uma função que receba um array de números e retorne a soma de todos os elementos.
*/

function somaDoArray(array){
    return array.reduce((acumulador,valorAtual)=> acumulador+=valorAtual,0);
}

const lista = [1,2,3,4,5,6,7,8,9,10];
const soma = somaDoArray(lista);
console.log(soma);
//----------------------------------------------------------
