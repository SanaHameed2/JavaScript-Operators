// === Assignment Operator: Stocks ===
// Managing stock shares using assignment operators.
// We start with an initial number of shares,
// then simulate buying and selling by updating the shares with += and -=.
// Finally, calculate the total stock value by multiplying shares with current price.

// Engro Fertilizer stock
let engroFertilizerStock = 100;
engroFertilizerStock += 20;  // Bought 20 shares
engroFertilizerStock -= 10;  // Sold 10 shares
let engroPrice = 181.21;      // Current price per share (PKR)
let engroValue = engroFertilizerStock * engroPrice;
console.log("Engro Final Shares:", engroFertilizerStock);
console.log("Engro Value (PKR):", engroValue.toFixed(2));

// KAPCO stock
let kapcoStock = 50;
kapcoStock += 30;             // Bought 30 shares
kapcoStock -= 5;              // Sold 5 shares
let kapcoPrice = 31.97;       // Current price per share (PKR)
let kapcoValue = kapcoStock * kapcoPrice;
console.log("KAPCO Final Shares:", kapcoStock);
console.log("KAPCO Value (PKR):", kapcoValue.toFixed(2));


// Comparison Operator: Microeconomics
// Using comparison operators to help consumers decide between goods
// based on utility or price.

// Example 1: Comparing utility values of goods A and B
let utilityA = 80;
let utilityB = 65;
console.log("Preferred Good:", utilityA > utilityB ? "Good A" : "Good B");

// Example 2: Comparing prices of goods X and Y
let priceX = 120;
let priceY = 100;
console.log("Cheaper Good:", priceX < priceY ? "Good X" : "Good Y");


// Logical Operator: Conditional Sentences
// Demonstrating logical operators with real-life conditions
// to evaluate and print different outcomes.

// Example 1: Rain and umbrella condition
let isRaining = true;
let haveUmbrella = false;

if (isRaining && !haveUmbrella) {
  console.log("You will get wet.");
} else {
  console.log("You're safe!");
}

// Example 2: Weekend or finished work condition
let isWeekend = true;
let finishedWork = true;

if (isWeekend || finishedWork) {
  console.log("You can relax!");
} else {
  console.log("Keep working!");
}
