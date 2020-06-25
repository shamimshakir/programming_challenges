var Map = function() {
  this.collection = {};
  // change code below this line
  this.count = 0;
  this.add = function(key, val){
    this.collection[key] = val
    this.count++
  }
  this.remove = function(key){
    delete this.collection[key]
    this.count--
  }
  this.get = function(key){
    return this.collection[key]
  }
  this.has = function(item){
    if(this.collection[item]){
      return true
    }
    return false
  }
  this.values = function(){
    return Object.values(this.collection).toString()
  }
  this.clear = function(){
    for(let c in this.collection){
      delete this.collection[c]
    }
  }
  this.size = function(){
    return Object.values(this.collection).length
  }
  // change code above this line
};
