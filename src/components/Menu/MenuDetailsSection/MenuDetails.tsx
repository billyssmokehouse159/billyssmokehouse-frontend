import { useState } from "react";
import { MenuDetailItem } from "./MenuDetailItem";
import { useDeviceType } from "../../../hooks/useDeviceType";

type SectionTypes = "Proteins" | "Sandwiches" | "Sides" | "Drink";

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
        <SectionHeading value={"Proteins"} setSection={setSection}/>
        <SectionHeading value={"Sandwiches"} setSection={setSection}/>
        <SectionHeading value={"Sides"} setSection={setSection}/>
        <SectionHeading value={"Drink"} setSection={setSection}/>
      </div>
      <div style={{ paddingTop: 50 }}>
        {section === "Proteins" && <MenuDetailItem />}
      </div>
    </div>
  );
};
export const SectionHeading = ({
  value,
  setSection,
}: {
  value: SectionTypes;
  setSection: (value: SectionTypes) => void;
}) => {
  const device = useDeviceType();

  return (
    <div
      style={{
        display: "flex",
        fontSize: device === "mobile" ? "24px" : device === "tablet" ? "40px" : "74px",
        fontWeight: 700,
        color: "#4a2c2a",
        justifyContent: "center",
        gap: 20,
        letterSpacing: "-0.02em",
        borderBottom: "3px solid #c97d5e",
        paddingBottom: device === "mobile" ? "0px" : "8px",
        width: "fit-content",
        margin: "0 auto",
        cursor: "pointer",
      }}
      onClick={() => setSection(value)}
    >
      {value}
    </div>
  );
};
