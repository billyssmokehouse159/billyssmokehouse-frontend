import { useDeviceType } from "../../hooks/useDeviceType";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";

export const GiftCardPage = () => {
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
          placeItems: device !== "mobile" ? "center" :"flex-start",
          minHeight: "100dvh",
          backgroundColor: "#e6e1db",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "48px",
              margin: 0,
              fontWeight: 700,
              color: "#222",
            }}
          >
            Coming Soon
          </h1>

          <p
            style={{
              marginTop: "12px",
              fontSize: "18px",
              color: "#555",
            }}
          >
            We’re working on something great — stay tuned.
          </p>
        </div>
      </div>
    </div>
  );
};