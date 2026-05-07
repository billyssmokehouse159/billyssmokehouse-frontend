import { useDeviceType } from "../../hooks/useDeviceType";

export const VideoBanner = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          device === "mobile"
            ? "1fr"
            : device === "tablet"
            ? "1fr 1fr"
            : "1fr 1fr 1fr",
        backgroundColor: "rgb(230, 225, 219)",
        width: "100%",
        minHeight: "50dvh",
        gridColumnGap: "50px",
        gridRowGap: "50px",
        justifyItems: "center",
        alignContent: "center",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          width: "300px",
          height: device !== "mobile" ? "45dvh" : "none",
        }}
      >
        <video
          controls
          src="https://file-examples.com/storage/fe6419bf2469fcd93947e85/2017/04/file_example_MP4_1920_18MG.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          width: "300px",
          height: device !== "mobile" ? "45dvh" : "none",
        }}
      >
        <video
          controls
          src="https://file-examples.com/storage/fe6419bf2469fcd93947e85/2017/04/file_example_MP4_1920_18MG.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
     {device !== "tablet" && <div
        style={{
          width: "300px",
          height: device !== "mobile" ? "45dvh" : "none",
        }}
      >
        <video
          controls
          src="https://file-examples.com/storage/fe6419bf2469fcd93947e85/2017/04/file_example_MP4_1920_18MG.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>}
     
    </div>
  );
};
