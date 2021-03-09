const selectionSort = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    let num = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[num]) num = y;
    }
    let temp = arr[num];
    arr[num] = arr[x];
    arr[x] = temp;
  }
  return arr;
};
let arr = [3, 64, 10, 25, 12, 1, 22, 11];
arr = selectionSort(arr);
console.log(arr);
