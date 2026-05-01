import { ActionButton } from "../Shared/ActionButton";
import menuBackgroundImg from "../../assets/menu-banner-background.png"
export const MenuBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10dvh",
        backgroundColor: "rgb(255 176 5 / 21%)",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: `url(${menuBackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ActionButton link="/menu" text="Menu" />
    </div>
  );
};


