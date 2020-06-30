/**
 * @param {string} s
 * @return {string}
 */

// Runtime: 68 ms	
// Memory: 34.2 MB	
var reverseWords = function(s) {
 return  s.split(' ').reverse().join(' ').trim().replace(/\s{2,}/g, ' ')
};


//solution two with filter
var reverseWords = function(s) {
    return s.split(' ').filter(el => !!el ).reverse().join(' ')
};
