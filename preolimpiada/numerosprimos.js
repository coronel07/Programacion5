function esPrimo(n, divisor = 2) {
    // Caso base: si n es igual a 2, es un número primo
    if (n === 2) {
      return true;
    }
  
    // Caso base: si n es menor o igual a 1 o divisible por el divisor actual, no es primo
    if (n <= 1 || n % divisor === 0) {
      return false;
    }
  
    // Si hemos comprobado todos los divisores posibles y ninguno lo divide exactamente,
    // entonces n es primo
    if (divisor * divisor > n) {
      return true;
    }
  
    // Llamamos recursivamente con el siguiente divisor
    return esPrimo(n, divisor + 1);
  }
  
  // Ejemplos de uso:
  console.log(esPrimo(2));     // true (2 es primo)
  console.log(esPrimo(17));    // true (17 es primo)
  console.log(esPrimo(10));    // false (10 no es primo)
  console.log(esPrimo(23));    // true (23 es primo)
  console.log(esPrimo(1));     // false (1 no es primo)
  