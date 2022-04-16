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

  let largestValue;
};

missingNumber(nums);
