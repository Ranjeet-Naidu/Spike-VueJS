/**
 * Swap element indexes in array
 */
export function swapIndex(arr, indexFrom, indexTo) {
  arr.splice(indexTo, 0, arr.splice(indexFrom, 1)[0]);
  return arr;
}

/**
 * Insert array into another array a by index
 * ([1, 2, 3], [A, B, C], 1) returns ([1, A, B, C, 2, 3])
 */
export function insertArrayByIndex(arr, arrayToInsert, insertAt) {
  let modified;

  if (arr.length <= insertAt) {
    modified = [...arr, ...arrayToInsert];
  } else {
    modified = arr.reduce((acc, curr, index) => {
      if (index === insertAt) {
        arrayToInsert.forEach(item => {
          acc.push(item);
        });
      }

      acc.push(curr);
      return acc;
    }, []);
  }

  return modified;
}

/**
 * Removes elements from array
 * ([1, 2, 3, 4, 5]], [1, 3]) returns [1, 3, 5]
 */
export function removeElementsArray(arr, toRemove) {
  return arr.filter((item, index) => toRemove.indexOf(index) === -1);
}
