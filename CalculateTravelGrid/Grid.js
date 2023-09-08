const { calculateExecutionTime } = require('../calculateTime');

function gridTraveler(m, n) {
    if (m && n == 1) return 1;
    if (m == 0 || n == 0) return 0;
    return gridTraveler(m, n - 1) + gridTraveler(m - 1, n);
};

function gridTravelerMemo(m, n, memo = {}) {
    const key = `${m},${n}`
    if (key in memo) return memo[key];
    if (m && n == 1) return 1;
    if (m == 0 || n == 0) return 0;
    memo[key] = gridTravelerMemo(m, n - 1, memo) + gridTravelerMemo(m - 1, n, memo);
    return memo[key];
};

// Execution time: 3184.6483000069857 milliseconds No Memo time = O(n^m+n), space = O(m + n)
calculateExecutionTime(gridTraveler, [16, 16]);
// Execution time: 0.34539999067783356 milliseconds with Memo time = O(m * n), space = O(m + n)
calculateExecutionTime(gridTravelerMemo, [16, 16]);