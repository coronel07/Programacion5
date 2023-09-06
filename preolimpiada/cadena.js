let aux = 0;

function countingCharacters(msg, i) {
  if (i >= msg.length) {
    return aux;
  } else {
    if (msg[i] !== " ") { // Verifica si el carácter no es un espacio
      aux += 1;
    }
    return countingCharacters(msg, i + 1);
  }
}

console.log(countingCharacters("hola", 0))