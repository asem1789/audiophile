import { Button } from "antd";
import { useSelector } from "react-redux";

import { useCart } from "../../../hooks";

import "./CheckoutSummery.scss";

const CheckoutSummery = ({ onSubmit }) => {
  const { totalCost, shipping, VAT, grandTotal } = useCart();
  const products = useSelector((s) => s.cart.cartItems);
  return (
    <div className="summery">
      <h2 className="summery__header">Summery</h2>
      {!!products.length && (
        <ul className="summery__list">
          {products.map(({ id, name, price, imgUrl, quantity }) => (
            <li className="fx summery__item" key={id}>
              <div className="summery__imgBox">
                <img src={imgUrl} alt="img product" />
              </div>
              <div className="fx-col summery__info">
                <span className="summery__name">
                  {name.split(" ").slice(0, -1).join(" ")}
                </span>
                <span className="summery__price">{`$${price.toLocaleString()}`}</span>
              </div>
              <span className="summery__quantity">x{quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <dl className="summery__costs">
        <dt className="summery__term">Total</dt>
        <dd className="summery__detail">{`$${totalCost}`}</dd>
        <dt className="summery__term">Shipping</dt>
        <dd className="summery__detail">{`$${shipping}`}</dd>
        <dt className="summery__term">VAT (INCLUDED)</dt>
        <dd className="summery__detail">{`$${VAT}`}</dd>
        <dt className="summery__term">GRAND TOTAL</dt>
        <dd className="summery__detail summery__detail--colored">{`$${grandTotal}`}</dd>
      </dl>
      <Button
        onClick={onSubmit}
        className="btn__primary width-100"
        type="primary"
      >
        Continue & Pay
      </Button>
    </div>
  );
};

export default CheckoutSummery;
