let cad = "aaabbccddeeff";
let index = 0;         
let letter = cad[0];   
let aux = "";          
let num = 0;           

function Codif(cad, letter, index, aux, num) {
    // Si hemos llegado al final de la cadena de entrada, agregamos el número y el carácter actual a la cadena auxiliar y la devolvemos
    if (index >= cad.length) {
        aux += num;
        aux += letter;
        return aux;
    }

    // Si el carácter actual es igual al carácter en la posición actual, incrementamos el contador
    if (cad[index] == letter) {
        num++;
        return Codif(cad, letter, index + 1, aux, num);
    }

    // Si el carácter actual es diferente, agregamos el número y el carácter actual a la cadena auxiliar
    aux += num;
    aux += letter;

    // Actualizamos el carácter actual y reiniciamos el contador
    letter = cad[index];
    num = 0;

    // Llamamos recursivamente a la función para procesar el siguiente carácter
    return Codif(cad, letter, index, aux, num);
}

// Llamamos a la función de codificación e imprimimos el resultado
console.log(Codif(cad, letter, index, aux, num));
