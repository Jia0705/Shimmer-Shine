// Initialize a shopping cart array
let shoppingCart = [];

//  add an item to the shopping cart
function addToCart(itemName) {
    const item = { name: itemName, price: getItemPrice(itemName) };
    shoppingCart.push(item);
    updateCart();
}

// update the shopping cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let cartList = "";
    let total = 0;

    shoppingCart.forEach((item) => {
        cartList += `<li>${item.name}: $${item.price}</li>`;
        total += item.price;
    });

    cartItems.innerHTML = cartList;
    cartTotal.textContent = `$${total}`;
}

//  price of an item 
function getItemPrice(itemName) {
    switch (itemName) {
        case "Diamond Ring":
            return 999;
        case "Sapphire Necklace":
            return 799;
        // Add more cases for other products
        default:
            return 0;
    }
}

//  checkout process
function checkout() {
    alert("Thank you for your purchase!");
    shoppingCart = []; // Clear the shopping cart
    updateCart();
}
// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//narbar js
//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict max 3*/
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
//dropdown button
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  javascript
// Step 2: Define variables
let cart = [];

// Step 3: Add event listener
document.getElementById("add-to-cart").addEventListener("click", addToCart);

// Step 4: Handle item addition
function addToCart() {
  // Retrieve item details (e.g., name, price, quantity)
  const itemName = "Example Item";
  const itemPrice = 9.99;
  const itemQuantity = 1;

  // Create item object
  const item = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity
  };

  // Add item to cart
  cart.push(item);

  // Step 5: Update cart display
  updateCartDisplay();
}

// Step 5: Update cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear previous items

  // Generate HTML elements for each item in the cart
  cart.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsContainer.appendChild(itemElement);
  });
}