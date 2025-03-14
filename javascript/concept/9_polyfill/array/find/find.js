const numbers = [1, 2, 3, 4, 5];
const toFind = 4
const found = (no) =>{
    return no === toFind
};
Array.prototype.find = function(callbackFunc){
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof callbackFunc !== 'function') {
      throw new TypeError('callback must be a function');
    }
    for (let i = 0; i < this.length; i++) {
      if (callbackFunc(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
}

console.log(numbers.find(found)) //  Output: 4