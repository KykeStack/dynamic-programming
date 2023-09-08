const { calculateExecutionTime } = require('../calculateTime');

function howSum(targetSum, numbers) {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) return [...remainderResult, num];
    }
    return null;
};

function howSumMemo(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (const num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSumMemo(remainder, numbers, memo);
        if (remainderResult !== null){
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];  
        } 
    }
    memo[targetSum] = null;
    return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 4, 3, 7])); // [4, 3]
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSumMemo(7, [2, 4])); // null
console.log(howSumMemo(300, [7, 14])); // null


// Execution time: 17181.78149998188 milliseconds -- Complexity:  time = O(n^m^2) space=O(m^2)
// calculateExecutionTime(howSum, [300, [7, 14]]); // null
// Execution time: 0.1777999997138977 milliseconds -- Complexity:  time = O(n*m^2) space=O(m^2)
calculateExecutionTime(howSumMemo, [300, [7, 14]]); // null


