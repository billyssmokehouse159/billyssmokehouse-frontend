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
          src="https://www.instagram.com/83fbc7e4-29a1-4cd8-a28f-c42651f72402"
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
          src=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      {device !== "tablet" && (
        <div
          style={{
            width: "300px",
            height: device !== "mobile" ? "45dvh" : "none",
          }}
        >
          <video
            controls
            src=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
};
