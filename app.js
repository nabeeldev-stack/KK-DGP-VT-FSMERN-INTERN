const var1 = require("./var1");
const loginsystem = require("./loginsystem");
const product = require("./product");
console.log (var1);
console.log(loginsystem.login("a@gmail.com","1234"));

//Mains
console.log("Search product by name: ", product.searchProductbyName("Laptop"));
console.log("Search product by price: ", product.searchProductbyPrice(5000));
console.log("Display products above 5000: ", product.above5000());
console.log("Display products below 5000: ", product.below5000()); 
console.log("Count total products: ", product.countproducts());
console.log("Most expensive product: ", product.expensiveproduct());
console.log("Cheapest product: ", product.cheapestproduct());
console.log("Product report: ", product.productreport());

// Adding a new product
product.addproduct({ name: "Smartwatch", price: 12000, quality: "Good" });
console.log("After adding Smartwatch:", product.productreport());

// Updating price
product.updateproductprice("mobile", 35000);
console.log("After updating Mobile price:", product.searchProductbyName("Mobile"));

// Deleting product
product.deleteproduct("headphones");
console.log("After deleting Headphones:", product.productreport());