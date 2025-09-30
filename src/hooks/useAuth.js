// src/hooks/useAuth.js

import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setName("");
  };

  return {
    isLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleAuth,
    handleLogout,
  };
};
