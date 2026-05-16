import { useDeviceType } from "../../../hooks/useDeviceType";
import draftImg from "../../../assets/menu-banner-background.png";

export const ItemWrapperHorizontalThreePictures = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 1fr",
        alignItems: "center",
        border: "5px solid #c97e5d",
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 1fr 1fr",
          justifyItems: "center",
          gap: 50,
        }}
      >
        <img
          src={draftImg}
          style={{
            width: device === "mobile" ? 300 : 150,
            padding:
              device === "mobile" ? "20px 0px 20px 0px" : "50px 0px 50px 0px",
          }}
        />
        <img
          src={draftImg}
          style={{
            width: device === "mobile" ? 300 : 150,
            padding:
              device === "mobile" ? "20px 0px 20px 0px" : "50px 0px 50px 0px",
          }}
        />
        <img
          src={draftImg}
          style={{
            width: device === "mobile" ? 300 : 150,
            padding:
              device === "mobile" ? "20px 0px 20px 0px" : "50px 0px 50px 0px",
          }}
        />
      </div>
      <div
        style={{
          padding:
            device === "mobile" ? "20px 20px 20px 20px" : "20px 50px 50px 50px",
          color: "#5a3e3b",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "35px",
            lineHeight: "1.6",
          }}
        >
          Title
        </div>
        <div
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          ex sed turpis faucibus, non hendrerit risus tempus. Morbi nec lacinia
          t Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          fringilla ex sed turpis faucibus, non hendrerit risus tempus. Morbi
          nec lacinia t Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed fringilla ex sed turpis faucibus, non hendrerit risus tempus.
          Morbi nec lacinia t
        </div>
      </div>
    </div>
  );
};
