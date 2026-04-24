import { NavMenu } from "./NavMenu";
import { Logo } from "./Logo";
import type { HeaderProps } from "../../types";

export const DesktopHeader = ({ solidBackground, miniLogo }: HeaderProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 3fr",
        backgroundColor: solidBackground ? "black" : "none",
        opacity: solidBackground ? 0.8 : 1,
      }}
    >
      <Logo miniLogo={miniLogo} />
      <NavMenu />
    </div>
  );
};
