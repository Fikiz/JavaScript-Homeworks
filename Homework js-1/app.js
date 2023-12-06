let numPhone = 30;
let price = 119.95;
let tax = 5 / 100;

let priceWithoutTax = numPhone * price;
let fullPrice = priceWithoutTax * tax;

console.log(`The total price of ${numPhone} phones is ${fullPrice} (including 5% tax)`);