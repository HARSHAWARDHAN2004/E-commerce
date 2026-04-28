import React, { useEffect, useState } from "react";

export default function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let res = await fetch("http://localhost:3000/Users");
    let data = await res.json();
    setUsers(data);
  }

  //  DELETE USER FUNCTION
  async function deleteUser(id) {
    await fetch(`http://localhost:3000/Users/${id}`, {
      method: "DELETE",
    });

    // refresh list after delete
    getUsers();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Users: {users.length}</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              width: "250px",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              backgroundColor: "#fff",
            }}
          >
            <h3>{user.name}</h3>

            <p><b>ID:</b> {user.id}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Password:</b> {user.password}</p>
            {/* <p><b>Cart Items:</b> {user.cart?.length || 0}</p> */}

         
            <button
              onClick={() => deleteUser(user.id)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}