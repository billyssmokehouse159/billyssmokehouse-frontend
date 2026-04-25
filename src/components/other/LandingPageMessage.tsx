import { useDeviceType } from "../../hooks/useDeviceType";

export const LandingPageMessage = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        color: "white",
        background: "rgba(0, 0, 0, 0.6)",
        padding: "30px 25px",
        borderRadius: "8px",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: 150,
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: device === "mobile" || device === "tablet" ? 25 : 35,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Welcome to Billy’s Smokehouse
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: 500,
        }}
      >
        Fire, smoke, and proper Southern comfort.
      </div>

      <div
        style={{
          fontSize: "15px",
          lineHeight: "1.6",
          color: "#ddd",
        }}
      >
        Good food, good people, and a place to kick back.
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            padding: "10px 18px",
            border: "1px solid white",
            cursor: "pointer",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
          onClick={() => {
            window.location.href = "/location";
          }}
        >
          Find a Location
        </div>
      </div>
    </div>
  );
};
