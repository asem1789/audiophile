import { Button } from "antd";
import { useDispatch } from "react-redux";
import React, { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.action";
import CounterBtn from "../CounterBtn";

import "./ProductPreview.scss";

import { ROUTES } from "../../services/routes";



function ProductPreview({
  id,
  name,
  price,
  description,
  isNew,
  imgUrl,
  isDetail = false,
}) {
  const dispatch = useDispatch();
  const counterEl = useRef(null);
  const { pathname } = useLocation();

  const updateCart = () => {
    dispatch(
      addItem(
        { id, name, price, description, isNew, imgUrl },
        Number(counterEl.current.value)
      )
    );
  };

  useEffect(() => {
    if (counterEl.current) {
      counterEl.current.value = 1;
    }
  }, [pathname]);

  return (
    <div className={`productPrev ${isDetail && "productPrev--detail"}`}>
      <div className="productPrev__imgWrapper">
        <div className="productPrev__imgBox">
          <img src={imgUrl} alt="categoryegory img" />
        </div>
      </div>
      <div className="productPrev__content">
        {isNew && <span className="productPrev__isNew">New Product</span>}
        <h2 className="productPrev__title">{name}</h2>
        <p className="productPrev__desc">{description}</p>
        {!isDetail && (
          <Link to={`${ROUTES.PRODUCT}/${id}`}>
            <Button className="btn__primary mt-3" type="primary">
              See Product
            </Button>
          </Link>
        )}

        {isDetail && (
          <>
            <span className="productPrev__price">{`$${price.toLocaleString()}`}</span>
            <div className="productPrev__controls">
              <CounterBtn ref={counterEl} />
              <Button
                onClick={updateCart}
                className="btn__primary"
                type="primary"
              >
                Add To Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPreview;
