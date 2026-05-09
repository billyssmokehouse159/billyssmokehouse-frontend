import { ActionButton } from "../Shared/ActionButton";

export const GiftCardBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10dvh",
        backgroundColor: "rgb(51 51 51)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActionButton link="/giftcard" text="Gift Cards" />
    </div>
  );
};
