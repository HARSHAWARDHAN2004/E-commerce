import React, { useState } from "react";

import '../style/register.css'

export default function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  

  async function handleRegister(e) {
    e.preventDefault();

    let newUser = {
      name,
      email,
      password,
      cart: [],
    };

    let res = await fetch("http://localhost:3000/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (res.ok) {
      alert("User Registered Successfully");
       setName("");
    setEmail("");
    setPassword("");

    
    
    
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
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

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}