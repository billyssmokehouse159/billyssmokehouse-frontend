import { useState } from "react";
import { MenuDetailItemProteins } from "./SubHeadingsDetails/MenuDetailItemProteins";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { MenuDetailItemDrinks } from "./SubHeadingsDetails/MenuDetailItemDrinks";
import { SectionHeading, type SectionTypes } from "./SubHeadingsDetails/SectionHeading";


export const MenuDetails = () => {
  const device = useDeviceType();

  const [section, setSection] = useState<SectionTypes>("Proteins");
  return (
    <div
      style={{
        backgroundColor: "rgb(230, 225, 219)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: device === "mobile" ? "column" : "row",
          width: "100%",
          gap: 50,
          paddingTop: "30px",
        }}
      >
        <SectionHeading value={"Proteins"} setSection={setSection} />
        <SectionHeading value={"Sandwiches"} setSection={setSection} />
        <SectionHeading value={"Sides"} setSection={setSection} />
        <SectionHeading value={"Drinks"} setSection={setSection} />
      </div>
      <div style={{ paddingTop: 50 }}>
        {section === "Proteins" && <MenuDetailItemProteins />}
        {section === "Drinks" && <MenuDetailItemDrinks/>}
      </div>
    </div>
  );
};

