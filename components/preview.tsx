"use client"

import dynamic from "next/dynamic";
import { useMemo } from "react";
import 'react-quill/dist/quill.bubble.css';

export interface IPreviewProps {
  value: string
}

export default function Preview({ value }: IPreviewProps) {
  const ReactQuiill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), [])
  return (

    <ReactQuiill
      theme="bubble"
      value={value}
      readOnly />

  );
}
