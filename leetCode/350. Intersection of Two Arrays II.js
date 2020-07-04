/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 // Runtime: 96 ms	
 // Memory: 34 MB	
var intersect = function(nums1, nums2) {
    let res = []
    nums1.forEach(num => {
        if(nums2.includes(num)){
            let i = nums2.indexOf(num)
            res.push(num)
            nums2.splice(i, 1)
        }
    })
    return res
};
