let products = [
    {id :1,name: "laptop", price: 78000, quality: "high"},
    {id :2,name: "tab", price: 7800, quality: "medium"},
    {id :3,name: "mobile", price: 58000, quality: "high"},
    {id :4,name: "watch", price: 8000, quality: "low"},
    {id :5,name: "headphone", price: 4000, quality: "medium"},
    {id :6,name: "speaker", price: 3000, quality: "low"},
    {id :7,name: "camera", price: 15000, quality: "high"},
    {id :8,name: "printer", price: 12000, quality: "medium"},
    {id :9,name: "monitor", price: 20000, quality: "high"},
    {id :10,name: "keyboard", price: 2000, quality: "medium"},
];

//1. Search product by name
function searchProductbyName(name){
    return products.filter(p => p.name.toLowerCase() === name.toLowerCase());
}

//2. Search product by price 
function searchProductbyPrice(price){
    return products.filter(p => p.price === price);
}

//3. Display products above 5000
function above5000(){
    return products.filter(p => p.price > 5000);
}

//4. Dispaly products below 5000
function below5000(){
    return products.filter(p => p.price < 5000);
}

//5. Count total products
function countproducts(){
    return products.length;
}

//6. Most expensive product
function expensiveproduct(){
    return products.reduce((max, p) => p.price > max.price ? p : max, products[0]);
}

//7. Cheapest product
function cheapestproduct (){
    return products.reduce((min, p) => p.price < min.price ? p : min, products[0]);
}

//8. Add new product
function addproduct(newpro){
    products.push(newpro);
}

//9. Delete product by name
function deleteproduct(name){
    products = products.filter(p => p.name.toLowerCase() !== name.toLowerCase());
}

//10. Update product price by name
function updateproductprice(name, newprice){
    let product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (product) product.price = newprice;
}

//11. Display only product names
function displayproductnames(){
    return products.map(p => p.name);
}

//12. Display only product prices
function displayproductprices(){
    return products.map(p => p.price);
}

//13. Check if product exists
function exists(name){
    return products.some(p => p.name.toLowerCase() === name.toLowerCase());
}

//14. Categorize good/low quality products
function categorize(){
    return {
        good: products.filter(p => p.quality === "high"),
        low: products.filter(p => p.quality === "low")
    };
}

//15. Search prodcuts between 5000 and 50000
function betweenRange(){
    return products.filter(p => p.price > 5000 && p.price < 50000);
}

//16. Sort ascending by price
function sortAsc(){
    return [...products].sort((a, b) => a.price - b.price);
}

//17. Sort descending by price
function sortDesc(){
    return [...products].sort((a,b) => b.price - a.price);
}

//18. Add 18% Gst
function addGst(){
    return products.map(p => ({...p, price : p.price * 1.18}));
}

//19. Total inventory value
function totalvalue(){
    return products.reduce((total, p) => total + p.price, 0);
}

//20. Product report
function productreport(){
    return products.map(p => ({
        name: p.name,
        price: p.price,
        quality: p.quality,
        gstPrice: p.price * 1.18
    }));
}

module.exports = {
    searchProductbyName,
    searchProductbyPrice,
    above5000,
    below5000,
    countproducts,
    expensiveproduct,
    cheapestproduct,
    addproduct,
    deleteproduct,
    updateproductprice,
    displayproductnames,
    displayproductprices,
    exists,
    categorize,
    betweenRange,
    sortAsc,
    sortDesc,
    addGst,
    totalvalue,
    productreport
}