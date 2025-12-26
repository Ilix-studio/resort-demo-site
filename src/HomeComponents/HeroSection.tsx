import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/background/pexelsA.jpg";

export function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='relative w-full h-screen flex items-center justify-center overflow-hidden pt-16'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset}px)`,
          backgroundAttachment: "fixed",
        }}
      />

      <div className='absolute inset-0 bg-black/40' />

      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance'>
          Escape to Luxury
        </h1>
        <p className='text-lg sm:text-xl text-white/90 mb-8 leading-relaxed text-balance'>
          Experience the pinnacle of refined hospitality. Discover your
          sanctuary of elegance, comfort, and timeless beauty.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/rooms'
            className='px-8 py-3 bg-white text-black font-semibold rounded-sm hover:bg-white/90 transition-all duration-300 inline-block'
          >
            Explore Rooms
          </Link>
          <Link
            to='/booking'
            className='px-8 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-all duration-300 inline-block'
          >
            Book Your Stay
          </Link>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce'>
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </section>
  );
}
