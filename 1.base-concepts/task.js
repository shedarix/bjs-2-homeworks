"use strict";

function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    if (discriminant === 0) {
        return [-b / (2 * a)];
    }
    const squareRootOfDiscriminant = Math.sqrt(discriminant);
    return [
        (-b + squareRootOfDiscriminant) / (2 * a),
        (-b - squareRootOfDiscriminant) / (2 * a)
    ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent /= 100;
    const monthlyPercentage = percent / 12;
    const loanPrincipal = amount - contribution;
    if (loanPrincipal <= 0 || countMonths <= 0) {
        return 0;
    }
    const paymentFactor = monthlyPercentage + monthlyPercentage / (Math.pow(1 + monthlyPercentage, countMonths) - 1);
    const monthlyPayment = loanPrincipal * paymentFactor;
    const totalPayment = monthlyPayment * countMonths;
  return Number(totalPayment.toFixed(2));
}