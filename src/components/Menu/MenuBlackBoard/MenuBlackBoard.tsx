import { useDeviceType } from "../../../hooks/useDeviceType";
import { MenuItem } from "./MenuItem";
import { SectionTitle } from "./SectionTitle";

export const MenuBlackBoard = () => {
  const device = useDeviceType();

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
          gridTemplateColumns:
            device === "mobile" ? "1fr" : "2fr 1px 2fr 1px 2fr",
          gap: "30px",
          maxWidth: "750px",
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
          <MenuItem name="Short Ribs" price="26" note="per 300g" />
          <MenuItem name="Links" price="7" />
          <MenuItem name="Picanha" price="12" />
          <MenuItem name="Bavette" price="13" />

          <SectionTitle title="Sandwiches" />
          <MenuItem name="Briskwich" price="15" />
          <MenuItem name="Lexington Smash" price="13" />
          <MenuItem name="Chicken Sando" price="13" />
          <MenuItem name="Choripan" price="10" />
          <MenuItem name="Bone Marrow Smash" price="16" />
          <MenuItem name="Pulled Beef Taco" price="7" />
        </div>

        {device !== "mobile" && (
          <div
            style={{
              width: "1px",
              background: "#666",
            }}
          />
        )}

        <div>
          <SectionTitle title="Sides" subtitle="and Whatnot" />
          <MenuItem name="Sriracha Corn" price="5" />
          <MenuItem name="Bone Marrow on Toast" price="6" />
          <MenuItem name="Mac & Cheese" price="6" />
          <MenuItem name="Skin-on Garlic Mash" price="6" />
          <MenuItem name="Texas Slaw" price="6" />
          <MenuItem name="Potato Salad" price="6" />
          <MenuItem name="Beetroot Salad" price="6" />
          <MenuItem name="Chicken Salt Fries" price="4" />
          <MenuItem name="House Pickles" price="2" />
          <MenuItem name="Texas Toast" price="1" />

          {/* Sauces */}
          <MenuItem name="Scotch Bonnet Mayo" price="1" />
          <MenuItem name="Coffee BBQ" price="1" />
          <MenuItem name="Marrow Gravy" price="1" />
          <MenuItem name="Chipotle Salsa" price="1" />
          <MenuItem name="Ranch" price="1" />
        </div>
        
        {device !== "mobile" && (
          <div
            style={{
              width: "1px",
              background: "#666",
            }}
          />
        )}
        <div>
          <SectionTitle title="Drink" />
          <MenuItem name="Water" price="2" />
          <MenuItem name="Jarriots" price="3.50" />
        </div>
      </div>
    </div>
  );
};
