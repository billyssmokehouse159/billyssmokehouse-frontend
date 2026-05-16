import { useDeviceType } from "../../../../hooks/useDeviceType";
import { ItemWrapperHorizontal } from "../ItemWrapperHorizontal";
import { ItemWrapperHorizontalThreePictures } from "../ItemWrapperHorizontalThreePictures";
import { ItemWrapperVertical } from "../ItemWrapperVertical";

export const MenuDetailItemProteins = () => {
  const device = useDeviceType();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: 80,
        width: "100%",
      }}
    >
      <ItemWrapperHorizontal />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 1fr",
          justifySelf: "center",
          columnGap: "80px",
          rowGap: "50px",
          overflow: "scroll",
        }}
      >
        <ItemWrapperVertical />
        <ItemWrapperVertical />
      </div>
      <ItemWrapperHorizontalThreePictures />
      <ItemWrapperHorizontal />
    </div>
  );
};


