"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
        style: {
          minWidth: "450px",
          direction: "rtl"
        },
      }}
    />
  );
}
