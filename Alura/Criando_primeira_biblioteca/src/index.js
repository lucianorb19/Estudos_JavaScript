
export function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto)
  //flatmap NO LUGAR DE .filter + .map
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  })
  return contagem;
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split('\n');
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
    }
  })
  return resultado;
}

function limpaPalavras(palavra) {
    //EXPRESSÃO REGEX QUE RETIRA TODOS CARACTÉRES ESPECIAIS JUNTO ÀS PALAVRAS
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

