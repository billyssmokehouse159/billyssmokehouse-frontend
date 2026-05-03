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
          device === "tablet" ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        backgroundColor: "rgb(230, 225, 219)",
        // backgroundColor: "rgb(139, 69, 19)",
        // backgroundColor: "rgb(165, 42, 42) ",
        // backgroundColor: "rgb(178, 34, 34) ",

        justifyItems: "center",
        width: "100%",
        height: "30dvh",
        gap: "20px",
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
