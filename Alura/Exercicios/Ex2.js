/*
Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.



const frase = "Meu nome é Luciano";
console.log(frase.length);
console.log(frase.toUpperCase());
//------------------------------------------------------

Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

let var1 = null;
let var2;

console.log(` var1: ${var1}\n var2: ${var2}`);
//------------------------------------------------------

Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

let nome = "Luciano";
let idade = 28;
let rico = false;

console.log(`Seu nome é ${nome}, tem ${idade} anos`);
if(rico){
    console.log("Rico!")
}else{
    console.log("Classe média (pobre!)")
}
//------------------------------------------------------

Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.




let var1 = 15;
let var2 = "10";

var1 = String(var1);
var2 = Number(var2);

console.log(`var1: ${var1}, tipo: ${typeof var1}`);
console.log(`var2: ${var2}, tipo: ${typeof var2}`);
//------------------------------------------------------

Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

let frase = "Meu nome é Luciano Rodrigues Batista e tenho 28 anos  ";
let fraseTratada = frase.trim();

console.log(`
    frase minúscula: ${fraseTratada.toLowerCase()}\n
    frase maiúscula: ${fraseTratada.toUpperCase()}\n
    tamanho da frase: ${fraseTratada.length}\n
    primeiro caractére: ${fraseTratada[0]}\n
    último caractére: ${fraseTratada[(fraseTratada.length)-1]}\n
    frase contém luciano: ${fraseTratada.includes("luciano")}\n
    frase contém Luciano: ${fraseTratada.includes("Luciano")}\n
    primeira palavra: ${fraseTratada.slice(0,3)}\n
    última palavra: ${fraseTratada.slice(48,52)}
    `)
//------------------------------------------------------

*/