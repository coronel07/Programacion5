let result = 0;

function esEscalonado(numStr) {
  for (let i = 1; i < numStr.length; i++) {
    if (parseInt(numStr[i]) <= parseInt(numStr[i - 1])) {
      return false;
    }
  }
  return true;
}
function EscalonadosR(numero, N) {
  //sea mayor a N
  if (numero > N) {
    return;
  }
  if (esEscalonado(numero.toString())) {
    result++;
  }
  EscalonadosR(numero + 1, N);
}
let N = 15;
EscalonadosR(10, N);
console.log(result);
