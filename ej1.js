function recursiveBubbleSort(arr, n, i) {
  if (n === 1 || i === n - 1) {
    return;
  }
  if (arr[i] > arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  recursiveBubbleSort(arr, n, i + 1);

  if (i === 0) {
    recursiveBubbleSort(arr, n - 1, 0);
  }
}

let i = 0;
let arr = [64, 34, 25, 12, 22, 11, 90];
recursiveBubbleSort(arr, arr.length, i);
console.log(arr);
