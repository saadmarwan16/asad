import { toast } from "react-toastify";

const successToast = (message: string, toastId: string) => {
  toast.success(message, {
    toastId: toastId,
    draggable: true,
    theme: "light",
  });
};

export default successToast;
