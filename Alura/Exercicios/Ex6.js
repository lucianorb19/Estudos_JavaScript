/*
1 - Crie uma função que receba dois arrays e os concatene em um único array.

let concatenaDoisArrays = function(array1, array2){
    return array1.concat(array2);
}

lista1 = ["Luciano", "Gustavo", "Lucas"];
lista2 = ["Mateus","Gabriela","Amanda"];
lista = concatenaDoisArrays(lista1,lista2);

console.log(lista);
//---------------------------------------------

2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1,2,3,4,5,6,7,8,9,10];
const partNumeros = numeros.slice(3,8);

for(let pos in numeros){
    console.log(`${pos}º - ${numeros[pos]}`);
}
console.log(`\nNova lista`);

console.log(partNumeros);
//---------------------------------------------

3 - Dado o array frutas contendo frutas que desejamos comprar na feira:

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.


const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log("Vetor original: ",frutas);

frutas.splice(2,2,"Kiwi","Pêssego");

console.log(frutas);
//---------------------------------------------

4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ["Arroz","Feijão","Macarrão","Bife"];
const menuDeSobremesas = ["Gelatina", "Mousse", "Brigadeiro", "Sorvete"];
menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);
//---------------------------------------------

5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento. ??

6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

matrix = [];
linha1 = [];
linha2 = [];
linha3 = [];

for(let pos=1;pos<4;pos++){
    linha1.push(pos);
}
for(let pos=4;pos<7;pos++){
    linha2.push(pos);
}
for(let pos=7;pos<10;pos++){
    linha3.push(pos);
}

console.log("Matriz original")
matrix.push(linha1, linha2, linha3);
for(let pos in matrix){
    console.log(matrix[pos]);
}
console.log()

process.stdout.write(`Matriz - segunda linha, terceira coluna: ${matrix[1][2]}`)
console.log()

console.log("Elemento 15 na terceira linha, segunda coluna")
matrix[2].splice(1,0,15);
for(let pos in matrix){
    console.log(matrix[pos]);
}


*/
//---------------------------------------------
const lista1 = ["Luciano", "Gustavo", "Lucas","Mateus","Gabriela","Amanda"];

for(let elemento of lista1){
    console.log({elemento});
}
