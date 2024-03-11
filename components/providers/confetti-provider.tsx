"use client"

import { useConfettiStore } from '@/hooks/use-confetti-store';
import * as React from 'react';
import ReactConfetti from "react-confetti"

export interface IConfettiProviderProps {
}

export function ConfettiProvider (props: IConfettiProviderProps) {
  const {isOpen, onClose} = useConfettiStore()

  if (!isOpen) return null


  return (
    <ReactConfetti
      className='pointer-events-none z-[100]'
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={()=>{
        onClose()
      }}
    />

  );
}
