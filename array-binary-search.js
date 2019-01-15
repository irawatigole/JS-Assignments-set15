// Body:

// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value. 
// Sample array : 
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output : 
// 1)binarySearch(items, 1)); 
//    output: 0 
// 2)binarySearch(items, 5));
//    output: 4

//    //write Your test cases here
//  test('it should return the text "element not present" if the given second input value is not in the given input array',() => { 
//     expect(binarySearch([1,2,3,4,5],8)).toBe("element not present");
//   });
//  //write Your test cases here
//   test('it should return the index of the second input element present in the given input array',() => { 
//     expect(binarySearch([1,2,3,4,5,6], 1)).toBe(0);
//   });
//  //write Your test cases here
//   test('it should return the text "empty array" if the given input array is empty',() => { 
//     expect(binarySearch([], 5)).toBe('empty array');
//   });

  function binarySearch(a,b){
    if (a.length == 0) {
      return 'empty array'
    }
    var firstIndex  = 0,
        lastIndex   = a.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(a[middleIndex] != b && firstIndex <= lastIndex) {
    
       if (b < a[middleIndex]) {
         lastIndex = middleIndex - 1;
        } 
      else if (b > a[middleIndex]){
          firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
 return (a[middleIndex] != b) ? 'element not present' : middleIndex;
}
console.log(binarySearch([1,2,3,4,5],8))
console.log(binarySearch([1,2,3,4,5,6], 1))
console.log(binarySearch([], 5))
console.log(binarySearch([1,2,3,4,5,6,7],4))