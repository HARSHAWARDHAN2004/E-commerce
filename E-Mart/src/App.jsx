import React, { useContext, useState } from "react";
import "./App.css";

import Admin from "./components/Admin";
import User from "./components/User";
import Login from "./components/Login";
import Register from "./components/Register";

import { TemplatesCon } from "./Context/Templates";
import { AuthicationCon } from "./Context/Authication";

export default function App() {

  const { value } = useContext(TemplatesCon);
  const { isAuth } = useContext(AuthicationCon);

  const [page, setPage] = useState("Login");

  return (
    <div
      className="container"
      style={{
        backgroundColor: value ? "#121212" : "#f5f5f5",
        color: value ? "#fff" : "#000"
      }}
    >

      <div className="button-group">

        <button
          className="btn login-btn"
          onClick={() => setPage("Login")}
        >
          Login
        </button>

        <button
          className="btn register-btn"
          onClick={() => setPage("Register")}
        >
          Register
        </button>

        <button
          className="btn user-btn"
          onClick={() => setPage("User")}
        >
          User
        </button>

        <button
          className="btn admin-btn"
          onClick={() => setPage("Admin")}
        >
          Admin
        </button>

      </div>

      

      {page === "Login" && <Login />}
      {page === "Register" && <Register />}

     
      {page === "User" && (
        isAuth ? <User /> : <Login />
      )}

     
      {page === "Admin" && (
        isAuth ? <Admin /> : <Login />
      )}

    </div>
  );
}