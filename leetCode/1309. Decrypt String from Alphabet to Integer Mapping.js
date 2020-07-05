/**
 * @param {string} s
 * @return {string}
 */
 
 // Runtime: 84 ms	
 // Memory: 34.4 MB	
var freqAlphabets = function(s) {
    let sAr = [];
    s = s.split('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let i = 0;
    while(s.length){
        if(s[i+2] === '#'){
            sAr.push(s.splice(i,3))
        }else{
            sAr.push(s.splice(i,1))
        }
    }
    return sAr.map(el => {
      let tempEl = el.join('').replace(/#/g, '');
      return alphabet[Number(tempEl - 1)]
    }).join('')
};
