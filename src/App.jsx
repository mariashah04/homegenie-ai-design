import React, { useState } from "react";
import Landing from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Preferences from "./pages/Preferences";
import Designs from "./pages/Designs";
import ARView from "./pages/ARView";

const App = () => {
  // Routing state
  const [currentPath, setCurrentPath] = useState("/");

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // UI state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Data state
  const [preferences, setPreferences] = useState({
    style: "modern",
    budget: "medium",
    rooms: "3",
  });
  const [designOptions, setDesignOptions] = useState([]);

  // Navigation function
  const navigate = (path) => {
    setCurrentPath(path);
  };

  // Auth handlers
  const handleAuth = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
    setEmail("");
    setPassword("");
    setName("");
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

  // Router - renders pages based on current path
  const renderPage = () => {
    // Public routes (no auth required)
    if (!isLoggedIn) {
      switch (currentPath) {
        case "/":
          return <Landing onNavigate={navigate} />;
        case "/login":
          return (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onAuth={handleAuth}
              onNavigate={navigate}
            />
          );
        case "/signup":
          return (
            <Signup
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onAuth={handleAuth}
              onNavigate={navigate}
            />
          );
        default:
          return <Landing onNavigate={navigate} />;
      }
    }

    // Protected routes (auth required)
    switch (currentPath) {
      case "/dashboard":
        return (
          <Dashboard
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleLogout}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        );
      case "/preferences":
        return (
          <Preferences
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleLogout}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            preferences={preferences}
            setPreferences={setPreferences}
          />
        );
      case "/designs":
        return (
          <Designs
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleLogout}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            designOptions={designOptions}
            generateDesigns={generateDesigns}
          />
        );
      case "/ar":
        return (
          <ARView
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleLogout}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        );
      default:
        return (
          <Dashboard
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleLogout}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
