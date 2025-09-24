import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Information */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Sri Meenakshi Store</h3>
            <p className="text-sm font-body mb-4 opacity-90">
              Serving Madurai Families & Businesses Since 2016
            </p>
            <p className="text-xs font-body opacity-80 leading-relaxed">
              A trusted family-run grocery store committed to providing fresh, 
              quality products to our community with authentic local service.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-base font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 opacity-75" />
                <span className="font-body">+91 96555 86100</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 opacity-75" />
                <span className="font-body">contact@srimeenakshi.store</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 opacity-75" />
                <span className="font-body">srimeenakshistore388@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 opacity-75 mt-0.5" />
                <span className="font-body leading-relaxed">
                  NO 725, SRI MEENAKSHI STORE<br />
                  TNHB COLONY, MELA ANUPANADI<br />
                  MADURAI SOUTH, Madurai, Tamil Nadu, 625009
                </span>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="text-base font-heading font-semibold mb-4">Store Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 opacity-75" />
                <div className="font-body">
                  <div>Monday - Saturday</div>
                  <div className="opacity-90">8:00 AM - 8:00 PM</div>
                </div>
              </div>
              <div className="text-sm font-body mt-2">
                <div>Sunday: 8:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Shop Groceries', href: '/shop' },
                { name: 'Wholesale', href: '/wholesale' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm font-body hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <Facebook className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-body opacity-80">
              © 2025 Sri Meenakshi Store. All rights reserved. | Family Business Since 2016
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-body opacity-80">
              <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
              <Link to="/shipping-delivery" className="hover:opacity-100 transition-opacity">
                Shipping & Delivery
              </Link>
              <Link to="/cancellation-refund" className="hover:opacity-100 transition-opacity">
                Cancellation & Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;