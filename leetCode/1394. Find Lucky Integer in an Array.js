/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let numMap = new Map();
    
    arr.forEach(num => {
        if(numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1)
        }else{
            numMap.set(num, 1)
        }
    })

    let luckies = [];

    [...new Set(arr)].forEach(num => {
      if(numMap.get(num) === num){
        luckies.push(num)
      }
    })
    if(luckies.length >= 1){
        return luckies.sort((a,b) => a - b).pop();
    }else{
        return -1
    }
    
};
