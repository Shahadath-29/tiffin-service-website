// Placeholder users for login
const users = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'password456' }
];

// Cart and Reviews arrays
let cart = [];
let reviews = [];

// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    const message = document.getElementById('loginMessage');
    if (user) {
        message.textContent = `Login successful! Welcome, ${username}.`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid login credentials.';
        message.style.color = 'red';
    }
});

// Add to Cart Functionality
function addToCart(item, price) {
    cart.push({ item, price });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach((cartItem, index) => {
        total += cartItem.price;
        cartDiv.innerHTML += `<div>${cartItem.item} - $${cartItem.price} <button onclick="removeFromCart(${index})">Remove</button></div>`;
    });

    cartDiv.innerHTML += `<h4>Total: $${total}</h4>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function placeOrder() {
    if (cart.length > 0) {
        alert('Order placed successfully!');
        cart = [];
        displayCart();
    } else {
        alert('Your cart is empty.');
    }
}

// Reviews Functionality
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const rating = document.getElementById('rating').value;

    if (rating >= 1 && rating <= 5) {
        reviews.push({ reviewText, rating });
        document.getElementById('reviewText').value = '';
        document.getElementById('rating').value = '';
        displayReviews();
    } else {
        alert('Please enter a rating between 1 and 5.');
    }
});

function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';
    reviews.forEach(review => {
        reviewsList.innerHTML += `<div><strong>Rating:</strong> ${review.rating}/5 <p>${review.reviewText}</p></div>`;
    });
}
