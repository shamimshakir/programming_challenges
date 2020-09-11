/**
Runtime: 172 ms, faster than 45.52% of JavaScript online submissions for Minimum Absolute Difference.
Memory Usage: 49.9 MB, less than 24.26% of JavaScript online submissions for Minimum Absolute Difference.
***********/

var minimumAbsDifference = function(arr) {
    let sortArr = arr.sort((a,b) => a - b);
    let diffs = []
    for(let i = 0; i < arr.length - 1; i++){
        let dis = arr[i+1] - arr[i];
        diffs.push(Math.abs(dis));
    }
    let minDis = Math.min(...diffs);
    
    let result = [];
    for(let j = 0; j < sortArr.length - 1; j++){
      let dis = arr[j+1] - arr[j];
      if(dis == minDis){
        result.push([arr[j], arr[j+1]])
      }
    }
    return result;
};
