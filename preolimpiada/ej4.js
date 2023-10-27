function invertirCadena(cadena, indice = 0) {
    if (indice === cadena.length) {
        return "";
    } else {
        return invertirCadena(cadena, indice + 1) + cadena[indice];
    }
}
const cadenaOriginal = "messi";
const cadenaInvertida = invertirCadena(cadenaOriginal);
console.log(cadenaInvertida);

