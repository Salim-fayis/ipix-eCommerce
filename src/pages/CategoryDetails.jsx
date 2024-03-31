import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const CategoryDetails = () => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchCategory();
    }, [categoryId]);
  
    const fetchCategory = async () => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error(`Error fetching products for category ${categoryId}:`, error);
        }
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="category-details-container">
            <h2>Products in this Category</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src={product.images} alt={product.name} />
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                        </Link>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;
