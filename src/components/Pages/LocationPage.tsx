import { useDeviceType } from "../../hooks/useDeviceType";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";

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
    </div>
  );
};
