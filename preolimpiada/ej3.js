function esPalindroma(palabra, inicio, fin) {
    if (inicio >= fin) {
        return true;
    }
    if (palabra[inicio] !== palabra[fin]) {
        return false;
    }
    return esPalindroma(palabra, inicio + 1, fin - 1);
}
let palabra = "neuquen";
let fin = palabra.length - 1
let inicio = 0
console.log(esPalindroma(palabra, inicio, fin));
