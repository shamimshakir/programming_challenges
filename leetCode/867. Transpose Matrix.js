/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let transMatrix = [];

  A.forEach(elem => {

    elem.forEach((el, i) => {

      if(transMatrix[i]){
        transMatrix[i].push(el)
      }else{
        transMatrix[i] = []
        transMatrix[i].push(el)
      }
      
    })

  });

  return transMatrix
};
