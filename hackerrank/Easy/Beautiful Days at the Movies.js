// Beautiful Days at the Movies

function beautifulDays(i, j, k) {

  let days = [];
  
  let dy = i;
  while(dy <= j){
    days.push(dy);
    dy++;
  }
  
  let count = 0;
  
  days.forEach(day => {
    let reversed = Number(String(day).split('').reverse().join(''));
    
    let range = Math.abs(day - reversed);
    
    let divised = range / k;
    if(Number.isInteger(divised)){
      count++;
    }
  })
  
  return count;
}
