/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 
 // Runtime: 152 ms	
 // Memory: 41.4 MB
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  cpdomains.forEach(str => {
    let visitNum = Number(str.split(' ')[0]);
    let domains = str.split(' ')[1].split('.');
    domains.forEach((d,i) => {
      d = domains.slice(i).join('.')
      if(map.has(d)){
        map.set(d, map.get(d) + visitNum)
      }else{
        map.set(d, visitNum)
      }
    })
  });

  let output = [];
  map.forEach((value, key) => {
    let tempStr = `${value} ${key}`;
    output.push(tempStr)
  })
  return output;
};
