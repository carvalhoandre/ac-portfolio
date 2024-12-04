import React from "react";
import { useTranslation } from "react-i18next";

type ValidationType = {
  regex: RegExp;
  messageKey: string;
};

const types: Record<string, ValidationType> = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    messageKey: "error.email",
  },
};

type UseFormConfig = {
  type?: keyof typeof types;
  required?: boolean;
};

type UseFormReturnType = {
  value: string;
  error: string | null;
  touched: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  validate: () => boolean;
  reset: () => void;
};

const useForm = ({
  type,
  required = false,
}: UseFormConfig = {}): UseFormReturnType => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [touched, setTouched] = React.useState<boolean>(false);

  const validate = (value: string): boolean => {
    if (required && value.trim().length === 0) {
      setError(t("error.required"));
      return false;
    }

    if (type) {
      const validationType = types[type];
      if (validationType && !validationType.regex.test(value)) {
        setError(t(validationType.messageKey));
        return false;
      }
    }

    setError(null);
    return true;
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const newValue = event.target.value;
    setValue(newValue);

    if (touched) validate(newValue);
  };

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setTouched(true);
    validate(event.target.value);
  };

  const reset = () => {
    setValue("");
    setError(null);
    setTouched(false);
  };

  return {
    value,
    error: touched ? error : null,
    touched,
    onChange,
    onBlur,
    setValue,
    setError,
    validate: () => validate(value),
    reset,
  };
};

export { useForm };
