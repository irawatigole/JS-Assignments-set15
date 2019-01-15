// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.


// Sample Data :
// console.log(flatten([1, [2], [3, [4,5]]])); 
// [1, 2, 3, 4, 5]
function flatten(a, shallow,r){
  if(!r){ r = []}
   
if (shallow) {
  return r.concat.apply(r,a);

   }
      
   for(var i=0; i<a.length; i++){
        if(Array.isArray(a[i])) {
         
            flatten(a[i],shallow,r);
        }else{
       
            r.push(a[i]);
        }
    }
    return r;
}
    console.log(flatten([1, [2], [3, [4,5]]]))


    