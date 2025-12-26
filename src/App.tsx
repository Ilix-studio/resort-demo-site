import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import { AmenitiesGrid } from "./HomeComponents/Feature/AmenitiesGrid";
import { BookingForm } from "./HomeComponents/Feature/Booking/BookingForm";

import { RoomsGrid } from "./HomeComponents/Feature/Rooms/RoomsGrid";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<RoomsGrid />} />
        <Route path='/amenities' element={<AmenitiesGrid />} />
        <Route path='/booking' element={<BookingForm />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
