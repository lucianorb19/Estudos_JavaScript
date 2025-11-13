/*
1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.

No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.


const livro = {
    titulo: "Nárnia",
    auto: "C.S Lewis",
    anoPublicacao: 2005,
    genero: "Ficção Científica"
};

console.log(livro);
//--------------------------------------

2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.


const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Nárnia",
    autor: "C.S Lewis",
    anoPublicacao: 2005,
    genero: "Ficção Científica"
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
mostrarDetalhes = `Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de publicaçao: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Idade da obra: ${livro.idadePublicacao} anos`;

console.log(mostrarDetalhes);
//--------------------------------------

3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.


const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Nárnia",
    autor: "C.S Lewis",
    anoPublicacao: 2005,
    genero: "Ficção Científica",
};
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

console.log(livro["titulo"], livro["autor"], livro["anoPublicacao"], livro["genero"], livro["idadePublicacao"]);
//--------------------------------------

4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

No final do arquivo livro.js, adicione uma avaliação ao objeto.

Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Nárnia",
    autor: "C.S Lewis",
    anoPublicacao: 2005,
    genero: "Ficção Científica",
};
livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.avaliacao = null;

livro.avaliacao = "Livro de sucesso que conta a história do leão Jesus e 4 irmãos";

console.log(livro);

if(livro.avaliacao === null){
    livro.avaliacao = "Avaliação a ser feita..."
}else{
    console.log("Livro com avaliação personalizada!")   
}
//--------------------------------------

5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".


const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Nárnia",
    autor: "C.S Lewis",
    anoPublicacao: 2005,
    genero: "Ficção Científica",
};
livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.genero = "Aventura";

console.log(livro);
//--------------------------------------

6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.


const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Nárnia",
    autor: "C.S Lewis",
    anoPublicacao: 2005,
    genero: "Ficção Científica",
    avaliacao: "Livro de sucesso que conta a história do leão Jesus e 4 irmãos"
};
livro.idadePublicacao = anoAtual - livro.anoPublicacao;
console.log(livro);

delete livro.avaliacao;
console.log(livro);
*/
