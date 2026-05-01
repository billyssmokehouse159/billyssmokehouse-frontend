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
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 2fr",
          minHeight: "100dvh",
          backgroundColor: "#e6e1db",
        }}
      ></div> */}
    </div>
  );
};