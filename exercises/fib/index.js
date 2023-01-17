// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// O(n)
function fib(n) {
    let fibArr = [0,1]
    for(let i=2; i <= n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2])
    }
    return fibArr[n]
}

// memoization to reduce run time (generic)
function memoize(fn) {
    const cache = {}
    return function (...args) {
        // checking if this function was called with this arg before, and if so, immediately return that value in cache obj
        if (cache[args]) {
            return cache[args]
        }
        // if never been called, call SlowFn again and store the result in cache
        const result = fn.apply(this, args)
        cache[args] = result
        
        return result
    }
}

// O(2^n) - Exponential Time (worst)
function slowFib(n) {
    if (n < 2) {
        return n
    }

    return fibRecursive(n - 1) + fibRecursive(n - 2)
}

const fibRecursive = memoize(slowFib)

module.exports = fib;
