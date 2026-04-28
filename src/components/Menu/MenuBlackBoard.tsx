import { MenuItem } from "./MenuItem";
import { SectionTitle } from "./SectionTitle";


export const MenuBlackBoard = () => {
    return (
        <div
            style={{
                marginTop: 50,
            }}
        >
            <div
                style={{
                    background: "#111",
                    border: "14px solid #9b4f1d",
                    padding: "30px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1px 1fr",
                    gap: "30px",
                    maxWidth: "700px",
                    margin: "0 auto",
                    color: "#f5eee1",
                    fontFamily: "'Bebas Neue', sans-serif",
                }}
            >
                <div>
                    <SectionTitle title="Proteins" subtitle="by 100g" />
                    <MenuItem name="Brisket" price="12" />
                    <MenuItem name="Te Mana Lamb" price="13" />
                    <MenuItem name="Birds" price="5" />
                    <MenuItem name="Short Ribs" price="24" note="per 300g" />
                    <MenuItem name="Links" price="7" />

                    <SectionTitle title="Sandwiches" />
                    <MenuItem name="Briskwich" price="15" />
                    <MenuItem name="Chicken Sando" price="13" />
                    <MenuItem name="Lexington Smash" price="13" />
                    <MenuItem name="Pulled Beef Taco" price="5" />
                </div>

                <div
                    style={{
                        width: "1px",
                        background: "#666",
                    }} />

                <div>
                    <SectionTitle title="Sides" subtitle="and Whatnot" />
                    <MenuItem name="Cauliflower Cheese" price="6" />
                    <MenuItem name="Garlic Mash" price="6" />
                    <MenuItem name="Texas Slaw" price="6" />
                    <MenuItem name="Chicken Salt Fries" price="4" />
                    <MenuItem name="House Pickles" price="2" />
                    <MenuItem name="Texas Toast" price="0.50" />
                    <MenuItem name="Tortilla" price="0.30" />
                    <MenuItem name="Coffee BBQ" price="1" />
                    <MenuItem name="Homemade Mayo" price="1" />
                    <MenuItem name="Chipotle Salsa" price="1" />
                    <MenuItem name="Ranch" price="1" />
                    <MenuItem name="Marrow Gravy" price="1" />
                </div>
            </div>
        </div>
    );
};
