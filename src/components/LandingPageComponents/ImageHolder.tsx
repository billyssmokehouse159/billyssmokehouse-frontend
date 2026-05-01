
export const ImageHolder = ({ src }: { src: string; }) => {
  return (
    <div
      style={{
        marginTop: "30px",
        height: "80%",
        width: "230px",
        backgroundColor: "blue",
      }}
    >
      <img src={src} width={"100%"} height={"100%"} />
    </div>
  );
};
