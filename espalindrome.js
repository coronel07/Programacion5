function esPalindroma(palabra, inicio = 0, fin = palabra.length - 1) {
    // Caso base: Si hemos comparado todos los caracteres, la palabra es palíndroma.
    if (inicio >= fin) {
        return true;
    }
    
    // Comparamos los caracteres en los extremos de la palabra.
    if (palabra[inicio] !== palabra[fin]) {
        return false;
    }
    
    // Llamamos recursivamente a la función con los índices ajustados.
    return esPalindroma(palabra, inicio + 1, fin - 1);
}

// Ejemplo de uso:
const palabra = "reconocer";

console.log(esPalindroma(palabra));
