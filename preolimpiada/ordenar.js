function recursiveBubbleSort(arr, n) {
  if (n === 1) {
    return; // Caso base: solo un elemento, ya está ordenado.
  }
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
    }
  }
  recursiveBubbleSort(arr, n - 1);
}

let arr = [64, 34, 25, 12, 22, 11, 90];
recursiveBubbleSort(arr, arr.length);
console.log(arr);
