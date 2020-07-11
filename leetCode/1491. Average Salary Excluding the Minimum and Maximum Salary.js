/**
 * @param {number[]} salary
 * @return {number}
 */
 
 /*
Runtime: 60 ms, faster than 96.40% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
Memory Usage: 33.1 MB, less than 100.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
*/
var average = function(salary) {
    let len = salary.length - 2;
    let remove = Math.max(...salary) + Math.min(...salary)
    let total = salary.reduce((acc, el) => acc + el) - remove;
    return total / len;
};
