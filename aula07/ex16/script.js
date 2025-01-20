function contar(){
    //Variáveis JS com campos HTML
    let inicio = window.document.getElementById('id_inicio')
    let fim = window.document.getElementById('id_fim')
    let passo = window.document.getElementById('id_passo')
    let resultado = window.document.getElementById('id_resultado')

    //SE ALGUM DOS CAMPOS ESTIVER VAZIO
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else{//TODOS PREENCHIDOS 
        resultado.innerHTML='<br> Contando: <br>'
        //VARIÁVEIS PARA O LAÇO
        //USA-SE FUNÇÃO NUMBER PQ QUANDO VEM DO FORMULÁRIO, VEM COMO STRING
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //CASO PASSO SEJA 0 OU NEGATIVO, VIRA 1
        if(p<=0){
            window.alert('Passo inválido! Considerando passo 1...')
            //passo.innerText='1'
            p=1
        }

        //CONTAGEM AUMENTANDO
        if(i < f){
            for(let c=i;c<=f;c+=p){
                //CONCATENA À TAG DE ID RESULTADO, OS VALORES DE C
                resultado.innerHTML+=`${c} \u{27A1} `
            }
            
        }else{//CONTAGEM DIMINUINDO
            for(c=i;c>=f;c-=p){
                resultado.innerHTML+=`${c} \u{27A1} `
            }
        }
        resultado.innerHTML+=`\u{1F3C1}`
    }

}