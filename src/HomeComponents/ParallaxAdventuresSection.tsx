import { useEffect, useState } from "react";
import heroImage from "../assets/background/pexelsA.jpg";

export function ParallaxAdventuresSection() {
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
      {/* Background image with parallax */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-15'
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset * 0.4}px)`,
        }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-white/85' />

      {/* Content */}
      <div className='relative z-10 max-w-6xl mx-auto px-6 sm:px-8'>
        <div className='text-center mb-16'>
          <p className='text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4'>
            Explore & Discover
          </p>
          <h2 className='text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight text-balance'>
            Outdoor Adventures Await
          </h2>
          <p className='text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed'>
            From guided mountain hikes to water sports and cultural excursions,
            discover the natural beauty surrounding our resort.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='text-5xl mb-4'>🏔️</div>
            <h3 className='text-2xl font-bold text-black mb-3'>
              Mountain Hiking
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              Explore breathtaking trails with expert guides and experience
              panoramic views of the valley.
            </p>
          </div>

          <div className='bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='text-5xl mb-4'>🚙</div>
            <h3 className='text-2xl font-bold text-black mb-3'>Jeep Safari</h3>
            <p className='text-gray-700 leading-relaxed'>
              Explore the wilderness in comfort with our guided jeep safaris.
              Spot wildlife and discover hidden gems throughout the region.
            </p>
          </div>

          <div className='bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='text-5xl mb-4'>🐘</div>
            <h3 className='text-2xl font-bold text-black mb-3'>
              Elephant Safari
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              Experience the magic of wildlife encounters with our guided
              elephant safaris. natural wonders of the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
