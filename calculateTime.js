function calculateExecutionTime(func,  parameters) {
    const startTime = performance.now();
    func(...parameters);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime} milliseconds`);
}

module.exports = {
    calculateExecutionTime
}