import { Link } from "react-router-dom";

import CounterBtn from "../CounterBtn";
import "./Cart.scss";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItem,
  removeItem,
  clearItemFromCart,
  clearAllItems,
} from "../../redux/cart/cart.action";
import { useCart } from "../../hooks";
import { ROUTES } from "../../services/routes";

function Cart({ onClick }) {
  const [products, setProduct] = useState([]);
  const { cartItems, count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { totalCost } = useCart();

  const updateCart =
    ({ product }) =>
    (mark) => {
      if (mark === "+") {
        dispatch(addItem({ ...product }, 1));
      } else {
        dispatch(removeItem({ ...product }));
      }
    };

  const handleClearItem = ({ product }) => {
    dispatch(clearItemFromCart(product));
  };

  const handleClearAllItems = () => {
    dispatch(clearAllItems());
  };

  useEffect(() => {
    setProduct(cartItems);
  }, [cartItems]);

  return (
    <div className="cart">
      {!products.length ? (
        <small className="cart__empty"> Your cart is empty!</small>
      ) : (
        <>
          <div className="cart__header">
            <h3 className="cart__title">Cart ({count})</h3>
            <button
              onClick={handleClearAllItems}
              className="cart__btn-remove"
              type="button"
            >
              Remove all
            </button>
          </div>
          <ul className="cart__list">
            {products.map((product) => {
              const { id, name, price, imgUrl, quantity } = product;
              return (
                <li key={id} className="cart__item">
                  <div className="cart__imgBox">
                    <img src={imgUrl} alt="img product" />
                  </div>
                  <div className="cart__info">
                    <Link to={`${ROUTES.PRODUCT}/${id}`} className="cart__productName">
                      {name.split(" ").slice(0, -1).join(" ")}
                    </Link>
                    <span className="cart__productPrice">{`$${price.toLocaleString()}`}</span>
                  </div>

                  <div className="cart__countAndRemove">
                    <CounterBtn
                      defaultValue={quantity}
                      changeCounter={updateCart({ product })}
                      isCart
                      classes="cart__counter"
                    />
                    <button
                      onClick={() => handleClearItem({ product })}
                      className="cart__btn-remove"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="cart__report">
            <div className="cart__row">
              <span className="cart__text cart__text--light">Total</span>
              <span className="cart__text cart__text--dark">{`$${totalCost.toLocaleString()}`}</span>
            </div>
          </div>

          <Link to={ROUTES.CHECKOUT} onClick={onClick}>
            <Button className="btn__primary cart__checkout-btn" type="primary">
              Checkout
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
