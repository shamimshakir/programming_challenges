/**
 * @param {string} s
 * @return {number}
 */
 
 // Runtime: 132 ms	
 // Memory: 42.6 MB	
var firstUniqChar = function(s) {
    s = s.split('');
    let charMap = new Map();

    s.forEach(letter => {
      if(charMap.has(letter)){
        charMap.set(letter, charMap.get(letter) + 1)
      }else{
        charMap.set(letter, 1)
      }
    })
    for(let i = 0; i < s.length; i++){
      if(charMap.get(s[i]) === 1){
        return i;
      }
    }
    return -1;
};
