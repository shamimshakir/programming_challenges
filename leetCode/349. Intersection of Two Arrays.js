/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let output = []
    nums1.forEach(elem => {
        if(nums2.includes(elem)){
            output.push(elem)
        }
    })
    return [...new Set(output)]
};
