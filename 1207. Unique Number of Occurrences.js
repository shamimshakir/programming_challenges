/**
 * @param {number[]} arr
 * @return {boolean}
 */
 
 /*
Runtime: 68 ms, faster than 73.86% of JavaScript online submissions for Unique Number of Occurrences.
Memory Usage: 33.8 MB, less than 93.40% of JavaScript online submissions for Unique Number of Occurrences.
*/
var uniqueOccurrences = function(arr) {
    let map = new Map();
    arr.forEach(num => {
          if(map.has(num)){
                map.set(num, map.get(num) + 1)
          }else{
                map.set(num, 1)
          }
    })
    let values = Array.from(map.values())
    return values.length === [...new Set(values)].length
};
