//MONTA UMA SAÍDA AMIGÁVEL AO USUÁRIO
function montaSaidaArquivo(listaPalavras){
    let textoFinal ='';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `Palavras duplicadas no parágrafo ${indice+1}: ${duplicadas}\n`
    });

    return textoFinal;
}

//FILTRA EM CADA PARÁGRADO AS PALAVRAS QUE APARECEM MAIS DE UMA VEZ
function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

export{montaSaidaArquivo}