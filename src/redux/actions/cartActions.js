export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEM_COUNT = 'INCREASE_ITEM_COUNT';
export const DECREASE_ITEM_COUNT = 'DECREASE_ITEM_COUNT';

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  
  export const increaseItemCount = (productId) => ({
    type: 'INCREASE_ITEM_COUNT',
    payload: productId,
  });
  
  export const decreaseItemCount = (productId) => ({
    type: 'DECREASE_ITEM_COUNT',
    payload: productId,
  });
