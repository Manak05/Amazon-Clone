// =============================
// ShopZone - Basic Cart Script
// =============================

// Select all "Add to Cart" links and the cart display area
const addToCartButtons = document.querySelectorAll('article a:first-of-type');
const cartCountElement = document.querySelector('aside p:last-child');

// Load saved cart from localStorage (or start empty)
let cart = JSON.parse(localStorage.getItem('shopzone-cart')) || [];

// Function to update Cart count in header
function updateCartDisplay() {
  cartCountElement.innerHTML = `<a href="#">Cart (${cart.length})</a>`;
}

// Add to Cart handler
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Find product details
    const product = button.closest('article');
    const name = product.querySelector('h3').textContent;
    const price = product.querySelector('p').textContent;

    // Add product object to cart
    cart.push({ name, price });

    // Save updated cart to localStorage
    localStorage.setItem('shopzone-cart', JSON.stringify(cart));

    // Update header count
    updateCartDisplay();

    // Optional: small visual feedback
    button.textContent = "Added ✔";
    setTimeout(() => (button.textContent = "Add to Cart"), 1000);
  });
});

// Update cart count on page load
updateCartDisplay();
