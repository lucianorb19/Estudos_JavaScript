/*
function par_impar(numero){
    if(numero%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(par_impar('a'))
*/

function fatorial(num){
    resultado=1
    for(contador=num;contador>=2;num--){
        //num - 4
        //contador - 1
        //resultado - 24
        resultado*=contador-1 //resultado = resultado*num

    }
    return resultado
}

console.log(`Fatorial de 4 -> ${fatorial(4)}`)
/*
4 x 3 = 12
12 x 2 = 24
24 x 1 = 24



*/