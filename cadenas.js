function invertirCadena(cadena, indice = 0) {
    // Caso base: Si hemos llegado al final de la cadena, retornamos una cadena vacía.
    if (indice === cadena.length) {
        return "";
    } else {
        // Recursivamente, obtenemos el último carácter y lo agregamos al resultado de invertir el resto de la cadena.
        return invertirCadena(cadena, indice + 1) + cadena[indice];
    }
}

// Ejemplo de uso:
const cadenaOriginal = "messi";
const cadenaInvertida = invertirCadena(cadenaOriginal);
console.log(cadenaInvertida);

