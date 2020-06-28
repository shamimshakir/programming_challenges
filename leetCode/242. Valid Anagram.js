/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};




// second solution with character map
var isAnagram = function(s, t) {
    if(s.length !== t.length)return false;
    let charMap = {}
    for(let char of s){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }

    for(let tc of t){
      if(!charMap[tc]){
        return false;
      }else{
        charMap[tc] -= 1;
      }
    }
    return true;
};
