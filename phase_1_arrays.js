Array.prototype.uniq = function() {
    let arr=[];
    
    for (let i=0; i<(this.length-1); i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

// console.log([2,3,4,1,2,8,9,4].uniq())


Array.prototype.twoSum = function() {
    let pairs = [];
    let pair_key = {};

    for (let i=0; i<(this.length); i++) {
        if (this[i] in pair_key) {
            continue;
        }
        pair_key[this[i]] = i
        if (-1*this[i] in pair_key) {
            pairs.push([i, pair_key[-1*this[i]]])
        } 
    }
    return pairs;
}

// console.log([2,3,4,-4,2,8,-2,4].twoSum())


Array.prototype.transpose = function() {
    let transposed = [];

    for (i=0; i<this.length; i++) {
        let new_row = [];
        for (j=0; j<this.length; j++) {
            new_row.push(this[j][i]);
        }
        transposed.push(new_row);
    }
    return transposed;
}

// console.log([[2,3], [1,2]].transpose())