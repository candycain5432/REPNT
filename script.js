// Store cart items in local storage (or a variable for persistence)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to open/close the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Example product button click event (you'll call this when you click the Add to Cart button)
document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    // Sample product to be added
    const product = {
        id: "123",
        name: "Baseball Shirt",
        price: 25,
        image: "https://i.postimg.cc/XNZcBx0t/download.png"
    };
    addToCart(product);
});

// Function to add items to the cart
function addToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Initial call to update cart count when the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});

// Function to update the cart count (not showing number next to the cart)
function updateCartCount() {
    // If you still want to handle the cart, you can keep the functionality in the background
    // but we're not showing the count next to the cart in the UI anymore
}

// Just in case, on the cart page or product page:
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
