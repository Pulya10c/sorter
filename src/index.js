class Sorter {
  constructor() {
    // your implementation
   this.MyArray = [];
   this.mycomp = function (left, right) { return  left - right}; 
   
  }

  add(element) {
    // your implementation
    return this.MyArray.push(element);
  }

  at(index) {
    // your implementation
    return this.MyArray[index];
  }

  get length() {
    // your implementation
    return this.MyArray.length;
  }

  toArray() {
    // your implementation
    return this.MyArray;
  }

  sort(indices) {
    // your implementation
  let testArray = [];    
    if (indices.length>0) {
    
  for (let i=0;i<indices.length;i++) {
  testArray[i] = this.MyArray[indices[i]];
}  
indices.sort((left, right) => left-right);
testArray.sort(this.mycomp);
for (let i=0;i<indices.length;i++) {
  this.MyArray[indices[i]]=testArray[i];
  }
}
  return this.MyArray;

    
}

  

  setComparator(compareFunction) {
    // your implementation
    this.mycomp = compareFunction;
  }
}

module.exports = Sorter;