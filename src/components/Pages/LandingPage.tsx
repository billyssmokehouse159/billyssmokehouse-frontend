import { useDeviceType } from "../../hooks/useDeviceType";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";
import { LandingPageMessage } from "../other/LandingPageMessage";

export const LandingPage = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100dvh",
        backgroundImage:
          "url('https://hickorys.co.uk/app/uploads/2026/04/Homepage-Image-e1776844602421.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 1,
      }}
    >
      {(device === "desktop" || device === "tablet") && <DesktopHeader />}
      {device === "mobile" && <MobileHeader />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 3fr 1fr",
          justifyItems: "center"
        }}
      >
        <div></div>
        <LandingPageMessage />
        <div></div>
      </div>
    </div>
  );
};
