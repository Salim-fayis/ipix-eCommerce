import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM_COUNT, DECREASE_ITEM_COUNT } from '../actions/cartActions';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].qty++;
        return {
          ...state,
          cartItems: updatedCartItems
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1 }]
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };

    case INCREASE_ITEM_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        )
      };

    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, qty: Math.max(1, item.qty - 1) } : item
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
