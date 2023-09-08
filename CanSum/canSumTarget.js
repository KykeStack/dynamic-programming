const { calculateExecutionTime } = require('../calculateTime');

function canSum(targetSum, numbers) {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (const num of numbers) {
        if (canSum(targetSum - num, numbers,) === true) return true;
    }
    return false;
};

function canSumMemo(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (const num of numbers) {
        if (canSumMemo(targetSum - num, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        } 
    }
    memo[targetSum] = false;
    return false;
};

// console.log(canSum(7, [2, 3])); // true
// console.log(canSum(7, [5, 4, 3, 7])); // true
// console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(7, [2, 4])); // false

// Execution time: 17705.718400001526 milliseconds -- Complexity:  time = O(n^m) space=O(m)
calculateExecutionTime(canSum, [300, [7, 14]]); // false
// Execution time: 0.22760000824928284 milliseconds -- Complexity:  time = O(n^m) space=O(m)
calculateExecutionTime(canSumMemo, [300, [7, 14]]); // false


