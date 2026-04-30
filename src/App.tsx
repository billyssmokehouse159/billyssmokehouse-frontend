import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./components/Pages/LandingPage";
import { LocationPage } from "./components/Pages/LocationPage";
import { MenuPage } from "./components/Pages/MenuPage";
import { ContactPage } from "./components/Pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
