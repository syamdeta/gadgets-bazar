// script.js - Pixsure Media
window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const match = title.includes(query);
      card.style.display = match ? "block" : "none";
    });
  });
});