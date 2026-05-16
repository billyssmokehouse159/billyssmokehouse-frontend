import { useDeviceType } from "../../../../hooks/useDeviceType";

export type SectionTypes = "Proteins" | "Sandwiches" | "Sides" | "Drinks";

export const SectionHeading = ({
  value, setSection,
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
