/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function sayNumber(number){
      let said = "";
      let i = 0;
      while(i < number.length){
        let j = i;
        let count = 0;
        while(true){
          if(number[i] === number[j]){
            j++;
            count++;
          }else{
            break;
          }
        }
        said += count + number[i];
        i = j;
      }
      return said;
    }
    
    if(n === 1)return "1";
    
    /***** Looping  ****/
  
  // let said = sayNumber("1");
  // let k = 2;
  // while(k < n){
  //   said = sayNumber(said);
  //   k++;
  // }
  // return said;

    
    /**** Recursively ********/
   let counted = countAndSay(n - 1);
   return sayNumber(counted)
};
