import "./InputText.scss";

function InputText({ label, className, error, onChange, ...rest }) {
  return (
    <label className={`inputText ${className} ${error && " inputText__error"}`}>
      <span className="inputText__label">{label}</span>
      <span className="inputText__error-text">{error}</span>
      <input
        className="inputText__input"
        type="text"
        onChange={onChange}
        {...rest}
      />
    </label>
  );
}

export default InputText;
