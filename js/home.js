const featured = document.getElementById("featured");

// Skeleton loader
featured.innerHTML = `
  <div class="skeleton"></div>
  <div class="skeleton"></div>
  <div class="skeleton"></div>
`;

setTimeout(() => {
  featured.innerHTML = "";

  restaurants.forEach(r => {
    featured.innerHTML += `
      <a href="restaurant.html" class="card-link">
        <div class="card fade-in">
          <img src="${r.image}" alt="${r.name}">
          <div class="card-body">
            <h3>${r.name}</h3>
            <span class="rating">${r.rating}★</span>
            <p>${r.cuisine} • ${r.time}</p>
          </div>
        </div>
      </a>
    `;
  });
}, 1000);
