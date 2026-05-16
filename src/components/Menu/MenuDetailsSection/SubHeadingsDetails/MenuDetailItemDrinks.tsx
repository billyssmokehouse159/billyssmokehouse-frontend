import { ItemWrapperHorizontalThreePictures } from "../ItemWrapperHorizontalThreePictures";


export const MenuDetailItemDrinks = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: 80,
        width: "100%",
      }}
    >
      <ItemWrapperHorizontalThreePictures />
    </div>
  );
};
