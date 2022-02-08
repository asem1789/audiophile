import CheckIcon from "../CheckIcon";

import "./Alert.scss";

const Alert = ({ toasts }) => {
  return (
    <div className="toaster">
      {toasts.reverse().map((el) => {
        return (
          <div key={el.id} className="alert">
            <CheckIcon />
            <small>{el.message}</small>
          </div>
        );
      })}
    </div>
  );
};

export default Alert;
