// src/pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        console.log("token is generated", token);
         alert('Login Successful!');
        navigate('/home');
        setError(null);
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-2xl w-80">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
        <input
          type="text"
          className="w-full p-2 mb-2 border rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 mb-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
        {/* {token && <p className="mt-2 text-green-600">Token: {token}</p>} */}
        
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
