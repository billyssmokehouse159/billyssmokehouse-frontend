export const ImageHolder = ({ src }: { src: string }) => {
  return (

      <div
        style={{
          marginTop: "30px",
          height: "80%",
          width: "260px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <img src={src} width={"100%"} height={"100%"} />
      </div>
  );
};
