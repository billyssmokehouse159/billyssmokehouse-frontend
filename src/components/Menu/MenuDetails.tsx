import { MenuDetailItem } from "./MenuDetailItem";


export const MenuDetails = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 100,
                // backgroundColor: "rgb(165, 42, 42) ",
            }}
        >
            <div
                style={{
                    marginTop: 20,
                }}
            ></div>
            <MenuDetailItem />
            <MenuDetailItem />
            <MenuDetailItem />
            <MenuDetailItem />
            <MenuDetailItem />
        </div>
    );
};
