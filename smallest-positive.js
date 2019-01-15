// find the smallest positive integer value that cannot be represented as sum of any subset of a given array

// You have given a sorted array (sorted in non-decreasing order) of positive numbers, find the smallest positive integer value that cannot be represented as sum of elements of any subset of given set

// Examples:

// Input: [1, 3, 6, 10, 11, 15];

// Output: 2

// //write Your test cases here
// test('find the smallest positive integer value that cannot be represented as sum of any subset of a given array',() => { 
//     expect(notSubsetOfSum(1, 3, 6, 10, 11, 15])).toBe(2);
//   });

  function notSubsetOfSum(arr){
    let sum = 1;
    for (let i=0; i<arr.length; i++){
      if(arr[i] <= sum) {
        sum += arr[i];
      }
    }
 return sum;
}
console.log(notSubsetOfSum([1, 3, 6, 10, 11, 15]));
console.log(notSubsetOfSum([1,1,1,1]))
console.log(notSubsetOfSum([1,1,3,4]))


