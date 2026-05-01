import { ImageHolder } from "./ImageHolder";
import draftImg from "../../assets/menu-banner-background.png";
import { useDeviceType } from "../../hooks/useDeviceType";

export const PictureBanner = () => {
  const device = useDeviceType();

  console.log("device", device);
  return (
    <div
      style={{
        display: device === "mobile" ? "none" : "grid",
        gridTemplateColumns:
          device === "tablet" ? "1fr 1fr" : "1fr 1fr 1fr 1fr 1fr",
        backgroundColor: "rgb(255 176 5 / 21%)",
        justifyItems: "center",
        width: "100%",
        height: "30dvh",
      }}
    >
      {device !== "tablet" && (
        <>
          <ImageHolder src={draftImg} />
          <ImageHolder src={draftImg} />
          <ImageHolder src={draftImg} />
        </>
      )}
      <ImageHolder src={draftImg} />
      <ImageHolder src={draftImg} />
    </div>
  );
};
