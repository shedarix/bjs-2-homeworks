function getArrayParams(...arr) {
    if (arr.length === 0) return {};
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = Number((sum / arr.length).toFixed(2));
    return { min, max, avg };
}

// Вторая задача: Насадки для мясорубки
function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) evenSum += num;
        else oddSum += num;
    }
    return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let evenCount = 0;
    let evenSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
            evenCount++;
        }
    }
    return evenCount !== 0 ? evenSum / evenCount : 0;
}

// Третья задача: Агрегатор преобразований
function makeWork(arrOfArr, func) {
    let maxResult = -Infinity;
    for (let subArr of arrOfArr) {
        const result = func(...subArr);
        if (result > maxResult) maxResult = result;
    }
    return maxResult;
}