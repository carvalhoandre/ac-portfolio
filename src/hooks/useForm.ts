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

type UseFormReturnType = {
  value: string;
  error: string | null;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate: () => boolean;
};

const useForm = (type?: keyof typeof types): UseFormReturnType => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const validate = (value: string): boolean => {
    if (!type) return true;

    if (value.trim().length === 0) {
      setError(t("error.required"));
      return false;
    }

    const validationType = types[type];
    if (validationType && !validationType.regex.test(value)) {
      setError(t(validationType.messageKey));
      return false;
    }

    setError(null);
    return true;
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const newValue = event.target.value;
    setValue(newValue);
    if (error) validate(newValue);
  };

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): boolean => validate(event.target.value);

  return {
    value,
    error,
    onChange,
    onBlur,
    setValue,
    validate: () => validate(value),
  };
};

export { useForm };
