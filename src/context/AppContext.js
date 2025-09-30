// src/context/AppContext.js

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    style: "modern",
    budget: "medium",
    rooms: "3",
  });
  const [designOptions, setDesignOptions] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const generateDesigns = () => {
    const designs = [
      {
        id: 1,
        name: "Modern Minimalist",
        style: "Clean lines, neutral tones",
        img: "🏠",
      },
      {
        id: 2,
        name: "Cozy Contemporary",
        style: "Warm colors, comfortable",
        img: "🏡",
      },
      {
        id: 3,
        name: "Industrial Chic",
        style: "Exposed brick, metal accents",
        img: "🏢",
      },
    ];
    setDesignOptions(designs);
  };

  return (
    <AppContext.Provider
      value={{
        preferences,
        setPreferences,
        designOptions,
        setDesignOptions,
        sidebarOpen,
        setSidebarOpen,
        generateDesigns,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
