/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length === 1) return false;
  let numMap = new Map();
  deck.forEach(n => {
    if(numMap.has(n)){
      numMap.set(n, numMap.get(n) + 1);
    }else{
      numMap.set(n, 1);
    }
  })
  let values = [...numMap.values()];
  let max = Math.max(...values);

  for(let i = 2; i <= max; i++){
    if(values.every(v => v % i === 0))return true;
  }
  return false;
};
