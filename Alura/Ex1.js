/*
Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.


let nome = 'Luciano';
let idade = 28;
let rico = false;

console.log(`Tipo das variáveis:\n 
nome: ${typeof(nome)}\n
idade: ${typeof(idade)}\n
rico: ${typeof(rico)}\n`);
//--------------------------------------------------------------------

Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.


let primeiroNome = 'Luciano';
let ultimoNome = 'Batista';
let nomeCompleto = primeiroNome +' '+ ultimoNome;
let nomeTemplateString = `${primeiroNome} ${ultimoNome}`;

console.log(nomeCompleto);
console.log(nomeTemplateString);
//--------------------------------------------------------------------

Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
*

let idade = 28;
let nome = 'Luciano';
let frase = `Nome: ${nome}, idade de ${idade} anos`;
console.log(frase);
//--------------------------------------------------------------------

Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let nome = 'Luciano';
console.log(nome);
nome = 'Camila';
console.log(nome);
//--------------------------------------------------------------------

Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.



if(true){
    let nome1 = 'Luciano';
    console.log(`No bloco: ${nome1}`)
}

//console.log(`Fora do bloco: ${nome1}`)
//--------------------------------------------------------------------

Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.


const chuva = false;

if(chuva){
    console.log("Leve um guarda chuva!")
}else{
    console.log("Dia sem chuva!")
}
//--------------------------------------------------------------------


*/
