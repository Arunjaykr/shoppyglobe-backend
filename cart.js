document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");

  // Fetch cart items from the API
  const token = localStorage.getItem('token');
  if (!token) {
    alert("You must be logged in to view your cart.");
    return;
  }

  fetch('http://localhost:5000/api/cart', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(cartItems => {
    cartList.innerHTML = '';
    cartItems.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      
      cartItem.innerHTML = `
        <h4>${item.product.name}</h4>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ₹${item.product.price * item.quantity}</p>
        <button class="remove-from-cart" data-id="${item._id}">Remove</button>
      `;
      
      cartList.appendChild(cartItem);
    });

    // Add event listeners to "Remove" buttons
    document.querySelectorAll('.remove-from-cart').forEach(button => {
      button.addEventListener('click', (e) => {
        const cartId = e.target.getAttribute('data-id');
        removeFromCart(cartId);
      });
    });
  })
  .catch(err => console.error("Error fetching cart items:", err));

  // Function to remove an item from the cart
  function removeFromCart(cartId) {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("You must be logged in to remove items from the cart.");
      return;
    }

    fetch(`http://localhost:5000/api/cart/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      alert("Product removed from cart.");
      location.reload();  // Reload to reflect changes
    })
    .catch(err => console.error("Error removing product from cart:", err));
  }
});
