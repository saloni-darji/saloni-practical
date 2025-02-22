import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null); // Ensure it's not undefined

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ handleLogout }}> {/* Ensure value is passed */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    console.log("AuthContext value:", context); // Debugging log
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };