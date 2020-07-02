/**
 * @param {string[]} strs
 * @return {string}
 */

// RumTime: 92 ms	
// Memory: 39.5 MB	
var longestCommonPrefix = function(strs) {
    if(strs.length === 0)return '';
    let common = ''
    if(strs.length === 1){
      return strs[0];
    }else{
      for(let i = 0; i < strs[0].length; i++){
        let w = strs[0][i]
        if(w === strs[1][i]){
          common += w;
        }else{
          break;
        }
      }
    }
    for(let i = 2; i < strs.length; i++){
      let str = strs[i];
      let tempCommon = '';
      for(let j = 0; j < str.length; j++){
        let w = str[j]
        if(w === common[j]){
          tempCommon += w;
        }else{
          break;
        }
      }
      common = tempCommon
    }
    return common;
};






// Second Solutin with array every method 
// RunTime: 72 ms	
// Memory: 36.5 MB	
var longestCommonPrefix = function(strs) {
    if(strs.length === 0)return '';
    if(strs.length === 1)return strs[0];

    let common = ''
    for(let i = 0; i < strs[0].length; i++){
      let char = strs[0][i];
      if(strs.every(wrd => wrd[i] === char)){
        common += char;
      }else{
        return common;
      }
    }
    return common;
};
