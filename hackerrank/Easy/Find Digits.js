function findDigits(n) {
    
    let count = 0;
    
    let digits = String(n).split('');
    
    digits.forEach(digit => {
      if(n % Number(digit) === 0){
        count++;
      }
    })
    
    return count;
}

console.log(findDigits(1012));
