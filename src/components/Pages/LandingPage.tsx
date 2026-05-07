import { useDeviceType } from "../../hooks/useDeviceType";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";
import { GiftCardBanner } from "../LandingPageComponents/GiftCardBanner";
import { LandingPageMessage } from "../LandingPageComponents/LandingPageMessage";
import { MenuBanner } from "../LandingPageComponents/MenuBanner";
import { PictureBanner } from "../LandingPageComponents/PictureBanner";
import { VideoBanner } from "../LandingPageComponents/VideoBanner";

export const LandingPage = () => {
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
          minHeight: "90dvh",
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
            justifyItems: "center",
          }}
        >
          <div></div>
          <LandingPageMessage />
          <div></div>
        </div>
      </div>

      <PictureBanner />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 3px 1fr",
        }}
      >
        <MenuBanner />
        {device !== "mobile" && (
          <div
            style={{
              width: "3px",
              background: "#666",
            }}
          />
        )}
        <GiftCardBanner />
      </div>
        <VideoBanner />
    </div>
  );
};


