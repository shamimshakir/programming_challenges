/**
 * @param {number[][]} A
 * @return {number[][]}
 */
 
 // Runtime: 88 ms	
 // Memory: 37.3 MB
var flipAndInvertImage = function(A) {
    return A.map(elemAr => {
        return elemAr.map(num => {
            return num === 0 ? 1 : 0
        }).reverse();
    })
};

//One line
var flipAndInvertImage = function(A) {
    return A.map(elemAr => elemAr.map(num => num === 0 ? 1 : 0).reverse())
};
