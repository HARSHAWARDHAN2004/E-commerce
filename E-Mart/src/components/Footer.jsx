import React from "react";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="brand">
          <h2>Emart-stylestore</h2>
          <p>We have all groceries & essentials</p>
        </div>

        <div className="links">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Categories</p>
          <p>Offers</p>
        </div>

       <div className="links">
  <h4>Help</h4>

  <p>24x7 Customer Support</p>

  <p>Easy returns within 2 days</p>

  <p>Support Center: Nagpur, Maharashtra</p>

  <p>Contact: +91 98765 43210</p>

  <p>Email: support@quickstore.in</p>
</div>

        <div className="links">
          <h4>Policy</h4>
          <p>Privacy</p>
          <p>Terms</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 | ALL GROCERIES AVAILABLE 🚀
      </div>

    </footer>
  );
}