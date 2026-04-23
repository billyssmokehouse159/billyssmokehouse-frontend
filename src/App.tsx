import React, { useEffect, useState } from "react";
import billyslogo from "./assets/logo.jpg";
import { useDeviceType } from "./hooks/useDeviceType";



function App() {
  const device = useDeviceType();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://hickorys.co.uk/app/uploads/2026/04/Homepage-Image-e1776844602421.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 1,
      }}
    >
      {(device === "desktop" || device === "tablet") && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 3fr",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifySelf: "center",
            }}
          >
            <img height={225} width={225} src={billyslogo}></img>
          </div>
          <div>Other</div>
        </div>
      )}
      {device === "mobile" && (
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifySelf: "center",
              width: "100%",
            }}
          >
            <img height={400} width={"100%"} src={billyslogo}></img>
          </div>
          <div>Other</div>
        </div>
      )}
    </div>
  );
}

export default App;
