import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import BookRide from "./pages/BookRide";
import Bookings from "./pages/Bookings";
import About from "./Pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/book-ride" element={<BookRide />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;