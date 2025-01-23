//VARIÁVEIS JS - HTML
let numero = window.document.getElementById('id_numero')
let lista = window.document.querySelector('select#id_lista_numeros')
let resultado = window.document.getElementById('id_resultado')

//VARIÁVEL QUE SERÁ O VETOR DE NÚMEROS
let numeros = []

//FUNÇÃO QUE VERIFICA SE O NÚMERO ESTÁ ENTRE 1 E 100
function isNumero(num){
    if(Number(num)>=1 && Number(num)<=100){
        return true
    }else{
        return false
    }
}

//FUNÇÃO QUE VERIFICA SE O NÚMERO ESTÁ NA LISTA
function inLista(num, vetor){
    //NÚMERO ESTÁ NA LISTA
    if(vetor.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    //SE NÚMERO ESTIVER ENTRE 1 E 100 E NÃO ESTIVER NA LISTA
    if(isNumero(numero.value) && !inLista(numero.value,numeros)){
        //ADICIONO AO VETOR
        numeros.push(Number(numero.value))

        //MOSTRO NA TELA OS VALORES ADICIONADOS
        let item = document.createElement('option')
        item.text = `\u{27A1} ${numero.value}`
        //ADICIONO AO SELECT, A OPTION, QUE É UM ELEMENTO CONTENDO O TEXTO "=> NUMERO"
        lista.appendChild(item)
        //AO ADICIONAR UM NÚMERO, LIMPAR AS ESTATÍSTICAS ANTERIORES
        resultado.innerHTML=''
    }else{//NÚMERO NÃO ESTÁ ENTRE 1 E 100 OU ESTÁ NA LISTA
        window.alert("Valor inválido ou já está na lista!")
    }

    //LIMPAR OQ ESTIVER NO CAMPO NÚMERO E POSICIONAR O CURSOR
    //NOVAMENTE NO CAMPO
    numero.value=""
    numero.focus()
}

function finalizar(){
    //SE EU TENTAR FINALIZAR COM O VETOR VAZIO
    if(numeros.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{//HAVENDO NÚMEROS NO VETOR
        let total_numeros = numeros.length
        //DEFINIÇAO DE MAIOR,MENOR,SOMA E MÉDIA
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0
        for(let pos in numeros){
            if(numeros[pos]> maior){
                maior = numeros[pos]
            }
            if(numeros[pos]<menor){
                menor = numeros[pos]
            }
            soma+=numeros[pos]
        }
        media=soma/total_numeros

        //ESVAZIANDO O CAMPO CADA VEZ QUE FINALIZO
        resultado.innerHTML=''

        //MOSTRANDO NOVOS RESULTADOS
        resultado.innerHTML=
        `<p>
            Total de números: ${total_numeros}<br>
            Maior: ${maior}<br>
            Menor: ${menor}<br>
            Soma total: ${soma}<br>
            Media: ${media}<br>
        </p>`
    }
}