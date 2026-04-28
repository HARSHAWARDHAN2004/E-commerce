import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Admin from "./components/Admin";
import User from "./components/User";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";

// CUSTOMER PAGES
import Home from "./components/Customer/Home";
import Clothes from "./components/Customer/Clothes";
import Electronic from "./components/Customer/Electronic";
import FruitandVeg from "./components/Customer/FruitandVeg";
import Grains from "./components/Customer/Grains";
import Dailyneeds from "./components/Customer/Dailyneeds";
import History from "./components/Customer/History";
import Order from "./components/Customer/Order";
import Search from "./components/Search";

// ADMIN PAGES
import AddCard from "./components/Editor/AddCard";
import ShowCard from "./components/Editor/ShowCard";
import UserHistory from "./components/Editor/UserHistory";
import UserOrder from "./components/Editor/UserOrder";
import TotalUsers from "./components/Editor/TotalUsers";

import { TemplatesCon } from "./Context/Templates";

export default function App() {

  const { value } = useContext(TemplatesCon);
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: value ? "#111" : "#f5f5f5",
        color: value ? "white" : "black",
        minHeight: "100vh",
      }}
    >

      {/* NAV BUTTONS */}
      <div className="nav-bar">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/user")}>User</button>
        <button onClick={() => navigate("/admin")}>Admin</button>
      </div>

      <Routes>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*  SEARCH ROUTE (IMPORTANT FIX) */}
        <Route path="/search" element={<Search />} />

        {/* USER WRAPPER */}
        <Route
          path="/user/*"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />

        {/* ADMIN WRAPPER */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        {/* CUSTOMER ROUTES */}
        <Route path="/home" element={<Home />} />
        <Route path="/grains" element={<Grains />} />
        <Route path="/electronics" element={<Electronic />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/fruits" element={<FruitandVeg />} />
        <Route path="/daily" element={<Dailyneeds />} />
        <Route path="/history" element={<History />} />
        <Route path="/order" element={<Order />} />

        {/* ADMIN DIRECT ROUTES */}
        <Route path="/edit" element={<ShowCard />} />
        <Route path="/add" element={<AddCard />} />
        <Route path="/userhistory" element={<UserHistory />} />
        <Route path="/totaluser" element={<TotalUsers />} />
        <Route path="/userorder" element={<UserOrder />} />

        {/* 404 */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />

      </Routes>
    </div>
  );
}