import { Link } from "react-router-dom";
import heroImage from "../assets/background/pexelsA.jpg";

const highlights = [
  {
    title: "Exquisite Rooms & Suites",
    description:
      "Immerse yourself in unparalleled comfort with our curated collection of premium accommodations.",
    image: heroImage,
    link: "/rooms",
  },
  {
    title: "World-Class Spa",
    description:
      "Rejuvenate your senses with our signature spa treatments and wellness programs.",
    image: heroImage,
    link: "/amenities",
  },
  {
    title: "Fine Dining Experience",
    description:
      "Savor culinary masterpieces crafted by our renowned chefs in an elegant ambiance.",
    image: heroImage,
    link: "/amenities",
  },
  {
    title: "Breathtaking Views",
    description:
      "Wake up to panoramic vistas that inspire awe and wonder at every moment.",
    image: heroImage,
    link: "/rooms",
  },
];

export function HighlightsSection() {
  return (
    <section className='py-20 sm:py-32 bg-secondary/50 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-muted-foreground mb-4 text-lg'>OUR HIGHLIGHTS</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground text-balance'>
            Discover What Makes Us Special
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {highlights.map((highlight, index) => (
            <Link
              key={index}
              to={highlight.link}
              className='group cursor-pointer'
            >
              <div className='overflow-hidden rounded-sm mb-6 h-64 sm:h-80'>
                <img
                  src={heroImage}
                  alt={highlight.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-muted-foreground transition-colors'>
                {highlight.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {highlight.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
