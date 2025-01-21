/*
function par_impar(numero){
    if(numero%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(par_impar('a'))



//---------------------------------------------------------
//FATORIAL - NORMAL
function fatorial(num){
    resultado=num
    for(contador=num;contador>2;contador--){
        console.log(`${resultado} x ${contador-1}`)
        resultado*=contador-1
    }
    return resultado
}
console.log(`Fatorial de 5 -> ${fatorial(5)}`)




//----------------------------------------------------------
//FATORIAL - RECURSIVO
//5! = 5x4x3x2x1 ou seja
//5! = 5x4! ou seja
//n! = n x (n-1)! a não ser que
//n = 1, pq 1! = 1

function fatorial(num){
    if (num==1){
        return 1
    }else{
        return num*fatorial(num-1)
    }
}
console.log(`Fatorial de 5 -> ${fatorial(5)}`)
*/


