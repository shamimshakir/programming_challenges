
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let wordArr = A.split(' ').concat(B.split(' '))

    let uncommon = []
    
    wordArr.forEach(word => {
        let count = 0;
        wordArr.forEach(w => {
            if(w === word){
                count++;
            }
        })
        if(count === 1){
            uncommon.push(word)
        }
    })

    return uncommon
};
