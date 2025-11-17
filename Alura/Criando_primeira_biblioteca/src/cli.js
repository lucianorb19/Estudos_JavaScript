import fs from 'fs';
//const fs = require('fs');

import trataErros from './erros/funcoesErro.js';
//const trataErros = require('./erros/funcoesErro');

import {contaPalavras} from './index.js';
import { montaSaidaArquivo } from './helpers.js';

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