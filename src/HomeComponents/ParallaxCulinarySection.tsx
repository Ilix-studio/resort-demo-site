import { useEffect, useState } from "react";
import heroImage from "../assets/background/pexelsA.jpg";

export function ParallaxCulinarySection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='relative w-full py-24 overflow-hidden bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-96'>
        {/* Left: Content */}
        <div className='flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0 order-2 lg:order-1'>
          <div className='max-w-lg'>
            <p className='text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4'>
              Culinary Excellence
            </p>
            <h2 className='text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight text-balance'>
              Savor Fine Dining Experiences
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-8'>
              Our award-winning chefs curate exquisite menus that blend
              international flavors with locally sourced ingredients. Each meal
              is an art form, designed to delight your senses and create
              unforgettable memories.
            </p>
            <ul className='space-y-4 text-gray-700'>
              <li className='flex items-start gap-3'>
                <span className='text-black font-bold text-xl mt-1'>✓</span>
                <span>Michelin-inspired tasting menus</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-black font-bold text-xl mt-1'>✓</span>
                <span>Farm-to-table fresh cuisine</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-black font-bold text-xl mt-1'>✓</span>
                <span>Wine pairing collections</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Parallax Background Image */}
        <div className='relative h-96 lg:h-full overflow-hidden order-1 lg:order-2'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage: `url(${heroImage})`,
              transform: `translateY(${offset * 0.5}px)`,
            }}
          />
          <div className='absolute inset-0 bg-black/20' />
        </div>
      </div>
    </section>
  );
}
