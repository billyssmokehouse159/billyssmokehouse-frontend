import { useDeviceType } from "../../hooks/useDeviceType";
import { Logo } from "../Headers/Logo";

export const Footer = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#c97e5d",
        }}
      ></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 1fr 2fr",
          width: "100%",
          color: "#ff2b2b",
          backgroundColor: "rgb(51 51 51)",
          height: "50px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Logo width={50} height={50} />
        </div>

        <div></div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              device === "mobile" ? "1fr" : "1fr 1fr 1fr 1fr",
            fontSize: "25px",
            fontWeight: 400,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#ff2b2b",
            textAlign: "center",
            fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
            width: "100%",
            justifyItems: "center",
            backgroundColor: "rgb(51 51 51)",
          }}
        >
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/menu")}
          >
            Menu
          </div>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/location")}
          >
            Location
          </div>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/giftcard")}
          >
            GiftCards
          </div>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};
