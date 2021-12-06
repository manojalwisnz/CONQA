//Calculate Order button click function call to calculate and display grant total value
function grandTotal() {  
  var subtotal = subTotal();
  document.orderform.gtotal.value = "";
}
// Calculate sub total 
function subTotal(){
  var itemPrice = document.orderform.price.value;
  var quantity = document.orderform.quantity.value;
  productPrice = itemPrice * quantity;
  document.orderform.subtotal.value = productPrice.toFixed(2);
  return productPrice;
}


