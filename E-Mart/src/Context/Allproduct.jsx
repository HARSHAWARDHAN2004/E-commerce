import React, { createContext, useEffect, useState } from "react";

export const AllProductCon = createContext();

export default function AllProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let res = await fetch("http://localhost:3000/AllProduct");
      let data = await res.json();

      console.log("API:", data); // ✅ already array

      // 🔥 JUST SET DIRECTLY
      setProducts(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AllProductCon.Provider value={{ products }}>
      {children}
    </AllProductCon.Provider>
  );
}