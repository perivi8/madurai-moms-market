import { ArrowRight, ShoppingCart, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import storefrontImage from '@/assets/storefront-hero.jpg';

const CommunityHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-cream to-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-label font-semibold">
              ✨ Trusted Since 2013
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              Serving Madurai
              <span className="block text-primary">Families & Businesses</span>
              <span className="block text-2xl lg:text-3xl mt-2 text-muted-foreground">Since 2013</span>
            </h1>
            
            <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-lg">
              From fresh vegetables to bulk orders for your restaurant - we're your trusted 
              neighborhood grocery store with authentic local service and quality products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button font-label font-semibold px-8 py-3 text-base"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Groceries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-orange text-orange hover:bg-orange hover:text-orange-foreground font-label font-semibold px-8 py-3 text-base"
                size="lg"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Wholesale Inquiry
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6 text-sm font-body text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-lg">🚚</span>
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💳</span>
                <span>COD + UPI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <span>11+ Years Trusted</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-soft">
              <img
                src={storefrontImage}
                alt="Sri Meenakshi Store - Family grocery business in Madurai since 2013"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-product">
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    Family-Run Store
                  </h3>
                  <p className="text-sm font-body text-muted-foreground">
                    Authentic local service with personal attention to every customer's needs
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-xs font-body text-muted-foreground">
                    <span>📍 Madurai, Tamil Nadu</span>
                    <span>👥 1000+ Happy Families</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;