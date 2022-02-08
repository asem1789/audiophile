import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

export const validatePaymentMethod = (values) => {
  const errors = {};
  if (values.paymentMethod !== "e-money") return errors;

  if (!values.eMoneyNumber) {
    errors.eMoneyNumber = "Required";
  }

  if (!values.eMoneyPin) {
    errors.eMoneyPin = "Required";
  }

  return errors;
};
