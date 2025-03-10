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

// Data and logging
console.log(`Total Interest: $${calculateLoanInterest(1000, 0.05, 3).toFixed(2)}`);
console.log(`Total Interest: $${calculateLoanInterest(5000, 0.07, 5).toFixed(2)}`);

// Task 6: Higher-Order Functions - Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

//Data and logging
console.log("Filtered Transactions:", filterHighValueTransactions(transactions, amount => amount > 1000));

// Task 7: Closures - Budget Tracker
//create a budget tracker that keeps track of balance
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${Math.abs(balance)}`;
    };
}

// Data and logging
let budget = createBudgetTracker();
console.log(budget(300)); // Expected: Current Balance: -$300
console.log(budget(200)); // Expected: Current Balance: -$500

// Task 8: Recursion in JavaScript - Business Growth Projection
//calculate revenue growth over 10 years
function calculateGrowth(years, revenue) {
    // Base case: when years reaches 10, stop recursing.
    if (years >= 10) {
        return revenue;
    } else {
        // Increase revenue by 5% for the next year
        revenue = revenue * 1.05;
        return calculateGrowth(years + 1, revenue);
    }
}

//Data and logging to 2 decimal places
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`);
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);
