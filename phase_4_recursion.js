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

// console.log(sumRec([1,2,3,4,5,6]))

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }

    return base * exponent(base, exp-1);
}

// console.log(exponent(3,2));

function fibonacci(n) {
    if (n===1) {
        return [1]
    }

    if (n===2) {
        return [1,1]
    }

    let fibo = fibonacci(n-1)

    fibo.push(fibo[n-2] + fibo[n-3])

    return fibo
}

// console.log(fibonacci(6));

function deepDup(arr) {
    let newArr = [];
    arr.forEach(el => Array.isArray(el)? newArr.push(deepDup(el)) : newArr.push(el));
    return newArr;
}

