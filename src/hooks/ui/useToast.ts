import toast from "react-hot-toast";

type ToastType = "success" | "error" | "warning" | "info";

export function useToast() {
  const showToast = (message: string, type: ToastType = "info") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast(message, { icon: "⚠️" });
        break;
      default:
        toast(message);
    }
  };

  return { showToast };
}
