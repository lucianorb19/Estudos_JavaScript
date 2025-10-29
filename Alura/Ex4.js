/*
Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

function saudacao(nome){
    return `Olá ${nome}!`;
}

console.log(saudacao("Luciano"));
//-------------------------------------------
Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

const maiorDeIdade = function(idade){
    return idade >= 18? true : false;
}

console.log(maiorDeIdade(15));
console.log(maiorDeIdade(20));
//-------------------------------------------
Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.


function palindromo(frase){
    //TUDO EM MAIÚSCULO, SEM ESPAÇO ANTES, DEPOIS E NO MEIO
    frase = frase.toUpperCase().replace(/\s+/g, '');
    //FRASE TRANSFORMADA EM ARRAY, INVERTIDA E DE VOLTA A STRING
    let fraseChars = frase.split('');
    let fraseCharsInverso = fraseChars.reverse();
    let fraseInvertida = fraseCharsInverso.join('');

    console.log(`Frase:           ${frase}`);
    console.log(`Frase invertida: ${fraseInvertida}`);

    if(frase === fraseInvertida){
        return true;
    }else{
        return false;
    }
}

console.log(palindromo("A cara rajada da jararaca"));
//-------------------------------------------
Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.


let maiorNum = function(num1,num2,num3){
    let maior = num1;

    if (num2 > maior){
        maior = num2;
    }
    if(num3>maior){
        maior = num3;
    }

    return maior;
}

console.log(maiorNum(3,20,3));
//-------------------------------------------
Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

let calculaPotencia = (base, expoente) => base**expoente;

console.log(calculaPotencia(3,3));
//-------------------------------------------
*/
