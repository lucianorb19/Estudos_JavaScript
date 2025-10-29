/*
Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.


let saldo = 500.25;
let deposito = 100.25;
let saque = 450.50;
console.log(`Saldo inicial: R$ ${saldo}
             A efetuar: depósito de R$ ${deposito} e saque de R$ ${saque}`);


saldo += deposito;
saldo-= saque;

console.log(`Saldo final: R$ ${saldo.toFixed(2)}`);
//---------------------------------------------------------------------
Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.


const num = 6;

const resultado = num%2 === 0? "par":"ímpar";
console.log(`Número ${num} é ${resultado}`);
//---------------------------------------------------------------------
Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let usuarioLogado = false;
let usuarioComPermissao = false;

if(usuarioLogado && usuarioComPermissao){
    console.log(`Funcionalidade acessível!`);
}else{
    console.log(`Funcionalidade não acessível!`);
}
//---------------------------------------------------------------------
Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const var1 = false;
const var2 = true;

if(var1 || var2){
    console.log(`Ao menos uma das variáveis é verdadeira!`);
}else{
    console.log(`Nenhuma das variáveis é verdadeira!`);
}
//---------------------------------------------------------------------
Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

let idadeMinima = 18;
let idadeUsuario = 15;

if(idadeUsuario >= idadeMinima){
    console.log(`Permitada compra para usuário com ${idadeUsuario} anos!`);
}else{
    console.log(`Compra não permitida para usuário com ${idadeUsuario} anos.
                 Idade mínima: ${idadeMinima}`);
}
//---------------------------------------------------------------------
*/

let exibeNome = (nome) => nome;

console.log(exibeNome("Luciano"));