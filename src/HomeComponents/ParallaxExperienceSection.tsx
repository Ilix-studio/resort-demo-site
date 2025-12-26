import heroImage from "../assets/background/pexelsA.jpg";

export function ParallaxExperienceSection() {
  return (
    <section className='relative w-full py-24 overflow-hidden bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]'>
        {/* Left: Image */}
        <div className='relative h-96 lg:h-auto lg:min-h-[500px]'>
          <img
            src={heroImage}
            alt='Wellness and relaxation experience'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>

        {/* Right: Content */}
        <div className='flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0'>
          <div className='max-w-lg'>
            <p className='text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4'>
              Our Experience
            </p>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
              Unparalleled Wellness & Relaxation
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-8'>
              Immerse yourself in our world-class spa facilities, where ancient
              wellness traditions meet modern luxury. Our expert therapists
              craft personalized treatments designed to restore balance and
              rejuvenate your spirit.
            </p>
            <ul className='space-y-4 text-gray-700'>
              <li className='flex items-center gap-3'>
                <svg
                  className='w-5 h-5 text-gray-900 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>Holistic wellness programs tailored to your needs</span>
              </li>
              <li className='flex items-center gap-3'>
                <svg
                  className='w-5 h-5 text-gray-900 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>Premium skincare and body treatments</span>
              </li>
              <li className='flex items-center gap-3'>
                <svg
                  className='w-5 h-5 text-gray-900 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>Meditation and yoga sessions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
