class Pair {
  constructor() {
    this.min = -1;
    this.max = 1000;
  }
}

function findMinMaxPair(arr, low, high) {
  var mm = new Pair();
  var ml = new Pair();
  var mr = new Pair();
  let mid;

  if (low == high) {
    mm.min = arr[low];
    mm.max = arr[low];
    return mm;
  }

  if (high == low + 1) {
    if (arr[high] > arr[low]) {
      mm.min = arr[low];
      mm.max = arr[high];
    } else {
      mm.min = arr[high];
      mm.max = arr[low];
    }
    return mm;
  }

  mid = parseInt((low + high) / 2);
  ml = findMinMaxPair(arr, low, mid);
  mr = findMinMaxPair(arr, mid + 1, high);

  if (ml.min > mr.min) {
    mm.min = mr.min;
  } else {
    mm.min = ml.min;
  }
  if (ml.max > mr.max) {
    mm.max = ml.max;
  } else {
    mm.max = mr.max;
  }
  return mm;
}
let arr = [2, 3, 5, 1, 12, 412, 12];
let result = findMinMaxPair(arr, 0, arr.length - 1);
console.log(result);
