// Welcome Message
console.log("Welcome to Alpha Male Wine Store!");

// Load cart from browser storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add Product
function addToCart(productName, price) {

    cart.push({
        product: productName,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(productName + " added to cart!");

}

// Update Cart Counter
function updateCartCount() {

    let counter = document.getElementById("cart-count");

    if (counter) {
        counter.innerHTML = cart.length;
    }

}

// Run when page loads
updateCartCount();

// Display Cart Items
function displayCart() {

    let table = document.getElementById("cart-table");
    let totalElement = document.getElementById("grand-total");

    if (!table || !totalElement) return;

    let total = 0;

    cart.forEach(item => {

        let row = table.insertRow();

        let productCell = row.insertCell(0);
        let priceCell = row.insertCell(1);

        productCell.innerHTML = item.product;
        priceCell.innerHTML = "₦" + item.price.toLocaleString();

        total += item.price;

    });

    totalElement.innerHTML = "Grand Total: ₦" + total.toLocaleString();

}

displayCart();