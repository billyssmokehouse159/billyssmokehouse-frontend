import { MenuDetailItem } from "./MenuDetailItem";

export const MenuDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 50,
        paddingTop: "30px",
        backgroundColor: "rgb(230, 225, 219)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "74px",
          fontWeight: 700,
          color: "#4a2c2a",
          justifyContent: "center",
          gap: 20,
          letterSpacing: "-0.02em",
          borderBottom: "3px solid #c97d5e",
          paddingBottom: "8px",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        Proteins
      </div>
     
      <MenuDetailItem />
      {/* <MenuDetailItem />
      <MenuDetailItem />
      <MenuDetailItem />
      <MenuDetailItem /> */}
    </div>
  );
};
