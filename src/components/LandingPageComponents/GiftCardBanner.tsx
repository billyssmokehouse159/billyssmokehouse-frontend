import { ActionButton } from "../Shared/ActionButton";

export const GiftCardBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10dvh",
        backgroundColor: "rgb(255 176 5 / 21%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActionButton
      link="/giftcard"
      text="Gift Cards"
      />
    </div>
  );
};