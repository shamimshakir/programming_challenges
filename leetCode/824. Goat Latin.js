/**
Runtime: 68 ms, faster than 96.38% of JavaScript online submissions for Goat Latin.
Memory Usage: 37.2 MB, less than 25.94% of JavaScript online submissions for Goat Latin.
**/
var toGoatLatin = function(S) {
    let goatLatin = [];
    let strArr = S.split(' ');
    
    for(let i = 0; i < strArr.length; i++){
        let newStr = '';
        if(!/[aeiou]/gi.test(strArr[i][0])){
            newStr = strArr[i].slice(1)+strArr[i][0]+'ma'
        }else{
          newStr = strArr[i]+'ma'
        }
        newStr += 'a'.repeat(i+1);
        goatLatin.push(newStr)
    }
    return goatLatin.join(' ');
};
