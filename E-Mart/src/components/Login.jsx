import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    let res = await fetch("http://localhost:3000/Users");
    let users = await res.json();

    let foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      alert("Login Successful");
      localStorage.setItem("User", JSON.stringify(foundUser));
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}