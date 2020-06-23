class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(item){
    if(!this.dictionary.hasOwnProperty(item)){
        this.dictionary[item] = item
        return true
    }
    return false;
  }

  remove(rItem){
    if(this.dictionary.hasOwnProperty(rItem)){
        delete this.dictionary[rItem]
        return true
    }
    return false
  }

  size(){
    return Object.keys(this.dictionary).length
  }
}

let set = new Set()
