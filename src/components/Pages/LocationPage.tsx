import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useDeviceType } from "../../hooks/useDeviceType";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";

export const GoogleMap = () => {
  const locationOne = {
    lat: 51.5020881,
    lng: -0.2317584,
  };


  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ width: "100%", height: "100%" }}>
        <Map defaultCenter={locationOne} defaultZoom={13}>
          <Marker position={locationOne} />
        </Map>
      </div>
    </APIProvider>
  );
};

export const LocationPage = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100dvh",
      }}
    >
      <div>
        {(device === "desktop" || device === "tablet") && (
          <DesktopHeader miniLogo solidBackground />
        )}
        {device === "mobile" && <MobileHeader />}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 2fr",
          minHeight: "calc(100dvh - 120px)",
        }}
      >
        <div
          style={{
            backgroundColor: "#e6e1db",
            padding: "60px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {locations.map((location) => {
            return (
              <div
                key={location.name}
                style={{
                  backgroundColor: "white",
                  padding: "25px 30px",
                  borderRadius: "10px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  maxWidth: "420px",
                  width: "100%",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "28px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {location.name}
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: "1.6",
                    fontWeight: 400,
                  }}
                >
                  {location.address}
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "#000",
                    borderBottom: "1px solid #000",
                    cursor: "pointer",
                  }}
                >
                  Get Directions →
                </a>
              </div>
            );
          })}
        </div>

        <div style={{ minHeight: device === "mobile" ? "600px" : "100%" }}>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

const locations = [
  {
    name: "London",
    address: "100 Goldhawk Rd, Shepherd’s Bush W12 8HD",
  },
];
