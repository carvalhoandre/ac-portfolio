import IComponent from "@/@types";
import { InputProps } from "./types";

import "./styles.css";

const Input: IComponent<InputProps> = ({
  testId = "input",
  label,
  type = "text",
  name,
  error,
  value,
  variant = "input",
  onChange,
  onBlur,
}) => {
  return (
    <div className="contact_content" data-testid={testId}>
      <label htmlFor={name} className="contact_label">
        {label}
      </label>

      {variant === "input" ? (
        <input
          className="contact_input"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          onBlur={onBlur}
        />
      ) : (
        <textarea
          className="contact_input"
          id={name}
          name={name}
          value={value}
          cols={0}
          rows={7}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {!!error && <p className="contact_error">{error}</p>}
    </div>
  );
};

export { Input };
