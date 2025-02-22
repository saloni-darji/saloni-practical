// src/App.js

import React from 'react';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from "./services/AuthContext";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const location = useLocation();  // Get current route location
  const isLoginPage = location.pathname === "/" || location.pathname ===  '/login';

  return (
    <div className="App">
      <div className="parent-container">
        <AuthProvider>
        
          <div className={isLoginPage ? "" : "content"}>
            {/* Conditionally render Sidebar based on current route */}
            {location.pathname !== '/login' && location.pathname !== '/' && <Sidebar />}
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </div>
      
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />  {/* Wrap App component with Router */}
    </Router>
  );
}
