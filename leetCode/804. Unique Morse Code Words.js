
var uniqueMorseRepresentations = function(words) {
    let alphabetMaps = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
    "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-",
    "...-",".--","-..-","-.--","--.."]
    
    let encoded = words.map(word => {
        let newWord = ''
        for(let wd of word){
            let index = wd.charCodeAt() - 97
            newWord += alphabetMaps[index]
        }
        return newWord
    });
    return [...new Set(encoded)].length
};
