import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = isScrolled
    ? "text-foreground hover:text-muted-foreground"
    : "text-white hover:text-white/80";

  const logoTextClasses = isScrolled ? "text-foreground" : "text-white";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-primary rounded-sm flex items-center justify-center'>
              <span className='text-primary-foreground font-bold text-lg'>
                L
              </span>
            </div>
            <span
              className={`hidden sm:inline font-semibold transition-colors duration-300 ${logoTextClasses}`}
            >
              Luminaire
            </span>
          </Link>

          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to='/'
              className={`transition-colors duration-300 ${linkClasses}`}
            >
              Home
            </Link>
            <Link
              to='/rooms'
              className={`transition-colors duration-300 ${linkClasses}`}
            >
              Rooms
            </Link>
            <Link
              to='/amenities'
              className={`transition-colors duration-300 ${linkClasses}`}
            >
              Amenities
            </Link>
            <Link
              to='/contact'
              className={`transition-colors duration-300 ${linkClasses}`}
            >
              Contact
            </Link>
            <Link to='/booking' className='block'>
              <button className='px-6 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors'>
                Book Now
              </button>
            </Link>
          </div>

          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className='md:hidden pb-4 border-t border-border bg-background/95 backdrop-blur-sm'>
            <Link
              to='/'
              className='block px-4 py-2 text-foreground hover:bg-secondary rounded-sm'
            >
              Home
            </Link>
            <Link
              to='/rooms'
              className='block px-4 py-2 text-foreground hover:bg-secondary rounded-sm'
            >
              Rooms
            </Link>
            <Link
              to='/amenities'
              className='block px-4 py-2 text-foreground hover:bg-secondary rounded-sm'
            >
              Amenities
            </Link>
            <Link
              to='/contact'
              className='block px-4 py-2 text-foreground hover:bg-secondary rounded-sm'
            >
              Contact
            </Link>
            <Link to='/booking' className='block'>
              <button className='w-full mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors'>
                Book Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
