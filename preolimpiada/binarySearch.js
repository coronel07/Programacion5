function SortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  function BinarySearchRecursive(arr, n, primero, ultimo) {
    if (primero > ultimo) {
      return false; // No se encontró el elemento.
    }
  
    let mitad = Math.floor((primero + ultimo) / 2);
  
    if (arr[mitad] === n) {
      return true; // Se encontró el elemento.
    } else if (arr[mitad] < n) {
      return BinarySearchRecursive(arr, n, mitad + 1, ultimo); // Buscar en la mitad derecha.
    } else {
      return BinarySearchRecursive(arr, n, primero, mitad - 1); // Buscar en la mitad izquierda.
    }
  }
  
  let arr = [5, 6, 48, 8, 4, 3, 2, 1, 90, 77, 82];
  let arrR = SortArray(arr);
  let n = 5;
  console.log(BinarySearchRecursive(arrR, n, 0, arrR.length - 1)); // false
  