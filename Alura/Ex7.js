/*
Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

for(let fruta of frutas){
    console.log(`${fruta}`);
}
//---------------------------------------------------------------

Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function exibirArray(array){
    for(let pos = 0; pos<array.length; pos++){
        console.log(`${pos}º - ${array[pos]}`);
    }
}

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
exibirArray(frutas);
//---------------------------------------------------------------

Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.


let somaArray = function(array) {
    let soma = 0;
    for(let elemento of array){
        soma+=elemento;
    }
    return soma;
}

const inteiros = [2,4,9,5,3,10];
console.log(somaArray(inteiros));
//---------------------------------------------------------------

Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior

function maiorEMenorDoArray (array){
    let maior = array[0];
    let menor = array[0];
    for(let elemento of array){
        if(elemento > maior){
            maior = elemento;
        }
        if(elemento < menor){
            menor = elemento;
        }
    }
    return [maior, menor];
}

const inteiros = [15];
console.log(maiorEMenorDoArray(inteiros));
//---------------------------------------------------------------

Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

function paresDoArray(array){
    const pares = [];
    for(elemento of array){
        if(elemento%2 == 0){
            pares.push(elemento);
        }
    }
    return pares;
}


const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log(paresDoArray(numeros));
//---------------------------------------------------------------

Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

function mediaDoArray(array){
    let soma = 0;
    let media = 0;
    for(elemento of array){
        soma+=elemento;
    }
    return media = soma / array.length
}

const numbers = [2,5,50,2,1,0];
console.log(mediaDoArray(numbers));
//---------------------------------------------------------------

*/