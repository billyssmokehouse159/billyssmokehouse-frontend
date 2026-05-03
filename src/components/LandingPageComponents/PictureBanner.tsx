import { ImageHolder } from "./ImageHolder";
import draftImg from "../../assets/menu-banner-background.png";
import { useDeviceType } from "../../hooks/useDeviceType";

// rgb(139, 69, 19)
// rgb(165, 42, 42) 
// rgb(178, 34, 34) 
export const PictureBanner = () => {
  const device = useDeviceType();

  console.log("device", device);
  return (
    <div
      style={{
        display: device === "mobile" ? "none" : "grid",
        gridTemplateColumns:
          device === "tablet" ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        // backgroundColor: "rgb(255 176 5 / 21%)",
        // backgroundColor: "rgb(139, 69, 19)",
        backgroundColor: "rgb(165, 42, 42) ",
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
