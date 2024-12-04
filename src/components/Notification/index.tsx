import React from "react";

import IComponent from "@/@types";
import { NotificationProps } from "./types";

import { Icon } from "../Icon";

import "./styles.css";

const Notification: IComponent<NotificationProps> = ({
  id,
  type = "info",
  message,
  duration = 3000,
  testId = "notification",
  onClose,
}) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div className={`notification notification--${type}`} data-testid={testId}>
      <p>{message}</p>

      <button className="notification__close" onClick={() => onClose(id)}>
        <Icon icon="close" />
      </button>
    </div>
  );
};

export { Notification };
