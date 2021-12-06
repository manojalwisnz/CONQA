//Calculate Order button click function call to calculate and display grant total value
function grandTotal() {  
  var subtotal = subTotal(document.orderform.price.value, document.orderform.quantity.value);
  var discountedPrice = calculateDiscount(subtotal);
  var tax = calculateTax(discountedPrice);
  var grandTotal = discountedPrice + tax;
  document.orderform.gtotal.value = grandTotal.toFixed(2);
}

//Calculated discounted price
function calculateDiscount(subTotal){
var discountRate;

if(subTotal == 1000){
  discountRate = 3;
}else if(subTotal == 5000){
  discountRate = 5;
}else if(subTotal == 7000){
  discountRate = 7;
}else if(subTotal == 10000){
  discountRate = 10;
}else if(subTotal == 50000){
  discountRate = 15;
}else{
  discountRate = 0;
}

var discountedPrice = subTotal - (subTotal * discountRate / 100);
document.orderform.discountedTotal.value = discountedPrice.toFixed(2);

return discountedPrice;
}

//Takes result of subTotal function to calculate tax
function calculateTax(subtotal){
  var stateCode = document.orderform.state.value;
  var taxRate;

  if(stateCode === "UT"){
    taxRate = 6.85;
  }else if(stateCode === "NV"){
    taxRate = 8.00;
  }else if(stateCode === "TX"){
    taxRate = 6.25;
  }else if(stateCode === "AL"){
    taxRate = 4.00;
  }else if(stateCode === "CA"){
    taxRate = 8.25;
  }

  var tax = discountedPrice * (taxRate / 100);
  document.orderform.salestax.value = tax.toFixed(2);
  return tax;
}

// Calculate sub total 
function subTotal(itemPrice, quantity){
  var productPrice = itemPrice * quantity;
  document.orderform.subtotal.value = productPrice.toFixed(2);
  return productPrice;
}
module.exports = subTotal;
