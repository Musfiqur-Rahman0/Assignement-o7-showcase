"use client";

import { toast, ToastContainer } from "react-toastify";

const ToastNotification = () => {
  return <ToastContainer />;
};

export default ToastNotification;

export const showToast = (variant, massage, duration) => {
  toast[variant](`Successfully ${massage} the product`, {
    autoClose: duration,
  });
};
