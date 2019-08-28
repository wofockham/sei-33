function bubbleSort(array) {

  let swapped = true;

  let end = array.length - 1; // good luck with this

  while (swapped === true) {
    swapped = false;

    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {

        [ array[i], array[i+1] ] = [ array[i+1], array[i] ]; // destructuring
        swapped = true;
      }
    }

    end--;
  }

  return array;
}

module.exports = bubbleSort;
