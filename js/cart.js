// js/cart.js
let cart = [
  { name: "Butter Chicken", price: 250, qty: 1 },
  { name: "Paneer Tikka", price: 220, qty: 1 }
];

const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        ₹${item.price}
      </div>
      <div class="qty-controls">
        <button onclick="updateQty(${index}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="updateQty(${index}, 1)">+</button>
      </div>
      <button class="remove" onclick="removeItem(${index})">Remove</button>
    `;
    cartList.appendChild(div);
  });

  cartTotal.innerText = total;
}

function updateQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty < 1) cart[index].qty = 1;
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

renderCart();
