import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import { AmenitiesGrid } from "./HomeComponents/Feature/AmenitiesGrid";
import { BookingForm } from "./HomeComponents/Feature/Booking/BookingForm";

import { RoomsGrid } from "./HomeComponents/Feature/Rooms/RoomsGrid";

const App = () => {
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
