// You are given an unsorted array of numbers and k, you need to find the kth largest number in the array.For example if given array is [10, 20, 30, 50, 40] and k = 3 then your program should return 30 because 30 is the 3rd largest number in array
// //write Your test cases here
// test('you need to find the kth largest number in the array.',() => { 
//     expect(kthLargest([10, 20, 30, 50, 40])).toBe(30);
//   });


    function kthLargest(arr,large){
        var x = 0, y = 0, z = 0,temp = 0,  flag = false,  result = false;            
        while(x < arr.length){
            y = x + 1; 
            if(y < arr.length){
                for(z = y; z < arr.length; z++){    
                    if(arr[x] < arr[z]){
                        temp = arr[z];
                        arr[z] = arr[x];
                        arr[x] = temp;
                        flag = true; 
                    }else{
                        continue;
                    }	
                }					
            }      
            if(flag){
                flag = false;
            }else{
                x++; 
                if(x === large){ 
                    result = true;
                }	
            }
            if(result){
                break;
            }
        }
        return (arr[(large - 1)]);	
    }
    console.log(kthLargest([10, 50, 30, 40, 60, 20],3));   
    console.log((kthLargest([25, 40, 35, 15, 86, 55],4)))


function findKthLargest(arr, k) {
    if (k < 1 || arr == null) {
        return 0;
    }
    return getKth(arr.length - k +1, arr, 0, arr.length - 1);
   
}
 
function getKth(k, arr, start, end) {
 
    var pivot = arr[end];
 
    var left = start;
    var right = end;
 
    while (true) {
 
        while (arr[left] < pivot && left < right) {
            left++;
        }
 
        while (arr[right] >= pivot && right > left) {
            right--;
        }
 
        if (left == right) {
            break;
        }
 
        swap(arr, left, right);
    }
 
    swap(arr, left, end);
 
    if (k == left + 1) {
        return pivot;
    } else if (k < left + 1) {
        return getKth(k, arr, start, left - 1);
    } else {
        return getKth(k, arr, left + 1, end);
    }
}
 
function swap(arr, n1, n2) {
    var tmp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = tmp;
}

console.log(findKthLargest([10,20,30,50,40],3));