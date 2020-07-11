/**
 * @param {number[]} A
 * @return {number}
 */
 
  //Runtime: 724 ms
  //Memory Usage: 39 MB
  
var repeatedNTimes = function(A) {
    let repeat = [];
    A.forEach((el, i) => {
        if(A.indexOf(el) !== i){
            repeat.push(el)
        }
    })
    return repeat[0];
};


//Runtime: 108 ms
//Memory Usage: 41.6 MB
var repeatedNTimes = function(A) {
    let map = new Map();
    A.forEach(el => {
      if(map.has(el)){
        map.set(el, map.get(el) + 1);
      }else{
        map.set(el, 1) 
      }
    })
    for(var [key, val] of map) {
      if(val > 1)return key;
    }
};
