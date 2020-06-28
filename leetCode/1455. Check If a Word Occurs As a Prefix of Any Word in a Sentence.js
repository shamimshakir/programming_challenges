/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let serchLen = searchWord.length;
    let sen = sentence.split(' ')
    for(let i = 0; i < sen.length; i++){
      let word = sen[i]
      
      if(word.length >= serchLen){
        let sub = word.substr(0, serchLen)
        if(searchWord === sub){
          return i+1;
        }
      }
    }
    return -1
};
