import { forwardRef, useRef } from "react";
import "./CounterBtn.scss";

const CounterBtn = forwardRef(
  ({ classes, changeCounter, defaultValue, isCart = false }, elRef) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = elRef || useRef();

    const handelInc = () => {
      const currNum = Number(ref.current.value);
      ref.current.value = currNum + 1;
      if (isCart) changeCounter("+");
    };

    const handleDec = () => {
      const currNum = Number(ref.current.value);
      const decNumber = currNum - 1 < 1 ? 1 : currNum - 1;
      ref.current.value = decNumber;
      if (isCart) changeCounter("-");
    };

    return (
      <div className={`counterBtn ${classes}`}>
        <button onClick={() => handleDec()} className="counterBtn__btn">
          -
        </button>
        <input
          ref={ref}
          defaultValue={defaultValue}
          className="counterBtn__input"
          readOnly
        />
        <button onClick={() => handelInc()} className="counterBtn__btn">
          +
        </button>
      </div>
    );
  }
);

export default CounterBtn;
