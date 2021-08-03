function range(start, end) {
    
    if (start === end) {
        return [end];
    }

    let smaller_arr = range(start+1, end);

    smaller_arr.unshift(start);
    return smaller_arr;

}

// console.log(range(2,40))

function sumRec(arr) {
    if (arr.length <= 1) {
        return arr[0];
    }

    return sumRec(arr.slice(1)) + arr[0]; 
}

console.log(sumRec([1,2,3,4,5,6]))

function expo