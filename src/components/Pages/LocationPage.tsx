import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useDeviceType } from "../../hooks/useDeviceType";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";

export default function GoogleMap() {
  const locationOne = {
    lat: 51.5020881,
    lng: -0.2317584,
  };
  const locationTwo = {
    lat: 51.5072,
    lng: -0.1276,
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ width: "100%", height: "100%" }}>
        <Map defaultCenter={locationOne} defaultZoom={13}>
          <Marker position={locationOne} />
          <Marker position={locationTwo} />
        </Map>
      </div>
    </APIProvider>
  );
}

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
          height: "calc(100dvh - 120px)",
        }}
      >
        {device !== "mobile" && (
          <div
            style={{
              backgroundColor: "#e6e1db",
            }}
          ></div>
        )}
        <GoogleMap />
      </div>
    </div>
  );
};
