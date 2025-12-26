import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
          {/* Brand */}
          <div>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-8 h-8 bg-primary-foreground rounded-sm flex items-center justify-center'>
                <span className='text-primary font-bold text-lg'>K</span>
              </div>
              <span className='font-semibold text-lg'>Kaziranga Resort</span>
            </div>
            <p className='text-primary-foreground/80 leading-relaxed text-sm'>
              Experience unparalleled luxury and timeless elegance at our
              world-class resort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold mb-6 text-lg'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/rooms'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  to='/amenities'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  to='/booking'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className='font-semibold mb-6 text-lg'>Information</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/contact'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href='#'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <Link to='/dashboard'>
              <h3 className='font-semibold mb-6 text-lg'>Follow Us</h3>
            </Link>
            <div className='flex gap-4'>
              <a
                href='#'
                className='p-2 bg-primary-foreground/10 rounded-sm hover:bg-primary-foreground/20 transition-colors'
                aria-label='Facebook'
              >
                <Facebook size={20} />
              </a>
              <a
                href='#'
                className='p-2 bg-primary-foreground/10 rounded-sm hover:bg-primary-foreground/20 transition-colors'
                aria-label='Instagram'
              >
                <Instagram size={20} />
              </a>
              <a
                href='#'
                className='p-2 bg-primary-foreground/10 rounded-sm hover:bg-primary-foreground/20 transition-colors'
                aria-label='Twitter'
              >
                <Twitter size={20} />
              </a>
              <a
                href='#'
                className='p-2 bg-primary-foreground/10 rounded-sm hover:bg-primary-foreground/20 transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-primary-foreground/80 text-sm'>
            © 2025 Kaziranga Resort Resort. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <a
              href='#'
              className='text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors'
            >
              Sitemap
            </a>
            <a
              href='#'
              className='text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
