function pageCount(n, p) {
    let pageArr = [];
    for(let i = 0; i <= n; i+=2){
      if(i != n){
        pageArr.push([i, i+1]);
      }else{
        pageArr.push([i]);
      }
    }
    
    let flips = [];
    
    for(let j = 0; j < pageArr.length; j++){
      if(pageArr[j].includes(p)){
        flips.push(j);
        break;
      }
    }
    
    let fromLast = 0;
    for(let k = pageArr.length - 1; k >= 0; k--){
      if(pageArr[k].includes(p)){
        break;
      }else{
        fromLast++;
      }
    }
    flips.push(fromLast)
    
    return Math.min(...flips);
}
console.log(pageCount(6,2))
