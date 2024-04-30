import { toast } from "react-toastify";
import { ToastProps } from "@/@types/toast";

const handleSendToast = ({message, type}: ToastProps) => {
  return type === "error" ? toast.error(message) : toast.success(message);
}

export const MessageUtils = {
  handleSendToast,
}