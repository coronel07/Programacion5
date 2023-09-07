let cont = 0;
let bin = "1000000110";
let exp = bin.length - 1;
let aux = 0;

function binaryToDecimal(bin, cont, exp, aux){
    if(cont >= bin.length || exp < 0){
        return aux
    }

    aux += bin[cont] * (2**exp);
    return (binaryToDecimal(bin, cont + 1, exp - 1, aux));
    
}

console.log(binaryToDecimal(bin, cont, exp, aux));