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
          fontSize: "34px",
          fontWeight: 700,
          color: "#4a2c2a",
          justifyContent: "center",
          gap:20
        }}
      >
        Title
      </div>
      <MenuDetailItem />
      <MenuDetailItem />
      <MenuDetailItem />
      <MenuDetailItem />
      <MenuDetailItem />
    </div>
  );
};
