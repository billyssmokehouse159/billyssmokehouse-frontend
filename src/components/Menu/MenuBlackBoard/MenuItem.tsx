
export const MenuItem = ({
    name, price, note,
}: {
    name: string;
    price: string;
    note?: string;
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontSize: "20px",
            }}
        >
            <span>
                {name}{" "}
                {note && (
                    <span style={{ fontSize: "14px", color: "#aaa" }}>({note})</span>
                )}
            </span>
            <span>£{price}</span>
        </div>
    );
};
