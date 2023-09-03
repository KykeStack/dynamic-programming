const { calculateExecutionTime } = require('../calculateTime');

const fibV1 = (number) => {
    let previusNumber = 0;
    let newNumber = 1;
    for (let index = 0; index < number; index++) {
        const save = newNumber;
        newNumber = previusNumber + newNumber;
        previusNumber = save;
    };
    console.log(previusNumber)
};

const fibV2 = (number, memo = {}) => {
    if (number in memo) return memo[number];
    if (number <= 2) return 1;
    memo[number] = fibV2(number - 1, memo) + fibV2(number - 2, memo);
    return memo[number];
};

function fibV3(n) {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5);
    const psi = (1 - sqrt5);
    
    const numerator1 = Math.pow(phi, n) - Math.pow(psi, n);
    const denominator = Math.pow(2, n) * sqrt5;
    
    const result = numerator1 / denominator;
    console.log(`F${n} = ${result}`);
    return ;
}

// Execution time: 6.258699999190867 milliseconds
calculateExecutionTime(fibV1, [500]);

// Execution time: 0.28200000058859587 milliseconds
calculateExecutionTime(fibV3, [500]);

// Execution time: 0.19070000015199184 milliseconds
calculateExecutionTime(fibV2, [500]);