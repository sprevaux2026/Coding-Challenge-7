// Task 1: Function Declaration - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return total;
}

// Test Data and console logging
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`);
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`);

// Task 2: Function Expression - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return hourlyWage;
};

// Test Data and logging
console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40).toFixed(2)}`);
console.log(`Hourly Wage: $${calculateHourlyWage(75000, 35).toFixed(2)}`);
