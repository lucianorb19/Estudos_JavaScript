//LISTENER
var bt_tabuada = window.document.getElementById('bt_tabuada')
bt_tabuada.addEventListener('click',tabuada)

function tabuada(){
   //Variáveis JS com campos HTML
   let num = window.document.getElementById('id_numero')
   let tabuada = window.document.getElementById('id_tabuada')

   //SE O CAMPO NÚMERO ESTIVER VAZIO
   if(num.value.length == 0){
        window.alert('[ERRO] - Digite um número!')
   }else{//NÃO VAZIO
        let n = Number(num.value)

        /*CAMPO SELECT PARA MOSTRAR A TABUADA
        NO HTML, SERIA ASSIM

        <select name="tabuada" id="id_tabuada" size="10">
            <option value="Valor_1">Valor 1</option>
            <option value="Valor_2">Valor 2</option>
        </select>
        */


        //LIMPAR OQ JÁ ESTIVER SENDO MOSTRADO NA TABUADA
        tabuada.innerHTML=''
        //MUDAR O TAMANHO DO CAMPO DA TABUADA PARA 10 LINHAS
        tabuada.setAttribute('size','10')
        
        //GERANDO A TABUADA (CAMPOS option) NO JS
        let contador = 1
        while(contador<=10){
            //VARIÁVEL item REPRESENTA CADA LINHA DA TABUADA
            //QUE É UMA TAG option DENTRO DO SELECT
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            item.value = `tabuada${contador}`//NÃO USADO
            //ADICIONANDO O ELEMENTO AO HTML
            tabuada.appendChild(item)
            //INCREMENTO DO LAÇO
            contador++
        }

   }
}