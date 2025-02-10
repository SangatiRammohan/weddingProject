
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

 function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");
      navigate("/")
      
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="Login">
      <h1>Shaadipix</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="LoginForm">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
}
export default Login
