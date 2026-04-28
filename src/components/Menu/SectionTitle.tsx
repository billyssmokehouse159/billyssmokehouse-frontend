
export const SectionTitle = ({
    title, subtitle,
}: {
    title: string;
    subtitle?: string;
}) => {
    return (
        <div style={{ marginBottom: "15px" }}>
            <div
                style={{
                    fontSize: "28px",
                    letterSpacing: "2px",
                    borderBottom: "1px solid #aaa",
                    display: "inline-block",
                }}
            >
                {title}
            </div>
            {subtitle && (
                <span
                    style={{
                        fontSize: "14px",
                        marginLeft: "8px",
                        color: "#ccc",
                    }}
                >
                    {subtitle}
                </span>
            )}
        </div>
    );
};
