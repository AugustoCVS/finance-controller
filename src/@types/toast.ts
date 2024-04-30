export type ToastType = "error" | "success"

export type ToastProps = {
  message: string;
  type: ToastType;
}