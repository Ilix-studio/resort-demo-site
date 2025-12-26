import type React from "react";

import { useState } from "react";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { Footer } from "@/HomeComponents/Footer";
import { Navbar } from "@/HomeComponents/Navbar";
import { BookingHero } from "./BookingHero";

const rooms = [
  { id: "deluxe", name: "Deluxe Room", price: 320 },
  { id: "panorama", name: "Suite Panorama", price: 520 },
  { id: "garden", name: "Garden Bungalow", price: 450 },
  { id: "cliff", name: "Cliff Residence", price: 680 },
  { id: "presidential", name: "Presidential Suite", price: 980 },
  { id: "penthouse", name: "Penthouse Retreat", price: 1200 },
];

export function BookingForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState("deluxe");
  const [showRoomDropdown, setShowRoomDropdown] = useState(false);

  const selectedRoomData = rooms.find((r) => r.id === selectedRoom);
  const checkInDate = checkIn ? new Date(checkIn) : null;
  const checkOutDate = checkOut ? new Date(checkOut) : null;
  const nights =
    checkInDate && checkOutDate
      ? Math.ceil(
          (checkOutDate.getTime() - checkInDate.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;
  const totalPrice = nights > 0 ? nights * (selectedRoomData?.price || 0) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Booking confirmed!\nRoom: ${
        selectedRoomData?.name
      }\nGuests: ${guests}\nNights: ${nights}\nTotal: $${totalPrice.toLocaleString()}`
    );
  };

  return (
    <>
      <Navbar />
      <BookingHero />
      <section className='py-20 sm:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto'>
          <form
            onSubmit={handleSubmit}
            className='bg-card rounded-sm border border-border p-8 sm:p-12'
          >
            <h2 className='text-3xl font-bold text-foreground mb-8 text-balance'>
              Your Booking Details
            </h2>

            <div className='space-y-8'>
              {/* Check-in & Check-out */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='check-in'
                    className='block text-sm font-semibold text-foreground mb-3'
                  >
                    Check-in Date
                  </label>
                  <div className='relative'>
                    <Calendar className='absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none' />
                    <input
                      id='check-in'
                      type='date'
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className='w-full pl-12 pr-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='check-out'
                    className='block text-sm font-semibold text-foreground mb-3'
                  >
                    Check-out Date
                  </label>
                  <div className='relative'>
                    <Calendar className='absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none' />
                    <input
                      id='check-out'
                      type='date'
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className='w-full pl-12 pr-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50'
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor='guests'
                  className='block text-sm font-semibold text-foreground mb-3'
                >
                  Number of Guests
                </label>
                <div className='relative'>
                  <Users className='absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none' />
                  <select
                    id='guests'
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className='w-full pl-12 pr-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer'
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none' />
                </div>
              </div>

              {/* Room Selection */}
              <div>
                <label
                  htmlFor='room'
                  className='block text-sm font-semibold text-foreground mb-3'
                >
                  Select Room Type
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => setShowRoomDropdown(!showRoomDropdown)}
                    className='w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-between'
                  >
                    <span>{selectedRoomData?.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        showRoomDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showRoomDropdown && (
                    <div className='absolute top-full left-0 right-0 mt-2 border border-border rounded-sm bg-card shadow-lg z-10'>
                      {rooms.map((room) => (
                        <button
                          key={room.id}
                          type='button'
                          onClick={() => {
                            setSelectedRoom(room.id);
                            setShowRoomDropdown(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex justify-between items-center hover:bg-secondary transition-colors ${
                            selectedRoom === room.id
                              ? "bg-secondary border-l-2 border-primary"
                              : ""
                          }`}
                        >
                          <span className='text-foreground'>{room.name}</span>
                          <span className='text-muted-foreground text-sm'>
                            ₹{room.price}/night
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Price Summary */}
              <div className='pt-6 border-t border-border space-y-3'>
                <div className='flex justify-between text-muted-foreground'>
                  <span>Room Rate</span>
                  <span>₹{selectedRoomData?.price || 0}/night</span>
                </div>
                <div className='flex justify-between text-muted-foreground'>
                  <span>Number of Nights</span>
                  <span>{nights > 0 ? nights : "—"}</span>
                </div>
                <div className='flex justify-between text-2xl font-bold text-foreground pt-3 border-t border-border'>
                  <span>Total Price</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={!checkIn || !checkOut || nights <= 0}
                className='w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-8'
              >
                Confirm Booking
              </button>

              <p className='text-sm text-muted-foreground text-center'>
                This is a demonstration booking form. No actual reservation will
                be made.
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
