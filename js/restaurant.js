const params = new URLSearchParams(window.location.search);
const rest = params.get("rest") || "pizza";

const bannerImg = document.getElementById("bannerImg");
const restaurantName = document.getElementById("restaurantName");
const restaurantDesc = document.getElementById("restaurantDesc");
const menuGrid = document.getElementById("menuGrid");
const cartItems = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

let cart = [];
let total = 0;

const restaurants = {
  pizza: {
    name: "Pizza Corner",
    desc: "🍕 Italian • ⭐ 4.3 • 20 mins",
    banner: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&auto=format&fit=crop",
    menu: [
      {
        name: "Margherita Pizza",
        price: 199,
        img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&auto=format&fit=crop"
      },
      {
        name: "Pepperoni Pizza",
        price: 299,
        img: "https://images.unsplash.com/photo-1603079849174-4b1a5d1f9b1e?w=800&auto=format&fit=crop"
      },
      {
        name: "Cheese Burst Pizza",
        price: 349,
        img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&auto=format&fit=crop"
      }
    ]
  },

  burger: {
    name: "Burger Hub",
    desc: "🍔 Fast Food • ⭐ 4.5 • 30 mins",
    banner: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&auto=format&fit=crop",
    menu: [
      {
        name: "Classic Burger",
        price: 149,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop"
      },
      {
        name: "Cheese Burger",
        price: 179,
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop"
      },
      {
        name: "Chicken Burger",
        price: 199,
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop"
      }
    ]
  },

  indian: {
    name: "Spice Villa",
    desc: "🍛 Indian • ⭐ 4.7 • 25 mins",
    banner: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&auto=format&fit=crop",
    menu: [
      {
        name: "Butter Chicken",
        price: 250,
        img: "https://images.unsplash.com/photo-1626776876729-bab4369a5a9a?w=800&auto=format&fit=crop"
      },
      {
        name: "Paneer Tikka",
        price: 220,
        img: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=800&auto=format&fit=crop"
      },
      {
        name: "Chicken Biryani",
        price: 300,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop"
      }
    ]
  },

  bowl: {
    name: "Healthy Bowl",
    desc: "🥗 Healthy • ⭐ 4.6 • 35 mins",
    banner: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&auto=format&fit=crop",
    menu: [
      {
        name: "Veg Salad Bowl",
        price: 180,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop"
      },
      {
        name: "Protein Bowl",
        price: 220,
        img: "https://images.unsplash.com/photo-1625944525533-473f1a3f7d94"
      },
      {
        name: "Spicy Rice Bowl",
        price: 200,
        img: "https://images.unsplash.com/photo-1604908554161-426b36d1b0a6?w=800&auto=format&fit=crop"
      }
    ]
  }
};

const data = restaurants[rest];

// Banner
bannerImg.src = data.banner;
restaurantName.innerText = data.name;
restaurantDesc.innerText = data.desc;

// Menu
data.menu.forEach(item => {
  const div = document.createElement("div");
  div.className = "food-card";
  div.innerHTML = `
    <img loading="lazy" src="${item.img}">
    <div class="food-info">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button class="btn-primary">Add</button>
    </div>
  `;
  div.querySelector("button").onclick = () => addToCart(item);
  menuGrid.appendChild(div);
});

function addToCart(item) {
  cart.push(item);
  total += item.price;
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach(i => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${i.name}</span><span>₹${i.price}</span>`;
    cartItems.appendChild(li);
  });
  totalPriceEl.innerText = total;
}
