import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../services/routes";
import "./OrderMessage.scss";

const OrderMessage = ({ products, totalCost }) => {
  return (
    <div className="orderMsg">
      <div className="orderMsg__mark">
        <CheckOutlined />
      </div>
      <h2 className="headingSecondary orderMsg__title">
        Thank you<br></br> For Your Order
      </h2>
      <p className="orderMsg__hint">
        You will receive an email confirmation shortly.
      </p>

      <div className="orderMsg__content">
        <div className="orderMsg__grand">
          <span className="orderMsg__grand-term">Grand Total</span>
          <span className="orderMsg__grand-desc">{`$${totalCost}`}</span>
        </div>
        <div className="orderMsg__items">
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
        </div>
      </div>

      <Link to={ROUTES.HOME_PAGE}>
        <Button
          className="btn__primary width-100 orderMsg__btnBack"
          type="primary"
        >
          Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default OrderMessage;
