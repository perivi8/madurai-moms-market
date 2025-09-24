import { useState } from 'react';
import { ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount] = useState(3); // Mock cart count

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop Groceries', href: '/shop' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-cream border-b shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-heading font-bold text-primary">
              Sri Meenakshi Store
            </h1>
            <span className="ml-2 text-xs text-muted-foreground font-body">Since 2013</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp Contact */}
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-label text-xs">WhatsApp Order</span>
            </Button>

            {/* Cart */}
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-orange text-orange-foreground text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-body font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" className="mt-4 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-label text-sm">WhatsApp Order</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Seasonal Offers Strip */}
      <div className="bg-gradient-to-r from-orange to-orange/90 text-orange-foreground py-2 overflow-hidden">
        <div className="animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          <span className="inline-block px-8 text-sm font-label font-semibold">
            🎉 Festival Offers Available | 🚚 Free Delivery on Orders Above ₹500 | 📦 Bulk Discounts for Restaurants | 🥬 Fresh Stock Daily
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;