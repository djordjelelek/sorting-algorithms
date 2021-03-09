const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let num = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[num]) num = j;
    }
    let temp = arr[num];
    arr[num] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
let arr = [3, 64, 10, 25, 12, 1, 22, 11];
arr = selectionSort(arr);
console.log(arr);
