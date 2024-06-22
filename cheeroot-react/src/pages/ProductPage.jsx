import React, { useState } from 'react';
import '../css/product.css'; 
import a from '../assets/IMG/a.webp'
import b from '../assets/IMG/b.webp'
import c from '../assets/IMG/c.webp'
import d from '../assets/IMG/d.webp';
import e from '../assets/IMG/e.webp';
import f from '../assets/IMG/f.webp';
import g from '../assets/IMG/g.webp';
import h from '../assets/IMG/h.webp';
import shoppingCartIcon from '../assets/IMG/shopping-cart.webp';

const products = [
  { id: 1, name: 'Traditional Medicinals Organic Ginger Aid Tea', IMG: a, price: 320},
  { id: 2, name: 'Aura Cacia Rosemary Essential Oil', IMG: b, price: 500},
  { id: 3, name: 'Dr. Bronners Pure Castile Liquid Soap' , IMG: c, price: 800},
  { id: 4, name: 'Gaia Herbs Elderberry Syrup', IMG: d, price: 1230},
  { id: 5, name: 'doTERRA Lavender Essential Oil', IMG: e, price: 320},
  { id: 6, name: 'Badger Balm Unscented Healing Balm', IMG: f, price: 120},
  { id: 7, name: 'Herb Pharm Valerian Extract', IMG: g, price: 80},
  { id: 8, name: 'Natures Way Echinacea Goldenseal Capsules', IMG: h, price: 100},
];

function ProductPage() {
  const [listCards, setListCards] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCard = (key) => {
    const product = products[key];
    const existingProduct = listCards.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedList = listCards.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price };
        }
        return item;
      });
      setListCards(updatedList);
    } else {
      const newProduct = { ...product, quantity: 1, totalPrice: product.price };
      setListCards([...listCards, newProduct]);
    }
  };

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) {
      setListCards(listCards.filter(item => item.id !== id));
    } else {
      const updatedList = listCards.map(item => {
        if (item.id === id) {
          return { ...item, quantity: quantity, totalPrice: quantity * item.price };
        }
        return item;
      });
      setListCards(updatedList);
    }
  };

  const totalPrice = listCards.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalQuantity = listCards.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container2">
      <div className="header">
        <h1>New Arrivals</h1>
        <p>Explore Our Latest Collection Of Premium Quality Organic Herbs. Sourced From Trusted Farms, Our Products Ensure Maximum Freshness And Nutritional Value.</p>
      </div>
      <div className="list">
        {products.map((product, key) => (
          <div className="item" key={product.id}>
            <img src={product.IMG} alt={product.name} />
            <div className="title">{product.name}</div>
            <div className="price">₱{product.price.toLocaleString()}</div>
            <button onClick={() => addToCard(key)}>Add To Cart</button>
          </div>
        ))}
      </div>

      <div className={`card ${isCartOpen ? 'open' : ''}`}>
        <h1>Add to Cart</h1>
        <ul className="listCard">
          {listCards.map(item => (
            <li key={item.id}>
              <div><img src={item.IMG} alt={item.name} /></div>
              <div>{item.name}</div>
              <div>₱{item.price.toLocaleString()}</div>
              <div>
                <button onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
                <div className="count">{item.quantity}</div>
                <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkOut">
          <div className="total">₱{totalPrice.toLocaleString()}</div>
          <div className="closeShopping" onClick={() => setIsCartOpen(false)}>Close</div>
        </div>
      </div>
      
      {!isCartOpen && (
        <div className="shopping" onClick={() => setIsCartOpen(true)}>
          <img src={shoppingCartIcon} alt="Shopping Cart" />
          <span className="quantity">{totalQuantity}</span>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
