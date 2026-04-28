
import React, { useEffect, useRef, useState } from 'react';

export default function Carouseal() {

  let arr = [
    "https://cdn.dmart.in/images/rwd/banners/hmpg/15jul24-crsl-pincode-nagpur1.jpg",
    "https://cdn.dmart.in/images/rwd/banners/hmpg/23oct25-crsl-ds-kam-we.jpg",
    "https://cdn.dmart.in/images/rwd/banners/hmpg/12march26-curated-rts-hp1.jpg",
  ];

  let [index, setIndex] = useState(0);
  let time = useRef(false);

  useEffect(function () {
    if (time.current == false) {
      setInterval(function () {
        handleInc();
      }, 5000);
      time.current = true;
    }
  }, [index]);

  function handleDec() {
    setIndex((prev) => {
      let val = prev <= 0 ? arr.length - 1 : prev - 1;
      return val;
    });
  }

  function handleInc() {
    setIndex((prev) => {
      let val = prev >= arr.length - 1 ? 0 : prev + 1;
      return val;
    });
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px"
    }}>

      {/* PREV BUTTON */}
      <button onClick={handleDec}>⬅</button>

      {/* IMAGE */}
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "12px",
            display: "block",
            margin: "15px auto",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
          src={arr[index]}
          alt=""
        />
      </div>

      {/* NEXT BUTTON */}
      <button onClick={handleInc}>➡</button>

    </div>
  );
}

