import heroImage from "../assets/background/pexelsA.jpg";

export function ParallaxCulinarySection() {
  return (
    <section className='relative w-full py-24 overflow-hidden bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]'>
        {/* Left: Content */}
        <div className='flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0 order-2 lg:order-1'>
          <div className='max-w-lg'>
            <p className='text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4'>
              Culinary Excellence
            </p>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
              Savor Fine Dining Experiences
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-8'>
              Our award-winning chefs curate exquisite menus that blend
              international flavors with locally sourced ingredients. Each meal
              is an art form, designed to delight your senses and create
              unforgettable memories.
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
                <span>Michelin-inspired tasting menus</span>
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
                <span>Farm-to-table fresh cuisine</span>
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
                <span>Wine pairing collections</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Image */}
        <div className='relative h-96 lg:h-auto lg:min-h-[500px] order-1 lg:order-2'>
          <img
            src={heroImage}
            alt='Culinary experience'
            className='absolute inset-0 w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/20' />
        </div>
      </div>
    </section>
  );
}
