import { ReactNode } from "react";

export interface INotificationContextType {
  notification: (
    message: string,
    type: "success" | "error" | "info" | "warning",
  ) => void;
}

export interface INotificationData {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export interface INotificationContainer {
  children?: ReactNode;
}
