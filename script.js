// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Sample products
    const products = [
        { id: 1, name: 'Smart Tools for PC', price: 299, image: 'D:/sites/pages/assets/махсулоти 1.jpg' },
        { id: 2, name: 'GAmePad', price: 899, image: 'D:/sites/pages/assets/махсулоти 2.jpg' },
        { id: 3, name: 'Headphones', price: 99, image: 'D:/sites/pages/assets/махсулоти 3.jpg' },
        { id: 4, name: 'CAse', price: 199, image: 'D:/sites/pages/assets/махсулоти 4.jpg' },
        { id: 5, name: 'An Old PC', price: 599, image: 'D:/sites/pages/assets/махсулоти 5.jpg' },
        { id: 6, name: 'Case with Monitor', price: 149, image: 'D:/sites/pages/assets/махсулоти 6.jpg' },
        { id: 7, name: 'Nvidia Case', price: 349, image: 'D:/sites/pages/assets/махсулоти 7.jpg' },
        { id: 8, name: 'Smart Tools for PC', price: 249, image: 'D:/sites/pages/assets/махсулоти 1.jpg' },
    ];

    // Render products
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="buy-now">Buy Now</button>
            <button class="favorite">♥</button>
            <div class="comments">
                <input type="text" placeholder="Add a comment...">
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.innerHTML = document.body.classList.contains('dark') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });

    // Modal functionality
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeBtn = document.querySelector('.close');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Favorite button toggle
    document.querySelectorAll('.favorite').forEach(button => {
        button.addEventListener('click', () => {
            button.style.background = button.style.background === 'grey' ? '#ff4444' : 'grey';
        });
    });
});