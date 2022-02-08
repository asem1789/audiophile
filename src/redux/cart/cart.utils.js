export const addItemToCart = (items, cartItemToAdd, quantitySelected) => {
  const existingItem = items.find((item) => {
    return item.id === cartItemToAdd.id;
  });

  if (existingItem) {
    return items.map((item) => {
      if (item.id === cartItemToAdd.id) {
        return { ...item, quantity: item.quantity + quantitySelected };
      } else {
        return item;
      }
    });
  }

  return [...items, { ...cartItemToAdd, quantity: quantitySelected }];
};

export const removeItemFromCart = (items, cartItemToRemove) => {
  const selectedItem = items.find((item) => {
    return item.id === cartItemToRemove.id;
  });

  if (selectedItem.quantity === 1) {
    return items.filter((item) => item.id !== cartItemToRemove.id);
  }

  return items.map((item) => {
    if (item.id === cartItemToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};
