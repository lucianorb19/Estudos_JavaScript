function carregar_hora(){
    //Variáveis JS ligadas às suas tags HTML
    var mensagem = window.document.getElementById("mensagem")
    var imagem = window.document.getElementById("imagem")
    //Definindo a hora atual
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    //Mostrando hora atual na div de id=mensagem
    mensagem.innerHTML = `Agora são ${hora} horas.`
    
    //CONDICIONAL QUE MUDA A IMAGEM E COR DE FUNDO A DEPENDER DA HORA
    if (hora >= 4 && hora <=11){
        //mudança imagem
        imagem.src='imagens/manha.png'
        //mudança cor de fundo do body
        window.document.body.style.backgroundColor ='rgba(218, 122, 78, 0.54)'
        //bom dia
    }else if (hora >=12 && hora <=17){
        imagem.src='imagens/tarde.png'
        window.document.body.style.backgroundColor ='rgba(78, 129, 191, 0.59)'
        //boa tarde
    }else{// >=18 && <=3
        imagem.src='imagens/noite.png'
        window.document.body.style.backgroundColor ='rgba(19, 38, 71, 0.68)'
        //boa noite
    }
}
