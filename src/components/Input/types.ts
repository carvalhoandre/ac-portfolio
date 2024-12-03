import React from "react";

export interface InputProps {
  label: string;
  name: string;
  value: string;
  error: string | null;
  type?: string;
  variant?: "input" | "textarea";
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate: () => boolean;
}
