class Sorter {
  constructor() {
    // your implementation
   this.MyArray = [];
      
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
    function comparator(a, b) {
      if (a < b ) {
        return -1;
      }
      if (a > b ) {
        return 1;
      }
        return 0;
    }
indices.sort(comparator);
testArray = [];
for (i=0;i<=indices.length;i++) {
testArray[i] = this.MyArray[indices[i]];
}
testArray.sort(comparator);
for (i=0;i<=indices.length;i++) {
  this.MyArray[indices[i]]=testArray[i];
  }
  return this.MyArray;

    //for (i=this.MyArray.length;i>=0;i--) {

}

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;