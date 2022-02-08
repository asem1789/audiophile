import "./InputRadio.scss";

const InputRadio = ({ id, checked, label, className, onChange, ...rest }) => {
  return (
    <label htmlFor={id} className={`inputRadio ${className}`}>
      <span className="inputRadio__check-wrap">
        {checked && <span className="inputRadio__check"></span>}
      </span>
      <span className="inputRadio__label">{label}</span>
      <input
        id={id}
        className="inputRadio__input"
        type="radio"
        onChange={onChange}
        checked={checked}
        {...rest}
      />
    </label>
  );
};

export default InputRadio;
