// products.js
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Smart Tools for PC', price: 299, image: 'D:/sites/pages/assets/махсулоти 1.jpg' },
        { id: 2, name: 'GamePad Tools', price: 249, image: 'D:/sites/pages/assets/махсулоти 2.jpg' },
        { id: 3, name: 'Headphones, Keyboard', price: 99, image: 'D:/sites/pages/assets/махсулоти 3.jpg' },
    ];

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
        `;
        productGrid.appendChild(productCard);
    });

    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            if (productName === 'Monitor') {
                window.location.href = 'buy-monitor.html';
            }
        });
    });

    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.innerHTML = document.body.classList.contains('dark') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });
});