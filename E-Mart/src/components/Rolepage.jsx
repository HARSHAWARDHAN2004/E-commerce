import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Login Type</h2>

      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={() => navigate("/login?role=user")}
      >
        User Login
      </button>

      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={() => navigate("/login?role=admin")}
      >
        Admin Login
      </button>
    </div>
  );
}