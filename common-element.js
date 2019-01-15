
// Body:

// Given three arrays sorted in non-decreasing order, print all common elements in these arrays.
// Examples:

// input1 = [1, 5, 10, 20, 40, 80]

// input2 = [6, 7, 20, 80, 100]

// input3 = [3, 4, 15, 20, 30, 70, 80, 120]

// Output: [20, 80]


// //write Your test cases here
// test('print all common elements in these arrays.',() => { 
//     expect(commonInThree([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120])).toEqual([20, 80]);
//   });
function commonInThree(a,b,c){
let result = [];
result.push(a,b,c)
var currentValues = {};
var commonValues = {};
for (var i = result[0].length-1; i >=0; i--){//Iterating backwards for efficiency
  currentValues[result[0][i]] = 1; //Doesn't really matter what we set it to
}
for (var i = result.length-1; i>0; i--){
  var currentArray = result[i];
  for (var j = currentArray.length-1; j >=0; j--){
    if (currentArray[j] in currentValues){
      commonValues[currentArray[j]] = 1; //Once again, the `1` doesn't matter
    }
  }
  currentValues = commonValues;
  commonValues = {};
}
return Object.keys(currentValues).map(function(value){
  return parseInt(value);
});
}
    console.log(commonInThree([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120]))



 