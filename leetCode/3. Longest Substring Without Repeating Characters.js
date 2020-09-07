
/**
Runtime: 476 ms, faster than 15.58% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 43.5 MB, less than 25.04% of JavaScript online submissions for Longest Substring Without Repeating Characters.
**/

var lengthOfLongestSubstring = function(s) {
    let length = 0;
    for(let i = 0; i < s.length; i++){
      let subs = [];
      for(let j = i; j < s.length; j++){
        if(subs.includes(s[j])){
          break;
        }else{
          subs.push(s[j])
        }
      }
      if(subs.length > length){
        length= subs.length;
      }
    }
    return length;
};
