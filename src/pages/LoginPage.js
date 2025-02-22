import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent user from going back after logout
    if (!localStorage.getItem("authToken")) {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", () => {
        navigate("/login");
      });
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("authToken", data.token);
        alert('Login Successful!');
        console.log("token is generated", data.token);
        navigate('/home');
        setError(null);
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
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
        {error && <p className="mt-2 text-red-600">{error}</p>}
        {token && <p className="mt-2 text-green-600">Token: {token}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
