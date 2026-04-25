import type { HeaderProps } from "../../types";
import { NavMenu } from "./NavMenu";
import { Logo } from "./Logo";

export const MobileHeader = ({ solidBackground, miniLogo }: HeaderProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 0fr",
        backgroundColor: solidBackground ? "black" : "none",
      }}
    >
      <Logo miniLogo={miniLogo} isMobile={true} />
      <NavMenu />
    </div>
  );
};
