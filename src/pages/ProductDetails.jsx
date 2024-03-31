import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(null); 

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
                setProduct(response.data);
                setMainImage(response.data.images[0]);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl); 
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!product || !mainImage) {
        return null;
    }

    return (
        <div className='product_detail'>
            <div className='container'>
                <div className='images'>
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={product.title}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                </div>
                <div className='img-box'>
                        <img src={mainImage} alt={product.title} />
                    </div>
                <div className='details'>
                    <div className='detail'>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <h3>${product.price}</h3>
                        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
