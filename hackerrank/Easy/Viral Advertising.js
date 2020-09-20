

function viralAdvertising(n) {
  let shared = 5;
  let liked = 0;
  let i = 1;
  while(i <= n){
    let half = Math.floor(shared / 2);
    let halfShared = half * 3;
    shared = halfShared;
    liked += half;
    i++;
  }
  return liked;
}
console.log(viralAdvertising(3)) //9
