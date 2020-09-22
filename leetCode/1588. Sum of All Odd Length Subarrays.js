/*
Runtime: 84 ms, faster than 57.14% of JavaScript online submissions for Sum of All Odd Length Subarrays.
Memory Usage: 42.5 MB, less than 18.75% of JavaScript online submissions for Sum of All Odd Length Subarrays.
*/

var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    
    let i = 0;
    while(i < arr.length){
      
      let j = i;
      
      let start = 0;
      
      while(j < arr.length){
        let arrSlice = arr.slice(start,j+1);
        
        sum += arrSlice.reduce((a,b) => a + b);
        
        start++;
        j++;
      }  
      
      i+=2;
    }
    
    return sum;
};
