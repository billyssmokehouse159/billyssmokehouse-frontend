import { ActionButton } from "../Shared/ActionButton";

export const MenuBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10dvh",
        backgroundColor: "Black",

        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ActionButton link="/menu" text="Menu" />
    </div>
  );
};
