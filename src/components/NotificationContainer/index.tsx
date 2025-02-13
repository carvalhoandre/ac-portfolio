import React from "react";

import IComponent from "@/@types";

import { Notification } from "../Notification";

import {
  INotificationData,
  INotificationContainer,
  INotificationContextType,
} from "./types";

const NotificationContext =
  React.createContext<INotificationContextType | null>(null);

const NotificationContainer: IComponent<INotificationContainer> = ({
  children,
}) => {
  const [notifications, setNotification] = React.useState<INotificationData[]>(
    [],
  );

  const notification = (
    message: string,
    type: "success" | "error" | "info" | "warning",
  ) => {
    const id = Math.floor(Math.random()).toString();
    setNotification((prev) => [...prev, { id, message, type }]);
  };

  const removeNotification = (id: string) => {
    setNotification((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notification }}>
      {children}

      <div className="notification-container">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            onClose={removeNotification}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error("useToast must be used within a NotificationContainer");
  }
  return context;
};

export { NotificationContainer };
