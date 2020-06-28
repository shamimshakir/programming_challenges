
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




/// Solution Two with hashmap
 var uncommonFromSentences = function(A, B) {
    let wordArr = A.split(' ').concat(B.split(' '))
  
    let uncommon = []
    
    let wordMap = new Map()

    wordArr.forEach(word => {
      if(wordMap.has(word)){
        wordMap.set(word, wordMap.get(word)+1)
      }else{
        wordMap.set(word, 1)
      }
    });
    
    wordMap.forEach((value, key) => {
      if(value === 1){
        uncommon.push(key)
      }
    })

    return uncommon
};
