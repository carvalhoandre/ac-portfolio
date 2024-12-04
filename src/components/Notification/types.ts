export interface NotificationProps {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  onClose: (id: string) => void;
  duration?: number;
}
