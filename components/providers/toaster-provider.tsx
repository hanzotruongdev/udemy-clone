

"use client"

import { Toaster } from "react-hot-toast";

export interface IToastProviderProps {
}

export default function ToastProvider(props: IToastProviderProps) {
  return (
    <Toaster />
  );
}
