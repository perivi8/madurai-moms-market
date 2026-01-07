import { useState } from 'react';
import { ArrowRight, ShoppingCart, Building2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommunityHero from '@/components/CommunityHero';
import CategoryTiles from '@/components/CategoryTiles';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const navigate = useNavigate();
  
  // Mock featured products data
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Basmati Rice',
      image: '/shop/1.jpg',
      retailPrice: 120,
      wholesalePrice: 100,
      unit: 'kg',
      category: 'Food Staples',
      discount: 10
    },
    {
      id: '2',
      name: 'Tata Tea Premium',
      image: '/shop/2.jpg',
      retailPrice: 85,
      wholesalePrice: 70,
      unit: '500g',
      category: 'Beverages'
    },
    {
      id: '3',
      name: 'Fortune Sunflower Oil',
      image: '/shop/3.jpg',
      retailPrice: 180,
      wholesalePrice: 165,
      unit: 'litre',
      category: 'Food Staples'
    },
    {
      id: '4',
      name: 'Parle-G Biscuits',
      image: '/shop/4.jpg',
      retailPrice: 25,
      unit: 'pack',
      category: 'Packaged Foods'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Community Hero Section */}
      <CommunityHero />
      
      {/* Category Tiles */}
      <CategoryTiles />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Fresh arrivals and popular items from our store
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-label font-semibold px-8 py-3"
              onClick={() => navigate('/shop')}
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-cream/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-label font-semibold mb-6">
                🏪 Our Story
              </div>
              
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                A Family Store Built on Trust
              </h2>
              
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Since 2018, Sri Meenakshi Store has been more than just a grocery shop - 
                  we're part of the Madurai community. What started as a small family business 
                  has grown into a trusted destination for both households and local businesses.
                </p>
                <p>
                  We believe in personal relationships, quality products, and authentic service. 
                  Every customer is treated like family, whether you're buying vegetables for 
                  dinner or bulk supplies for your restaurant.
                </p>
                <p>
                  Our commitment remains the same: fresh products, fair prices, and the 
                  personal touch that makes all the difference in your shopping experience.
                </p>
              </div>

              <div className="flex items-center gap-8 mt-8 text-sm font-body">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">Family Owned</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Building2 className="h-5 w-5" />
                  <span className="font-semibold">Local Business</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-orange/10 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🏪</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Heritage Since 2018
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">1000+</div>
                    <div className="text-sm font-body text-muted-foreground">Regular Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-orange">50+</div>
                    <div className="text-sm font-body text-muted-foreground">Business Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Order Groceries Online Today
          </h2>
          <p className="text-lg font-body opacity-90 mb-8 max-w-2xl mx-auto">
            Fresh products delivered to your doorstep. COD and UPI available. 
            Free delivery on orders above ₹500.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-white text-primary hover:bg-cream font-label font-semibold px-8 py-3 text-base"
              size="lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
            
            <Button 
              onClick={() => navigate('/wholesale')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-label font-semibold px-8 py-3 text-base"
              size="lg"
            >
              <Building2 className="mr-2 h-5 w-5" />
              Wholesale Inquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
