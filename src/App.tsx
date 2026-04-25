import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./components/Pages/LandingPage";
import { LocationPage } from "./components/Pages/LocationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
