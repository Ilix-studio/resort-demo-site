import { useEffect, useState } from "react";
import heroImage from "../assets/background/pexelsA.jpg";

export function ParallaxExperienceSection() {
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
        {/* Left: Parallax Background Image */}
        <div className='relative h-96 lg:h-full overflow-hidden'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              transform: `translateY(${offset * 0.5}px)`,
            }}
          >
            <img
              src={heroImage}
              alt='Experience'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='absolute inset-0 bg-black/20' />
        </div>

        {/* Right: Content */}
        <div className='flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0'>
          <div className='max-w-lg'>
            <p className='text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4'>
              Our Experience
            </p>
            <h2 className='text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight text-balance'>
              Unparalleled Wellness & Relaxation
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-8'>
              Immerse yourself in our world-class spa facilities, where ancient
              wellness traditions meet modern luxury. Our expert therapists
              craft personalized treatments designed to restore balance and
              rejuvenate your spirit.
            </p>
            <ul className='space-y-4 text-gray-700'>
              <li className='flex items-start gap-3'>
                <span className='text-black font-bold text-xl mt-1'>✓</span>
                <span>Holistic wellness programs tailored to your needs</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-black font-bold text-xl mt-1'>✓</span>
                <span>Premium skincare and body treatments</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-black font-bold text-xl mt-1'>✓</span>
                <span>Meditation and yoga sessions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
