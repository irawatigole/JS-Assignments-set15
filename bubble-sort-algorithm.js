// Body:

// Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// //write Your test cases here
// test('Write a JavaScript function to apply Bubble Sort algorithm',() => { 
//     expect(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])).toEqual( [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]);
//   });

   
    
    function bubble_Sort(arr){
    
        for (i=0; i < arr.length; i++){
            for (j=0; j < arr.length-i; j++){
                if (arr[j] > arr[j+1]){
                    swap(arr, j, j+1);
                }
            }
        }
            return arr.reverse();
        }
    function swap(arr, first_Index, second_Index){
        var temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
    }

    console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

   

