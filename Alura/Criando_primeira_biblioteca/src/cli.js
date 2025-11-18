import fs from 'fs';
//const fs = require('fs');
import path from 'path';
import trataErros from './erros/funcoesErro.js';
//const trataErros = require('./erros/funcoesErro');
import {contaPalavras} from './index.js';
import { montaSaidaArquivo } from './helpers.js';
//import { Command } from 'commander';




//VERSÃO COM USO DA BIBLIOTECA COMMANDER
/*
function processaArquivo(texto, destino){
  fs.readFile(texto, 'utf-8', (erro, texto) => {
  try {
    if (erro) throw erro
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, destino);
  } catch(erro) {
    trataErros(erro);
  }
});
}

const program = new Command();
program
.version('0.0.1')
.option('-t, --texto <string>', 'caminho do texto a ser processado')
.option('-d  --destino <string>', 'caminho da pasta a salvar o arquivo de resultados')
.action((options)=> {
  const {texto, destino} = options; //DESESTRUTURAÇÃO DE ARRAY

  if(!texto || !destino){
    console.error("Erro: favor inserir caminho de origem e destino!")
    program.help();
    return;
  }

  //USO BIBLIOTECA PATH PARA MONTRAR CAMINHO DOS ARQUIVOS
  caminhoTexto = path.resolve(texto);
  caminhoDestino = path.resolve(destino);

  try{
    processaArquivo(caminhoTexto, caminhoDestino);
    console.log("Texto processado com sucesso!");
  }catch(erro){
    console.log("Erro no processamento", erro)
  }
})

program.parse();
*/


const caminhoArquivoLeitura = process.argv[2];
const caminhoArquivoEscrita = process.argv[3];

fs.readFile(caminhoArquivoLeitura, 'utf-8', (erro, texto) => {
  try {
    if (erro) throw erro
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, caminhoArquivoEscrita);
  } catch(erro) {
    trataErros(erro);
  }
});

async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try{
       await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log("Arquivo criado!");
    }catch(erro){
        throw erro;
    }
}

// function criaESalvaArquivo(listaPalavras, endereco){
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//     .then(()=>{//SEM PARÂMETRO PQ writeFile NÃO GERA RETORNO
//         console.log("Arquivo criado!");
//     })
//     .catch((erro)=>{
//         throw erro;
//     })
//     .finally(()=>{//É EXECUTADO DE QUALQUER FORMA
//         console.log("Operação finalizada!")
//     })
// }