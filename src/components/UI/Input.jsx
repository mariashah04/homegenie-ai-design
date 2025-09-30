// src/components/UI/Input.jsx

import React from "react";

const Input = ({ label, className = "", ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-purple-900">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border border-purple-200 rounded-lg 
          focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
