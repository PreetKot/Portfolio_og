"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function WobbleCard({ children, className = "", containerClassName = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 ${containerClassName}`}
    >
      <div
        className={`transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
