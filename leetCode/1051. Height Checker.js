/**
 * @param {number[]} heights
 * @return {number}
 */
 
 // Runtime: 84 ms	
 // Memory: 34.7 MB
var heightChecker = function(heights) {
    let unorderd = [...heights];
    heights.sort((a,b) => a - b);
    let count = 0;
    unorderd.forEach((height, index) => {
        if(heights[index] !== height){
            count++;
        }
    })
    return count
};
