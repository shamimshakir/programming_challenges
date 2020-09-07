/**
Runtime: 88 ms, faster than 45.72% of JavaScript online submissions for Destination City.
Memory Usage: 38.9 MB, less than 53.60% of JavaScript online submissions for Destination City.
**/


var destCity = function(paths) {
    let desCity = '';
    paths.forEach(path => {
      let hasStart = false;
      paths.forEach(path2 => {
        if(path2[0] == path[1]){
          hasStart = true
        }
      })
      if(!hasStart){
        desCity = path[1];
      }
    })
    return desCity;
};
