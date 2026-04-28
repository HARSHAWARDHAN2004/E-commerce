import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../style/navabar.css";

import { TemplatesCon } from "../Context/Templates";
import { AuthicationCon } from "../Context/Authication";
import Logout from "./Logout";

export default function Navbar({ RouteData }) {
  const { value, changetheme } = useContext(TemplatesCon);
  const { isAuth } = useContext(AuthicationCon);

  const navigate = useNavigate();
  const location = useLocation();

  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      let res = await fetch("http://localhost:3000/History");
      let data = await res.json();
      setCartCount(Array.isArray(data) ? data.length : 0);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch() {
    if (!search.trim()) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <>
      {/* TOP NAV */}
      <div className="top-nav">

        {/* LOGO */}
        <div className="logo" onClick={() => navigate("/")}>
          🛍️ E-Mart
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>

        {/* RIGHT NAV */}
        <div className="right-nav">

          {/* THEME BUTTON */}
          <button
            className="theme-btn"
            onClick={() => changetheme(!value)}
          >
            {value ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* AUTH */}
          {isAuth && <Logout />}

          {/* CART */}
          <Link to="/history" className="cart-link">
            🛒
            <span className="cart-badge">{cartCount}</span>
          </Link>

        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="bottom-nav">
        {(RouteData || []).map((el, i) => (
          <Link
            key={i}
            to={el.path}
            className={
              location.pathname === el.path ? "active" : ""
            }
          >
            {el.title}
          </Link>
        ))}
      </div>
    </>
  );
}