import { useFormik } from "formik";

import InputRadio from "../../components/InputRadio";
import InputText from "../../components/InputText";
import CheckoutSummery from "./CheckoutSummery";
import "./Checkout.scss";
import { checkoutSchema, validatePaymentMethod } from "./validation";
import Portal from "../../components/Portal";
import {  useState } from "react";
import OrderMessage from "./OrderMessage";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems } from "../../redux/cart/cart.action";
import { useCart } from "../../hooks";

const Checkout = () => {
  const [paid, setPaid] = useState(false);

  const productsCart = useSelector((s) => s.cart.cartItems);
  const [products, setProducts] = useState([]);

  const { grandTotal } = useCart();
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();


  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "e-money",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
    validationSchema: checkoutSchema,
    validate: validatePaymentMethod,
    onSubmit: () => {
      setProducts(productsCart);
      setTotal(grandTotal);
      setPaid(true);
      dispatch(clearAllItems());
      resetForm();
    },
  });

  return (
    <div className="checkout padding-main-x">
      {paid && (
        <>
          <Portal>
            <div className="backdrop" />
          </Portal>
          <Portal>
            <OrderMessage totalCost={total} products={products} />
          </Portal>
        </>
      )}
      <main className="checkout__main row">
        <section className="checkout__sectionForm">
          <h2 className="headingSecondary checkout__title">checkout</h2>
          <form className="checkout__form">
            <fieldset className="checkout__fieldset">
              <legend>Billing Details</legend>
              <InputText
                error={errors.name && touched.name ? errors.name : ""}
                onBlur={handleBlur}
                className="checkout__controlGroup"
                type="text"
                label="Name"
                name="name"
                placeholder="John Doe0"
                onChange={handleChange}
                value={values.name}
              />

              <InputText
                error={errors.email && touched.email ? errors.email : ""}
                onBlur={handleBlur}
                className="checkout__controlGroup"
                type="email"
                name="email"
                label="Email Address"
                placeholder="john@doe.com"
                onChange={handleChange}
                value={values.email}
              />
              <InputText
                error={
                  errors.phoneNumber && touched.phoneNumber
                    ? errors.phoneNumber
                    : ""
                }
                onBlur={handleBlur}
                className="checkout__controlGroup"
                type="text"
                name="phoneNumber"
                label="Phone Number"
                placeholder="+1 202-555-0136"
                onChange={handleChange}
                value={values.phoneNumber}
              />
            </fieldset>

            <fieldset className="checkout__fieldset">
              <legend>Shipping Info</legend>
              <InputText
                error={errors.address && touched.address ? errors.address : ""}
                onBlur={handleBlur}
                className="checkout__address"
                type="text"
                name="address"
                label="Your Address"
                placeholder="1137 Williams Avenue"
                onChange={handleChange}
                value={values.address}
              />
              <div className="fx-wrap">
                <InputText
                  error={
                    errors.zipCode && touched.zipCode ? errors.zipCode : ""
                  }
                  onBlur={handleBlur}
                  className="checkout__controlGroup"
                  type="text"
                  name="zipCode"
                  label="ZIP Code"
                  placeholder="10001"
                  onChange={handleChange}
                  value={values.zipCode}
                />
                <InputText
                  error={errors.city && touched.city ? errors.city : ""}
                  onBlur={handleBlur}
                  className="checkout__controlGroup"
                  type="text"
                  name="city"
                  label="City"
                  placeholder="New York"
                  onChange={handleChange}
                  value={values.city}
                />
                <InputText
                  error={
                    errors.country && touched.country ? errors.country : ""
                  }
                  onBlur={handleBlur}
                  className="checkout__controlGroup"
                  type="text"
                  name="country"
                  label="Country"
                  placeholder="United State"
                  onChange={handleChange}
                  value={values.country}
                />
              </div>
            </fieldset>

            <fieldset className="checkout__fieldset">
              <legend>Payment Details</legend>
              <div className="fx-wrap">
                <span className="checkout-col checkout__payment-title">
                  Payment Method
                </span>
                <div className="checkout-col">
                  <InputRadio
                    id="cash"
                    className="mb-3"
                    name="pay-method"
                    label="e-Money"
                    onChange={() => setFieldValue("paymentMethod", "e-money")}
                    checked={values.paymentMethod === "e-money"}
                  />
                  <InputRadio
                    id="delivery"
                    name="pay-method"
                    label="Cash on Delivery"
                    onChange={() => setFieldValue("paymentMethod", "delivery")}
                    checked={values.paymentMethod === "delivery"}
                  />
                </div>
              </div>

              {values.paymentMethod === "e-money" && (
                <div className="checkout__moneyInfo">
                  <InputText
                    error={
                      errors.eMoneyNumber && touched.eMoneyNumber
                        ? errors.eMoneyNumber
                        : ""
                    }
                    onBlur={handleBlur}
                    className="checkout__controlGroup"
                    type="text"
                    name="eMoneyNumber"
                    label="e-Money Number"
                    placeholder="238521993"
                    onChange={handleChange}
                    value={values.eMoneyNumber}
                  />

                  <InputText
                    error={
                      errors.eMoneyPin && touched.eMoneyPin
                        ? errors.eMoneyPin
                        : ""
                    }
                    onBlur={handleBlur}
                    className="checkout__controlGroup"
                    type="text"
                    name="eMoneyPin"
                    label="e-Money Pin"
                    placeholder="6891"
                    onChange={handleChange}
                    value={values.eMoneyPin}
                  />
                </div>
              )}
            </fieldset>
          </form>
        </section>
        <section className="checkout__sectionSummery">
          <CheckoutSummery onSubmit={handleSubmit} />
        </section>
      </main>
    </div>
  );
};

export default Checkout;
