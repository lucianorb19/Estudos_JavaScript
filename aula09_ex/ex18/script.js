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
        window.alert('OK')
    }else{//NÚMERO NÃO ESTÁ ENTRE 1 E 100 OU ESTÁ NA LISTA
        window.alert("Valor inválido ou já está na lista!")
    }
}