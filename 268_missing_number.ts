const missingNumber = function (array: any) {
  const bubbleSort = function (sortingArray: any) {
    const arrayLength = sortingArray.length;
    let swapValidation: boolean;

    do {
      swapValidation = false;

      for (let i = 0; i < arrayLength; i++) {
        if (sortingArray[i] > sortingArray[i + 1]) {
          let temporaryValue = sortingArray[i];
          sortingArray[i] = sortingArray[i + 1];
          sortingArray[i + 1] = temporaryValue;
          swapValidation = true;
        }
      }
    } while (swapValidation);
    return sortingArray;
  };

  let sortedArray = bubbleSort(array);

  let largestValue = sortedArray[sortedArray.length - 1];

  let topOfRange = largestValue;

  let sumOfRange: number = 0;

  for (let i = 0; i < topOfRange; i++) {
    sumOfRange += largestValue;
    largestValue--;
  }

  const sumOfOriginalArray = array.reduce(
    (partialSum: any, a: any) => partialSum + a,
    0
  );

  let solution = sumOfRange - sumOfOriginalArray;

  console.log(solution);
};

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

missingNumber(nums);
