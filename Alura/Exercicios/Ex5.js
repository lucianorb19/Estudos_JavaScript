/*
Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const numeros = [, 5, , 5, , , , 5];
let pos;
for(pos=0;pos<=(numeros.length)-1;pos++){
    console.log(`Posição ${pos} - valor ${numeros[pos]}`);

}

//for(let pos in numeros){
//   console.log(`Posição ${pos} - valor ${numeros[pos]}`);
//}

//-------------------------------------------------
Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.


let compras = ["maçãs","banana","iogurte","pão","café",]
console.log(`Lista antes da mudança:`)
for(let pos in compras){
    console.log(`Posição ${pos} - ${compras[pos]}`);
}
compras[0] = "manga";

console.log(`Lista após a mudança:`)
for(let pos in compras){
    console.log(`Posição ${pos} - valor ${compras[pos]}`);
}
//-------------------------------------------------
Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

let meuArray = [];
meuArray.push(4);
meuArray.push(12);
meuArray.push(7);

for(let pos in meuArray){
    console.log(`${pos} - ${meuArray[pos]}`);
}
console.log();

meuArray[0] = meuArray[0]*2;
for(let pos in meuArray){
    console.log(`${pos} - ${meuArray[pos]}`);
}
//-------------------------------------------------
Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

let clinica = [["Cachorro","Bob"],["Gato","Fred"],["Cachorro","Pistola"]];

for(let pos in clinica){
    console.log(`${pos} - ${clinica[pos]}`);
}
console.log();

clinica.pop();
clinica.pop();
clinica.pop();

console.log(clinica);
*/
//-------------------------------------------------