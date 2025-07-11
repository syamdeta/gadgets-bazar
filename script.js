 const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value.toLowerCase();
      products.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(keyword) ? 'block' : 'none';
      });
    });

    const backToTop = document.getElementById('backToTop');
    window.onscroll = () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
