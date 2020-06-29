/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let dig = String(BigInt(digits.join(''))+BigInt(1))
    let digAr = dig.split('')
    return digAr.map(num => Number(num))
};
