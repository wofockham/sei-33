function quickSort(arr){
  if (arr.length <= 1) {
    return arr; // base case
  }

  const pivot = arr.pop(); // this could be .shift()
  const left = arr.filter((item) => item <= pivot); // Values less than or equal to pivot
  const right = arr.filter((item) => item > pivot); // Values greater than pivot

  // You might find the spread operator makes this more readable.
  return quickSort(left).concat([pivot], quickSort(right));
}

module.exports = quickSort;
