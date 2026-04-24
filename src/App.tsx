import { DesktopHeader } from "./components/Headers/DesktopHeader";
import { MobileHeader } from "./components/Headers/MobileHeader";
import { useDeviceType } from "./hooks/useDeviceType";

function App() {
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
      {(device === "desktop" || device === "tablet") && (
        <DesktopHeader />
      )}
      {device === "mobile" && <MobileHeader />}
    </div>
  );
}

export default App;
