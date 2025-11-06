// src/components/ui/button.jsx
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}



  