export function RoomsHero() {
  return (
    <section className='relative w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden pt-16 bg-foreground/5'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: 'url("/luxury-resort-bedroom-interior.jpg")',
          opacity: 0.3,
        }}
      />
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance'>
          Our Rooms & Suites
        </h1>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Discover a sanctuary of comfort and sophistication
        </p>
      </div>
    </section>
  );
}
