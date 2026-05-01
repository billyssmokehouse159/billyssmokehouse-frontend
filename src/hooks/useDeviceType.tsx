import  { useEffect, useState } from "react";

type DeviceType = "desktop" | "mobile" | "tablet";

export const useDeviceType = () => {
  const getDevice = (): DeviceType => {
    const width = window.innerWidth;

    if (width < 800) return "mobile";
    if (width < 1030) return "tablet";
    return "desktop";
  };

  const [device, setDevice] = useState<DeviceType>(getDevice);

  useEffect(() => {
    const handleResize = () => setDevice(getDevice());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
