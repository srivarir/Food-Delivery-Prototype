const searchInput = document.getElementById("searchInput");
const ratingFilter = document.getElementById("ratingFilter");
const priceFilter = document.getElementById("priceFilter");
const timeFilter = document.getElementById("timeFilter");
const cards = document.querySelectorAll(".restaurant-card");

function filterRestaurants() {
  const s = searchInput.value.toLowerCase();
  const r = ratingFilter.value;
  const p = priceFilter.value;
  const t = timeFilter.value;

  cards.forEach(card => {
    let show = true;

    if (s && !card.dataset.name.includes(s)) show = false;
    if (r && Number(card.dataset.rating) < Number(r)) show = false;
    if (p && card.dataset.price !== p) show = false;
    if (t && Number(card.dataset.time) > Number(t)) show = false;

    card.style.display = show ? "block" : "none";
  });
}

[searchInput, ratingFilter, priceFilter, timeFilter]
  .forEach(el => el.addEventListener("input", filterRestaurants));
