 const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value.toLowerCase();
      products.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(keyword) ? 'block' : 'none';
      });
    });

   const backToTop = document.getElementById("backToTop");

  window.onscroll = function () {
    backToTop.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "flex" : "none";
  };

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
