// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Preferences from "./pages/Preferences";
import Designs from "./pages/Designs";
import ARView from "./pages/ARView";

// Protected Route Component
const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Public Route Component
const PublicRoute = ({ children, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const App = () => {
  // Auth state - localStorage se initialize karo
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedAuth = localStorage.getItem("isLoggedIn");
    return savedAuth === "true";
  });

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  const [password, setPassword] = useState("");

  const [name, setName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  // UI state - localStorage se initialize karo
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const savedSidebar = localStorage.getItem("sidebarOpen");
    return savedSidebar !== null ? savedSidebar === "true" : true;
  });

  // Data state - localStorage se initialize karo
  const [preferences, setPreferences] = useState(() => {
    const savedPreferences = localStorage.getItem("preferences");
    return savedPreferences
      ? JSON.parse(savedPreferences)
      : {
          style: "modern",
          budget: "medium",
          rooms: "3",
        };
  });

  const [designOptions, setDesignOptions] = useState(() => {
    const savedDesigns = localStorage.getItem("designOptions");
    return savedDesigns ? JSON.parse(savedDesigns) : [];
  });

  // localStorage update karo jab bhi state change ho
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("userEmail", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", sidebarOpen);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(preferences));
  }, [preferences]);

  useEffect(() => {
    localStorage.setItem("designOptions", JSON.stringify(designOptions));
  }, [designOptions]);

  // Auth handlers
  const handleAuth = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setName("");

    // localStorage clear karo
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("preferences");
    localStorage.removeItem("designOptions");
    localStorage.removeItem("sidebarOpen");
  };

  // Design generator
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
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Landing />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onAuth={handleAuth}
              />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Signup
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onAuth={handleAuth}
              />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard
                onLogout={handleLogout}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/preferences"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Preferences
                onLogout={handleLogout}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                preferences={preferences}
                setPreferences={setPreferences}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/designs"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Designs
                onLogout={handleLogout}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                designOptions={designOptions}
                generateDesigns={generateDesigns}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ar"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ARView
                onLogout={handleLogout}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </ProtectedRoute>
          }
        />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
