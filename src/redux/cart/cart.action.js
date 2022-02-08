import CartTypes from "./cart.types";

export const addItem = (item, quantity) =>{
  return  ({
    type: CartTypes.ADD_ITEM,
    payload: {item, quantity},
  })
};


export const removeItem = (item) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearAllItems = () => ({
  type: CartTypes.CLEAR_ITEMS,
});
