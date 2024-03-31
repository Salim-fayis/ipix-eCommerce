import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
          setCategories(response.data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []);
  
    return (
      <div className="category-list-container">
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}/products`} 
              className="category-item"
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
}

export default CategoryList;
