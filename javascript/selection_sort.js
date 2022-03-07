function selectionSort(arr) {
  let min, p;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      p = arr[min];
      arr[min] = arr[i];
      arr[i] = p;
    }
  }

  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-1, 1, 4, 5, 5, 6]");
  console.log("=>", selectionSort([5, 1, 4, 5, 6, -1]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const shortInput = [];
  const longInput = [];

  for (let j = 0; j < 3; j++) {
    shortInput.push(Math.random());
  }
  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const start = new Date();
  for (let a = 0; a < 1000; a++) {
    selectionSort(shortInput);
    selectionSort(longInput);
  }
  let end = new Date();
  let avgTime = (end.getTime() - start.getTime()) / 2000;
  console.log(`${avgTime} ms`);
}

module.exports = selectionSort;

/*
initialize min and p

loop length of arr times (i)
  min = current i loop iteration

  loop length of arr (after i) times (j)
    if arr[j] is less than arr[min]
      min = current j loop iteration

  if min changes from its original i loop iteration
    p = the min of arr determined from j loop
    arr[j loop min iteration] = arr[current i iteration]
    arr[current i iteration] = p

  return the arr
*/

/*
I initialized min to store the n'th element of arr where the current minimum is.
'p' is initialized to store the value of the array when needed when swapping.
A for loop is created to go through the arr once.
The min is initially set to the current iteration of the first for loop.
A second for loop is created to compare the other remaining elements to the current iteration of the first for loop.
In the second for loop, I see if the current iteration is less than where the current min is set to and if so, the min is set to the current iteration.
When the second for loop is done, then the number from the first for loop is swapped with the number where min is located.
When the first loop is done, then the arr is returned.
*/