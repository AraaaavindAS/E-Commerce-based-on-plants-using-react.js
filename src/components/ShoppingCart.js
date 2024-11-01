import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cart, updateQuantity, removeFromCart, totalCost } = useCart();

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Delete</button>
        </div>
      ))}
      <h3>Total: ${totalCost}</h3>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
