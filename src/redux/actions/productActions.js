import axios from 'axios';
import { FETCH_PRODUCTS_SUCCESS } from './actionTypes';

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      dispatch(fetchProductsSuccess(response.data)); 
    } catch (error) {
      console.error('Error fetching products:', error);
      
    }
  };
};
