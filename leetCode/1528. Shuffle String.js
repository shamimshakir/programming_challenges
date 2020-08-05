/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 
 //Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Shuffle String.
//Memory Usage: 39 MB, less than 16.09% of JavaScript online submissions for Shuffle String.


var restoreString = function(s, indices) {
    let strAr = [];
    for(let i = 0; i < s.length; i++){
      strAr.push('s')
    }
    for(let j = 0; j < s.length; j++){
      strAr[indices[j]] = s[j]
    }
    return strAr.join('')
};
