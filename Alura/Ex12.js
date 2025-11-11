/*
1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.


const pessoa1 = {
    nome: "Luciano Rodrigues Batista",
    notas: [7.5, 500, 2],
    
    calcularMediaNotas: function(){
        somaTotal = this.notas.reduce((acumulador, valorAtual) => acumulador+valorAtual,0);
        return somaTotal / this.notas.length;
    },

    classificarDesempenho: function(valor){
        if(valor>=9) return "Desempenho excelente!";
        else if(valor <= 8.9 && valor >= 7.6) return "Desempenho bom!";
        else if(valor <= 7.5 && valor >= 6) return "Desempenho regular!";
        else return "Desempenho insuficiente";
    }
}

media = pessoa1.calcularMediaNotas();
desempenho = pessoa1.classificarDesempenho(media);
console.log(`Notas: ${pessoa1.notas}\nMédia: ${media.toFixed(2)}\nDesempenho: ${desempenho}`);
//-------------------------------------------------

2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.


const carro = {
    marca: "Renault",
    modelo: "Duster",
    ano: 2020,
    cor: "Preto",
}

for(let chave in carro){
    console.log(`${chave} - ${carro[chave]}`);
}
console.log();

carro.abastecimento = "Gasolina";
carro.preco = 74999,99;

for(let chave in carro){
    console.log(`${chave} - ${carro[chave]}`);
}
//-------------------------------------------------

3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.

const carro1 = {
    marca: "Renault",
    modelo: "Duster",
    ano: 2020,
    cor: "Preto",
    ligado: false,

    ligar: function() {
        if(this.ligado === false) {
            this.ligado = true;
            console.log("Carro ligado!\n");
        } 
    },

    desligar: function(){
        if(this.ligado === true){
            this.ligado = false;
            console.log("Carro desligado!\n");
        } 
    },

    obterDetalhes: function(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nLigado: ${this.ligado}\n`);
    }
}

carro1.obterDetalhes();
carro1.ligar();
carro1.obterDetalhes();
carro1.desligar();
carro1.obterDetalhes();
//-------------------------------------------------
4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.


const carro1 = {
    marca: "Renault",
    modelo: "Duster",
    ano: 2020,
    cor: "Preto",
    ligado: false,

    ligar: function() {
        if(this.ligado === false) {
            this.ligado = true;
            console.log("Carro ligado!\n");
        } 
    },

    desligar: function(){
        if(this.ligado === true){
            this.ligado = false;
            console.log("Carro desligado!\n");
        } 
    },
}

carro1.placa = "TCC3T98";
Object.defineProperty(carro1,'placa', {
    value: "TCC3T99",
    enumerable: false
});

console.log("Propriedades enumeráveis - for in")
for(let chave in carro1){
    console.log(`${chave} - ${carro1[chave]}`)
}
console.log();

console.log("Propriedades enumeráveis - Object.keys")
console.log(Object.keys(carro1));
console.log();

console.log(carro1.placa);
//-------------------------------------------------

5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

marca (string): marca do novo carro.
modelo (string): modelo do novo carro.
ano (number): ano de fabricação do novo carro.
cor (string): cor do novo carro.
Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.

const carro1 = {
    marca: "Renault",
    modelo: "Duster",
    ano: 2020,
    cor: "Preto"
};

carroComNovosDetalhes = {
    ...carro1,
    ano: 2021,
    tetoSolar: false
}

for(let chave in carroComNovosDetalhes){
    console.log(`${chave} - ${carroComNovosDetalhes[chave]}`);
}
//-------------------------------------------------
*/

const estudante = require('./estudante.json');

console.log("Objeto\n", estudante);
console.log();

const stringEstudante = JSON.stringify(estudante);

console.log("String\n", stringEstudante);
console.log();

const objEstudante = JSON.parse(stringEstudante);

console.log("Objeto novamente\n", objEstudante);
console.log();