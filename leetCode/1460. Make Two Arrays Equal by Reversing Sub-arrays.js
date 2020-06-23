/**
Given two integer arrays of equal length target and arr.

In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

Return True if you can make arr equal to target, or False otherwise.
*/

var canBeEqual = function(target, arr) {
    target.sort((a,b) => a - b)
    arr.sort((a,b) => a - b)
    let check = true
    
    arr.forEach((item, i) => {
        if(item != target[i]){
           check = false;
        }
    })
    return check
};
