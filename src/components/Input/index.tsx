import IComponent from "@/@types";
import { InputProps } from "./types";

const Input: IComponent<InputProps> = ({
  testId = "input",
  label,
  type = "text",
  name,
  error,
  value,
  variant = "input",
  isRequired = false,
  onChange,
  onBlur,
}) => {
  return (
    <div>
      <div className="contact_content" data-testid={testId}>
        <label htmlFor={name} className="contact_label">
          {`${label} ${isRequired ? "*" : ""}`}
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
            resource="disabled"
          />
        )}
      </div>
      {!!error && <p className="contact_error">{error}</p>}
    </div>
  );
};

export { Input };
