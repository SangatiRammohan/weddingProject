import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Login/LoginForm.css'

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => (user.username === username) && (user.email === email) )) {
      alert("User already exists. Please log in.");
      return;
    }

    users.push({ username, password, email, phone });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please log in.");
    navigate("/Login");
  };

  return (
    <div className="Login">
         <h1>Shaadipix</h1>
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="LoginForm">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/Login">Login</a></p>
    </div>
  );
}
