const arr = [12, 14, 33, 22, 5, 1];

function binarySearch(arr, left, right) {
  if (left <= right) {
    var mid = parseInt((left + right) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[mid] < arr[mid + 1]) {
      return binarySearch(arr, mid + 1, right);
    } else return binarySearch(arr, left, mid - 1);
  }
}

var n = arr.length;
var index = binarySearch(arr, 1, n - 2);
console.log("array: ", arr, "\n", "bitonic index: ", index);
