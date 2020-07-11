/**
 * @param {string[]} A
 * @return {string[]}
 */
 
 /*
  Runtime: 88 ms, faster than 67.59% of JavaScript online submissions for Find Common Characters.
  Memory Usage: 37.1 MB, less than 95.96% of JavaScript online submissions for Find Common Characters.
*/
var commonChars = function(A) {
    let output = [];
    let firstOne = [...A[0].split('')];
    
    firstOne.forEach(letter => {
      if(A.every(item => item.includes(letter))){
        output.push(letter)
        A = A.map(e => e.replace(letter, ''))
      }
    })
    return output;
};
