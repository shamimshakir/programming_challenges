/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 
 // Runtime: 64 ms	
 // Memory: 33.6 MB	
var busyStudent = function(startTime, endTime, queryTime) {
    let busystd = 0;
    if(startTime.length == 0){
        return busystd;
    }
    startTime.forEach((sTime, index) => {
        if(sTime <= queryTime && queryTime <= endTime[index]){
            busystd++;
        }
    })
    return busystd;
};
