let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const emptyMessage = document.getElementById("empty-message");
const clearBtn = document.getElementById("clear-cart");

// SAVE
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// DISPLAY CART
function displayCart() {
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    emptyMessage.innerHTML = `
      Cart is empty <br>
      <a href="index.html">Go back home</a>
    `;
    totalElement.textContent = 0;
    return;
  }

  emptyMessage.textContent = "";

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - ₦${item.price}

      <button onclick="decrease(${index})">-</button>
      ${item.quantity}
      <button onclick="increase(${index})">+</button>

      <button onclick="removeItem(${index})">Delete</button>
    `;

    cartItems.appendChild(li);
  });

  totalElement.textContent = total;
}

// INCREASE
function increase(index) {
  cart[index].quantity++;
  saveCart();
  displayCart();
}

// DECREASE
function decrease(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  saveCart();
  displayCart();
}

// DELETE ONE
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  displayCart();
}

// DELETE ALL
clearBtn.addEventListener("click", () => {
  cart = [];
  saveCart();
  displayCart();
});

// INIT
displayCart();

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
