import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { removeFromCart, increaseItemCount, decreaseItemCount } from '../redux/actions/cartActions';

const CartComponent = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

 
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty-container">
        <p className="cart-empty-message">No items in the cart</p>
        <Link to="/" className="cart-empty-link">Shop Now</Link>
      </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.images} alt={item.title} style={{ width: '100px', height: '100px' }} />
                  {item.title}
                </td>
                <td>${item.price}</td>
                <td>{item.qty}</td>
                <td>
                  <button onClick={() => dispatch(increaseItemCount(item.id))}>+</button>
                  <button onClick={() => dispatch(decreaseItemCount(item.id))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2"><strong>Total:</strong></td>
              <td > <strong>${total}</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default CartComponent;
