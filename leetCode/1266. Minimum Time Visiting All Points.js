/**
 * @param {number[][]} points
 * @return {number}
 */
 
 // Runtime: 104 ms	
 // Memory: 37.3 MB	
var minTimeToVisitAllPoints = function(points) {
  
    let seconds = 0;
    
    for(let i = 0; i < points.length - 1; i++){
      let point = points[i];
      let nextPoint = points[i + 1];
      
      while((point[0] !== nextPoint[0]) || point[1] !== nextPoint[1]){
        if(point[0] < nextPoint[0]){
          point[0]++;
        }
        if(point[1] < nextPoint[1]){
          point[1]++;
        }
        if(point[0] > nextPoint[0]){
          point[0]--;
        }
        if(point[1] > nextPoint[1]){
          point[1]--;
        }
        seconds++;
      }
    }
    return seconds;
};
