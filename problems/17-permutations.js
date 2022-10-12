/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  let permutation = [];

  if (array.length === 0) {
    return [];
  }

  if (array.length === 1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    const currNum = array[i];
    let restOfNums = array.slice(0, i).concat(array.slice(i + 1));
    let restOfNumsPerm = permutations(restOfNums);

    for (let j = 0; j < restOfNumsPerm.length; j++) {
      let nextNums = restOfNumsPerm[j]
      const permutedArray = [currNum].concat(nextNums);
      permutation.push(permutedArray);
    }
  }

  return permutation;
};

// let nums = [1, 2, 3, 4, 5]
// let i = 0;
// let sliceConcat = nums.slice(1)
// console.log(sliceConcat)

console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
