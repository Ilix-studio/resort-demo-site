import { Droplet, Utensils, Dumbbell, Leaf, Music, Zap } from "lucide-react";
import { AmenitiesHero } from "./AmenitiesHero";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import heroImage from "../../assets/background/pexelsA.jpg";

const amenities = [
  {
    id: 1,
    title: "Infinity Pool & Spa",
    description:
      "Immerse yourself in our heated infinity pool overlooking the valley, followed by rejuvenating treatments at our award-winning spa.",
    image: heroImage,
    icon: Droplet,
  },
  {
    id: 2,
    title: "Fine Dining Restaurant",
    description:
      "Savor exquisite cuisines prepared by Michelin-trained chefs in an intimate setting with breathtaking views.",
    image: heroImage,
    icon: Utensils,
  },
  {
    id: 3,
    title: "Fitness Center",
    description:
      "State-of-the-art equipment, personal training, and yoga classes in our fully equipped wellness studio.",
    image: heroImage,
    icon: Dumbbell,
  },
  {
    id: 4,
    title: "Botanical Gardens",
    description:
      "Wander through meticulously landscaped gardens featuring rare flora and peaceful meditation spaces.",
    image: heroImage,
    icon: Leaf,
  },
  {
    id: 5,
    title: "Entertainment Lounge",
    description:
      "Live music performances, cocktail bar, and curated entertainment events throughout the week.",
    image: heroImage,
    icon: Music,
  },
  {
    id: 6,
    title: "Concierge Services",
    description:
      "24/7 dedicated concierge available for restaurant reservations, tours, and special arrangements.",
    image: heroImage,
    icon: Zap,
  },
];

export function AmenitiesGrid() {
  return (
    <>
      <Navbar />
      <AmenitiesHero />

      <section className='py-20 sm:py-32 bg-background px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.id}
                  className='group flex flex-col bg-card rounded-sm overflow-hidden border border-border hover:border-muted-foreground transition-all duration-300 hover:shadow-lg'
                >
                  <div className='relative h-56 overflow-hidden bg-secondary'>
                    <img
                      src={amenity.image || "/placeholder.svg"}
                      alt={amenity.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                  </div>

                  <div className='p-6 sm:p-8 flex flex-col flex-grow'>
                    <div className='flex items-start gap-4 mb-4'>
                      <div className='p-3 bg-secondary rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                        <Icon size={24} />
                      </div>
                      <h3 className='text-2xl font-bold text-foreground'>
                        {amenity.title}
                      </h3>
                    </div>
                    <p className='text-muted-foreground leading-relaxed'>
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='mt-20 sm:mt-32 pt-20 sm:pt-32 border-t border-border'>
            <div className='text-center max-w-3xl mx-auto'>
              <p className='text-muted-foreground mb-6 text-lg'>
                ADDITIONAL SERVICES
              </p>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance'>
                Everything You Could Desire
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                From personalized wellness programs to exclusive excursions,
                airport transfers to babysitting services, our resort offers
                comprehensive amenities to ensure your stay is absolutely
                perfect.
              </p>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-left'>
                {[
                  "Airport Transfers",
                  "Room Service",
                  "Laundry Service",
                  "Car Rental",
                  "Event Spaces",
                  "Business Center",
                ].map((service, idx) => (
                  <div key={idx} className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-primary rounded-full' />
                    <span className='text-foreground'>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
