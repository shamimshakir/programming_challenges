function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };

  this.enqueue = function(itemArr){
    if(this.isEmpty()){
      this.collection.push(itemArr)
    }else{
      let added = false
      for(let i = 0; i < this.collection.length; i++){
        if(itemArr[1] < this.collection[i][1]){
          this.collection.splice(i, 0, itemArr)
          added = true
          break;
        }
      }
      if(!added){
        this.collection.push(itemArr)
      }
    }
  }
  this.dequeue = function(){
    return this.collection.shift()[0]
  }
  this.size = function(){
    return this.collection.length
  }
  this.isEmpty = function(){
    return this.collection.length === 0
  }
  this.front = function(){
    return this.collection[0]
  }
}
