/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    let output = []
    
    arr.forEach((elem, index) => {
        
        let greatInRight = 0;
        for(let i = index+1; i < arr.length; i++){
            if(arr[i] > greatInRight){
                greatInRight = arr[i]
            }
        }
        if(greatInRight === 0){
            output.push(-1)
        }else{
            output.push(greatInRight)
        }
        
    })
    
    return output
    
};
