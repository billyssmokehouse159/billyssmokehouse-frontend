import draftImg from "../../../assets/menu-banner-background.png";
import { useDeviceType } from "../../../hooks/useDeviceType";

export const ItemWrapperVertical = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "5px solid #c97e5d",
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={draftImg}
        style={{
          width: device === "mobile" || device === "tablet" ? 250 : 450,
          padding:
            device === "mobile" ? "20px 20px 20px 20px" : "50px 50px 0px 50px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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

