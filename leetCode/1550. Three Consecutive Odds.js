/**
Runtime: 72 ms, faster than 82.14% of JavaScript online submissions for Three Consecutive Odds.
Memory Usage: 36.9 MB, less than 27.44% of JavaScript online submissions for Three Consecutive Odds.
**/

var threeConsecutiveOdds = function(arr) {
    for(let i = 0; i < arr.length - 2; i++){
        if(arr[i] % 2 != 0){
            if(arr[i + 1] % 2 != 0){
                if(arr[i + 2] % 2 != 0){
                    return true
                }
            }
        }
    }
    return false;
};
