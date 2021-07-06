// Binary Search in Javascript
let arr = [2, 1, 5, 3, 7, 4, 8, 6, 9, 10];
let sortedArray = [...arr].sort((a, b) => a - b);

function binarySearch(sortedArray, element) {
  // This should return index of the element
  // in binary search way
  console.log(sortedArray, element);
  let high = sortedArray.length - 1;
  let low = 0;
  let mid = Math.ceil((high + low) / 2);

  while (sortedArray.length) {
    if (sortedArray[mid] === element) {
      console.log(sortedArray[mid]);
    }
  }
}

binarySearch(sortedArray, 7);
