var numIdenticalPairs = function(nums) {
    let pairs = [];
    nums.forEach((num, i) =>{
      for(let j = i + 1; j < nums.length; j++){
        let num2 = nums[j];
        if(num === num2){
          pairs.push([i, j])
        }
      }
    })
    return pairs.length;
};
