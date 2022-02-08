import { useSelector } from "react-redux";

const useCart = () => {
  const totalCost = useSelector((s) => {
    const items = s.cart.cartItems;
    return items.reduce((acc, curr) => {
      return curr.price * curr.quantity + acc;
    }, 0);
  });

  const shipping = 50;
  const VAT = Number((totalCost * 0.16).toFixed(2));
  const grandTotal = totalCost + shipping + VAT;

  return { totalCost, shipping, VAT, grandTotal };
};

export default useCart;
