import billyslogo from "../../assets/logo.jpg";

export const Logo = ({
  miniLogo,
  isMobile,
}: {
  miniLogo?: boolean;
  isMobile?: boolean;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifySelf: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <img
        height={isMobile ? 350 : miniLogo ? 100 : "250"}
        width={isMobile ? "100%" : miniLogo ? "100px" : "250"}
        src={billyslogo}
        alt="logo"
        onClick={()=>{window.location.href="/"}}
        style={{cursor: "pointer"}}
      />
    </div>
  );
};
