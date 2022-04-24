// var num1 = 43;
// var num2 = 23;

// console.log(num1 * num2);

// // num1 should be written like this - num1, it's not 1num.

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log ("Discount percentage is:" + discountPercent);

var displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% OFF");

// I learn calculation of price