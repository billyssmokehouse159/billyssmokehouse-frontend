
export const ActionButton = ({ link, text }: { link: string; text: string; }) => {
  return (
    <div
      onClick={() => (window.location.href = link)}
      style={{
        display: "flex",
        backgroundColor: "#e53935",
        color: "#fff",
        border: "none",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: 600,
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        width: 150,
        justifyContent: "center",
      }}
    >
      {text}
    </div>
  );
};
