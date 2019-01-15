// Body:

// Write a JavaScript function to count the occurrence of a substring in a string. 


// Test Data :
// count("The quick brown fox jumps over the lazy dog", 'the')
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1


// function count(a,b){
//   return a.toLowerCase().split(b).length -1;
//      }
//     console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
//     console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));

    function count(a,b){
      c = a.toLowerCase().split(' ');
      console.log(c)
      let count =0
      for (let i=0; i< c.length; i++){
        if (c[i] == b) {
          count += 1;
                  }
      }
      return count;
        }
        console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
    console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));


 
           