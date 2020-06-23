
var reverse = function(x) {
    let newX = x;
    let rev = String(newX).split('').reverse().join('')
    if(rev.includes('-')){
        rev = rev.replace('-', '')
    }
    rev = Number(rev)
    if(x < 0){
        rev = rev * -1
    }
    if (rev < (Math.pow(2, 31) * -1) || rev > Math.pow(2, 31) - 1) {
        return 0;
    }
    return rev
};
