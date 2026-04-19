// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".restaurant-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = "restaurant.html";
    });
  });
});
