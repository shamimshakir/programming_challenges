/**
 * @param {string[]} strs
 * @return {string}
 */
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
