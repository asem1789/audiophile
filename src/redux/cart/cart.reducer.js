import CartTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  count: 0,
};

const cartReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CartTypes.ADD_ITEM:
      return {
        count: state.count + payload.quantity,
        cartItems: addItemToCart(
          state.cartItems,
          payload.item,
          payload.quantity
        ),
      };
    case CartTypes.REMOVE_ITEM:
      return {
        count: state.count - 1,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CartTypes.CLEAR_ITEM_FROM_CART:
      return {
        count: state.count - payload.quantity, // Need TO Edit we get number from cleared item
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    case CartTypes.CLEAR_ITEMS:
      return {
        count: 0,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
