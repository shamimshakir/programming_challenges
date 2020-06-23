
var twoSum = function(nums, target) {
    let indices = []
    nums.forEach((num, i) => {
        nums.forEach((num2, i2) => {
            if(num + num2 === target){
                if(i !== i2){
                    indices.push(i)
                }
            }
        })
    })
    return indices
};
