const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let checker = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        checker = false;
      }
    }
    if (checker) break;
  }
  return arr;
};
let arr = [3, 64, 10, 25, 12, 1, 22, 11];
arr = bubbleSort(arr);
console.log(arr);
