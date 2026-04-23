import type React from "react";


export const NavMenu = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyItems: "center",
        color: "white",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "26px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        padding: "35px 0 40px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
        overflow: "hidden",
      }}
    >
      <div style={{ cursor: "pointer" }}>Menu</div>
      <div style={{ cursor: "pointer" }}>Location</div>
      <div style={{ cursor: "pointer" }}>Contact</div>
    </div>
  );
};
