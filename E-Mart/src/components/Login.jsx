import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthicationCon } from "../Context/Authication";
import '../style/Login.css'

export default function Login() {
  const { setAuth } = useContext(AuthicationCon);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

 
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    let userRes = await fetch("http://localhost:3000/Users");
    let adminRes = await fetch("http://localhost:3000/Admin");

    let users = await userRes.json();
    let admins = await adminRes.json();

    let validUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    let validAdmin = admins.find(
      (a) => a.email === user.email && a.password === user.password
    );

    if (validAdmin) {
      setAuth(true);
      navigate("/admin");
    } 
    else if (validUser) {
      setAuth(true);
      navigate("/user");
    } 
    else {
      alert("Invalid credentials");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
}