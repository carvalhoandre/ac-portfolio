import { useState } from "react";
import { content, profile, type Locale } from "../content/portfolio";
import { Icon } from "./Icon";

interface CopyEmailButtonProps {
  locale: Locale;
}

type CopyStatus = "idle" | "copied" | "error";

export function CopyEmailButton({ locale }: CopyEmailButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const copy = content[locale].contact;
  const label =
    status === "copied"
      ? copy.emailCopied
      : status === "error"
        ? copy.emailCopyError
        : copy.copyEmail;

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <button
      className="contact-link contact-copy"
      onClick={copyEmail}
      type="button"
    >
      <Icon name="copy" />
      <span aria-live="polite">
        {label}
        <small>{profile.email}</small>
      </span>
      <Icon name={status === "copied" ? "check" : "copy"} />
    </button>
  );
}
