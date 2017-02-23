var source = $('#store-template').html();
var template = Handlebars.compile(source);


// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
$('.cart-list').empty();
var total = 0;
for (var i = 0; i < cart.length; i++) {
  var carts = cart[i];
  total += cart[i].price;

  var newHTML = template(cart[i])
  $(".cart-list").append(newHTML);
};
$(".total").text(total);
}


var addItem = function (item, price) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
cart.push({item: item, price: price})     
};


var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
cart = [];
updateCart();
}

var toggle = true;


$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  if (toggle) {
 $('.shopping-cart').show();
 toggle = false ;
} else {
  $('.shopping-cart').hide();
  toggle = true;
}
});



$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data().name
  var price = $(this).closest('.item').data().price
  addItem(item, price);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();