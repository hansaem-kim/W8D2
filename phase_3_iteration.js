Array.prototype.bubbleSort = function() {
    let sorted = false;
    
    while (!sorted) {
        sorted = true;
        for (i=0; i<this.length; i++) {
            if (this[i]>this[i+1]) {
                sorted = false;
                dummy = this[i];
                this[i] = this[i+1];
                this[i+1] = dummy;
                // this[i], this[i+1] = this[i+1], this[i];
            }
        }

    }
    return this;
}

// console.log([1,3,7,8,4,3,2].bubbleSort())



String.prototype.substrings = function() {
    let substring = [];

    for (i=0; i<this.length; i++) {
        for (j=i+1; j<this.length+1; j++) {
            substring.push(this.slice(i,j))
        }
    }
    return substring;
}

console.log('hello'.substrings())

