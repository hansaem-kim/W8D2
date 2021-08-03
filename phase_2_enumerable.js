Array.prototype.myEach = function(callback) {
    for (let i=0; i<this.length; i++) {
        callback(this[i]);
    }

}


Array.prototype.myMap = function(callback) {
    let newArray = [];
    for (let i=0; i<this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray
}

// const callback = (arg) => {
//     return arg*2;
// }

// console.log([1,2,3,4,5].myMap(callback));


Array.prototype.myReduce = function(callback, initialValue) {
    let newArr = this

    if (initialValue === undefined) {
        initialValue = this[0];
        newArr = this.slice(1);
    }

    let acc = initialValue;
    newArr.myEach(arg => acc = callback(acc, arg));

    return acc;
}

const x = [1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
});

const y = [1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
}, 25);


