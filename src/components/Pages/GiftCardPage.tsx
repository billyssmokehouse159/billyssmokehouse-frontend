import { useEffect, useState } from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import { Footer } from "../Footer/Footer";
import { DesktopHeader } from "../Headers/DesktopHeader";
import { MobileHeader } from "../Headers/MobileHeader";

const API_URL =
  import.meta.env.VITE_ENV === "dev"
    ? import.meta.env.VITE_API_DEV
    : import.meta.env.VITE_ENV === "staging"
    ? import.meta.env.VITE_API_STAGING
    : import.meta.env.VITE_API_PROD; 

export const GiftCardPage = () => {
  const device = useDeviceType();
  const [checkoutLink, setCheckoutLink] = useState("");

  useEffect(() => {
    const fetchCheckoutLink = async () => {

      const response = await fetch(`${API_URL}/create-session`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: "iqralatif159@gmail.com",
          giftRecipient: "iqralatif159@gmail.com",
          giftCardId: "401",
        }),
      });

      const { url } = await response.json();
      setCheckoutLink(url);
    };
    fetchCheckoutLink();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100dvh",
      }}
    >
      <div>
        {(device === "desktop" || device === "tablet") && (
          <DesktopHeader miniLogo solidBackground />
        )}
        {device === "mobile" && <MobileHeader />}
      </div>
      <div
        style={{
          display: "grid",
          placeItems: device !== "mobile" ? "center" : "flex-start",
          minHeight: "100dvh",
          backgroundColor: "#e6e1db",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "48px",
              margin: 0,
              fontWeight: 700,
              color: "#222",
            }}
          >
            Coming Soon
          </h1>

          <p
            style={{
              marginTop: "12px",
              fontSize: "18px",
              color: "#555",
            }}
          >
            We’re working on something great — stay tuned.
          </p>
          <button
            onClick={() => (window.location.href = `${checkoutLink}`)}
          >
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
