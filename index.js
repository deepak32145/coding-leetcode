function findmMedian(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];

  for (let i = 0; i < arr3.length - 1; i++) {
    let swapped = false;
    let temp;
    for (let j = 0; j < arr3.length - i - 1; j++) {
      if (arr3[j] > arr3[j + 1]) {
        temp = arr3[j];
        arr3[j] = arr3[j + 1];
        arr3[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) break;
  }

  let median = 0;
  let len = arr3.length;
  if (len % 2 == 0) {
    median = arr3[len/2] + arr3[(len/2)-1];
    return median/2;
  } else {
    median = arr3[(len-1)/2];
    return median;
  }
}
let arr1 = [1, 2];
let arr2 = [3,4];
console.log(findmMedian(arr1, arr2));
