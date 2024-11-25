"use client";

import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick? :  React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border py-2 px-4 rounded-xl border-slate-600 hover:border-slate-400 hover:shadow-white hover:shadow-sm"
    >
      {children}
    </button>
  );
};
