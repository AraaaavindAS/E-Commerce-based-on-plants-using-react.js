import React from 'react';
import { useCart } from '../context/CartContext';

const plants = [
  { id: 1, name: 'Snake Plant', price: 15, category: 'Low Light', image: 'snakeplant.jpeg' },
  { id: 2, name: 'Monstera', price: 25, category: 'Foliage', image: 'monstera.jpeg' },
];

const ProductListing = () => {
  const { cart, addToCart } = useCart();

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id} className="plant">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button 
            onClick={() => addToCart(plant)} 
            disabled={cart.some(item => item.id === plant.id)}
          >
            {cart.some(item => item.id === plant.id) ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
