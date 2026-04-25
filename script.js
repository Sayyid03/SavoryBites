// GET BUTTONS
const buttons = document.querySelectorAll(".add-to-cart");

// CART (from storage or empty)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// CART COUNT ELEMENT
const cartCount = document.getElementById("cart-count");

// UPDATE CART COUNT
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// SAVE CART
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD TO CART
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    const item = {
      name: name,
      price: price,
      quantity: 1,
    };

    cart.push(item);

    saveCart();
    updateCartCount();
  });
});

// LOAD COUNT ON PAGE LOAD
updateCartCount();

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
