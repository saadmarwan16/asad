import { toast } from "react-toastify";

const errorToast = (message: string, toastId: string) => {
  toast.error(message, {
    toastId: toastId,
    draggable: true,
    theme: "light",
  });
};

export default errorToast;
