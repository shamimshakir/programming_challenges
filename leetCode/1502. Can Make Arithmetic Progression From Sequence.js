/**
 * @param {number[]} arr
 * @return {boolean}
 */
 
 // Runtime: 76 ms	
 // Memory: 35.4 MB	
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => b - a);
    let distance = arr[0] - arr[1]
    let check = true;
    for(let i = 0; i < arr.length -1; i++){
        if((arr[i]- arr[i + 1]) !== distance){
            check = false;
            break;
        }
    }
    return check;
};
