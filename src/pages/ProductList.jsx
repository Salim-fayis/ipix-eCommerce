import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link className='product-list-link' to={`/product/${product.id}`}>
              <img src={product.images} alt={product.name} />
              <h3 className='product-list-name'>{product.title}</h3>
              <p className='product-list-price'>${product.price}</p>
            </Link>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
