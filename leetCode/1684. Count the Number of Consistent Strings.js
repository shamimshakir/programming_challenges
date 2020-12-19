/********************
Runtime: 116 ms, faster than 77.45% of JavaScript online submissions for Count the Number of Consistent Strings.
Memory Usage: 47.8 MB, less than 79.23% of JavaScript online submissions for Count the Number of Consistent Strings.
*********************/


/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    return words.reduce((acc, word) => {
        let check = true;
        for(let w of word){
            if(!allowed.includes(w)){
                check = false;
            }
        }
        if(check){
            acc++;
        }
        return acc;
    }, 0);
};
