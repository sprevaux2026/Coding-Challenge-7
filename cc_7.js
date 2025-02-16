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

// Task 3: Arrow Function - Customer Loyalty Discount
//calulate discount based on years of loyalty
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = 0;
    if (years >= 5) {
        discountRate = 0.15;
    } else if (years >= 3) {
        discountRate = 0.10;
    } else {
        discountRate = 0.05;
    }
    let discountedPrice = amount - (amount * discountRate);
    return discountedPrice;
};

// Test Data and logging
console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6).toFixed(2)}`);
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2).toFixed(2)}`);

// Task 4: Parameters and Arguments - Product Shipping Cost Calculation
//calculate shipping cost based on weight, location and expedited shipping
function calculateShippingCost(weight, location, expedited = false) {
    let baseFee = 0;
    let perLb = 0;
    if (location === "USA") {
        baseFee = 5;
        perLb = 0.5;
    } else if (location === "Canada") {
        baseFee = 10;
        perLb = 0.7;
    }
    let shippingCost = baseFee + (perLb * weight);
    if (expedited) {
        shippingCost += 10;
    }
    return shippingCost;
}

// Test Data and logging
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`);
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false).toFixed(2)}`);

// Task 5: Returning Values - Business Loan Interest Calculation
//calculate interest based on principal, rate and years
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return interest;
}

// Test Data and logging
console.log(`Total Interest: $${calculateLoanInterest(1000, 0.05, 3).toFixed(2)}`);
console.log(`Total Interest: $${calculateLoanInterest(5000, 0.07, 5).toFixed(2)}`);
