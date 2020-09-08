/******
Runtime: 76 ms, faster than 83.46% of JavaScript online submissions for Matrix Diagonal Sum.
Memory Usage: 37.5 MB, less than 62.41% of JavaScript online submissions for Matrix Diagonal Sum.
*******/


var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
      sum += mat[i][i];
      mat[i][i] = 0;
    }
     
    for(let j = 0; j < mat.length; j++){
        sum += mat[j][mat.length-1 - j];
        mat[j][mat.length-1 - j] = 0;
    }
    return sum;
};
