/**
 * @param {string} S
 * @return {string}
 */
 
 // Runtime: 80 ms	
 // Memory: 38.3 MB	
var removeOuterParentheses = function(S) {
    let sAr = [];
    S = S.split('');
    let pointer = 0;
    let i = 0;
    while(S.length){
        for(let i = 0; i < S.length; i++){
            if(S[i] === '('){
                pointer++;
            }
            if(S[i] === ')'){
                pointer--;
            }
            if(pointer === 0){
                let sp = S.splice(0, i+1).join('');
                sAr.push(sp.slice(1,-1));
                break;
            }
        }
    }
    return sAr.join('');
};
