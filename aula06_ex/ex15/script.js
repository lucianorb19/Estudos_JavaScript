function verificar(){
    //Var resultado ligada a div de id resultado
    var resultado = window.document.querySelector('div#resultado')
    
    //ANO ATUAL
    var data = new Date()
    var ano_atual = data.getFullYear()//ANO DE 4 DÍGITOS
    //VARIÁVEL ano_nascimento ligada campo de id = id_ano_nasicmento
    var ano_nascimento = window.document.getElementById('id_ano_nascimento')
    
    //CONDICIONAL SE O CAMPO ANO NASCIMENTO ESTÁ VAZIO OU SE É UM ANO FUTURO
    if(ano_nascimento.value == ""){
        window.alert("[Erro] - Preencha o campo Ano de Nascimento.")
    } else if(Number(ano_nascimento.value) > ano_atual){
        window.alert("[Erro] - Ano de nascimento imcompatível! Tente novamente.")
    }else{
        //CONDICIONAL IDADE MAIOR QUE 125 NÃO FUNCIONA
        var idade = ano_atual - Number(ano_nascimento.value)
        if(idade>125){
            window.alert("Velho demais")
        }else{
            //CAMPOS PREENCHIDOS CORRETAMENTE

        //VARIÁVEL SEXO LIGADA AOS DOIS ELEMENTOS
        //[0] MASCULINO
        //[1] FEMININO)
        var sexo = document.getElementsByName('radio_sexo')
        //CÁLCULO IDADE
        

        //INCLUINDO IMAGEM NO HTML PELO JS - PRIMEIRO A TAG IMG
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        /*Seria o mesmo que criar no HTML
            <img id="foto">
        */

        //CONDICIONAL DO GÊNERO (MULHER/HOMEM) PELO SEXO (MASCULINHO/FEMININO)
        var genero = ''//VARIÁVEL COMEÇA VAZIA
        //SE FOI MARCADO MASCULINO
        if(sexo[0].checked){//HOMEM
            genero='Homem'
            img.setAttribute('margin','auto')
            //CONDICIONAL DEFINIÇÃO DA FOTO PELA IDADE
            if (idade >=0 && idade <10){//CRIANÇA
                img.setAttribute('src','imagens/criancaM.png')
            }else if (idade>=10 && idade<21){//JOVEM
                img.setAttribute('src','imagens/jovemM.png')
            }else if(idade>=21 && idade<55){//ADULTO
                img.setAttribute('src','imagens/adultoM.png')
            }else{//IDOSO
                img.setAttribute('src','imagens/idosoM.png')
            }
        }else if(sexo[1].checked){//MULHER
            genero='Mulher'
            if (idade >=0 && idade <10){//CRIANÇA
                img.setAttribute('src','imagens/criancaF.png')
            }else if (idade>=10 && idade<21){//JOVEM
                img.setAttribute('src','imagens/jovemF.png')
            }else if(idade>=21 && idade<55){//ADULTO
                img.setAttribute('src','imagens/adultoF.png')
            }else{//IDOSO
                img.setAttribute('src','imagens/idosoF.png')
            }
        }
        //NÃO FUNCIONA FORA DO IF. ESCOPO ?
        resultado.style.margin= 'auto'//NÃO FUNCIONA
        resultado.style.textAlign = 'center'//NÃO FUNCIONA
        resultado.innerHTML=`${genero} de ${idade} anos.`
        resultado.appendChild(img)//MOSTRA A IMAGEM
        }
        
        
    }
   
}