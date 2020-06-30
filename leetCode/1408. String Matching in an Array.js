/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let output = []
    
    words.forEach((word) => {
        
        words.forEach(w => {
            if(word.length < w.length){
                if(w.includes(word)){
                    output.push(word)
                }
            }
        })
        
    })
    return [...new Set(output)]
};
