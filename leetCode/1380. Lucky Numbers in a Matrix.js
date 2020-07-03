/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// Runtime: 108 ms	
// Memory: 35.5 MB	
var luckyNumbers  = function(matrix) {
  let luckies = [];
  matrix.forEach(itemAr => {
    let min = Math.min(...itemAr);
    let index = itemAr.indexOf(min)
    if(matrix.every(el => el[index] <= min)){
      luckies.push(min)
    }
  })
  return luckies
};
