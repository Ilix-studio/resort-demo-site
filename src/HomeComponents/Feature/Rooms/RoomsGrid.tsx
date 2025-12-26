import { useState } from "react";

import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/HomeComponents/Navbar";
import { RoomsHero } from "./RoomsHero";
import heroImage from "../../../assets/background/pexelsA.jpg";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 320,
    image: heroImage,
    description:
      "Elegant rooms with premium amenities and partial mountain views",
    amenities: ["King Bed", "Marble Bath", "City View", "Mini Bar"],
  },
  {
    id: 2,
    name: "Suite Panorama",
    price: 520,
    image: heroImage,
    description:
      "Spacious suites with separate living areas and panoramic views",
    amenities: ["King Bed", "Soaking Tub", "Panoramic View", "Concierge"],
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: 980,
    image: heroImage,
    description: "The ultimate luxury experience with exclusive services",
    amenities: ["2 King Beds", "Private Spa", "360° Views", "Butler Service"],
  },
  {
    id: 4,
    name: "Garden Bungalow",
    price: 450,
    image: heroImage,
    description:
      "Private bungalows nestled in lush gardens with direct access to nature",
    amenities: ["King Bed", "Garden Terrace", "Outdoor Shower", "Fireplace"],
  },
  {
    id: 5,
    name: "Cliff Residence",
    price: 680,
    image: heroImage,
    description:
      "Exclusive residences perched on cliff edges with breathtaking vistas",
    amenities: ["King Bed", "Infinity Pool", "Ocean View", "Wine Bar"],
  },
  {
    id: 6,
    name: "Penthouse Retreat",
    price: 1200,
    image: heroImage,
    description: "Ultimate luxury above the world with private rooftop access",
    amenities: ["2 King Beds", "Rooftop", "Spa Pool", "Chef Kitchen"],
  },
];

export function RoomsGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Navbar />
      <RoomsHero />
      <section className='py-20 sm:py-32 bg-background px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {rooms.map((room) => (
              <div
                key={room.id}
                className='group flex flex-col bg-card rounded-sm overflow-hidden border border-border hover:border-muted-foreground transition-colors duration-300'
              >
                <div className='relative h-64 overflow-hidden bg-secondary'>
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <button
                    onClick={() => toggleFavorite(room.id)}
                    className='absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10'
                    aria-label='Add to favorites'
                  >
                    <Heart
                      size={20}
                      className={
                        favorites.includes(room.id)
                          ? "fill-red-500 text-red-500"
                          : "text-foreground"
                      }
                    />
                  </button>
                </div>

                <div className='flex flex-col flex-grow p-6 sm:p-8'>
                  <h3 className='text-2xl font-bold text-foreground mb-2'>
                    {room.name}
                  </h3>
                  <p className='text-muted-foreground mb-4 leading-relaxed text-sm'>
                    {room.description}
                  </p>

                  <div className='mb-6'>
                    <p className='text-sm text-muted-foreground mb-3'>
                      AMENITIES
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {room.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className='text-xs px-3 py-1 bg-secondary text-foreground rounded-full border border-border'
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='mt-auto pt-6 border-t border-border flex items-end justify-between'>
                    <div>
                      <p className='text-sm text-muted-foreground mb-1'>
                        Price per night
                      </p>
                      <p className='text-3xl font-bold text-foreground'>
                        ₹{room.price}
                      </p>
                    </div>
                    <Link
                      to='/booking'
                      className='px-6 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors font-semibold'
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
