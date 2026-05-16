import { useDeviceType } from "../../hooks/useDeviceType";
import { Footer } from "../Footer/Footer";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";
import { MenuBlackBoard } from "../Menu/MenuBlackBoard/MenuBlackBoard";
import { MenuDetails } from "../Menu/MenuDetailsSection/MenuDetails";

export const MenuPage = () => {
  const device = useDeviceType();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            minHeight: "98dvh",
            backgroundImage:
              "url('https://hickorys.co.uk/app/uploads/2026/04/Homepage-Image-e1776844602421.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 1,
          }}
        >
          <div>
            {(device === "desktop" || device === "tablet") && <DesktopHeader />}
            {device === "mobile" && <MobileHeader />}
            <MenuBlackBoard />
          </div>
        </div>
        <div>
          <MenuDetails />
        </div>
        <Footer />
      </div>
    </>
  );
};
