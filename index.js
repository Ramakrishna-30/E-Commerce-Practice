 // Initialize cart as an empty array
let cart = [];

// Function to add item to the cart
function addToCart(button) {
    const productElement = button.parentElement;
    const name = productElement.getAttribute('data-name');
    const price = parseFloat(productElement.getAttribute('data-price'));

    // Add item to cart array
    cart.push({ name, price });

    // Update cart count
    document.getElementById('cart-count').textContent = cart.length;
    alert(name + " has been added to the cart!");
}

// Function to view items in the cart
function viewCart() {
    const cartView = document.getElementById('cart-view');
    cartView.style.display = cartView.style.display === 'none' ? 'block' : 'none';

    // Display cart items
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
}

// Function for checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = []; // Clear cart
        document.getElementById('cart-count').textContent = 0; // Reset cart count
        viewCart(); // Close cart view
    }
}
