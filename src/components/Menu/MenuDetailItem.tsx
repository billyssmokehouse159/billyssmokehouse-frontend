import draftImg from "../../assets/menu-banner-background.png";
import { useDeviceType } from "../../hooks/useDeviceType";

export const MenuDetailItem = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 1fr",
        width: "100%",
      }}
    >
      <div
        style={{
          justifySelf: "center",
          alignContent: "center",
        }}
      >
        <img
          src={draftImg}
          style={{
            width: device === "mobile" ? 300 : 450,
            borderRadius: 50,
            border: "1px solid black",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        description
      </div>
    </div>
  );
};
