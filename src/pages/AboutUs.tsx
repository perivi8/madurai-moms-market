import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, Award, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-cream/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              About Sri Meenakshi Store
            </h1>
            <p className="text-xl font-body text-muted-foreground leading-relaxed">
              Serving the Madurai community for over two decades with fresh groceries, 
              quality products, and exceptional service. We are your trusted neighborhood store.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  Founded in 2003 by Mr. Rajesh Kumar, Sri Meenakshi Store began as a small 
                  neighborhood grocery shop with a simple mission: to provide fresh, quality 
                  products to the families of Madurai at affordable prices.
                </p>
                <p>
                  What started as a humble 500 sq ft store has now grown into a trusted name 
                  in the community, serving thousands of families with both retail and wholesale 
                  grocery needs. We take pride in our personal relationships with customers and 
                  our commitment to quality.
                </p>
                <p>
                  Today, we continue to uphold the same values that founded our store: 
                  integrity, quality, and service. Every product on our shelves is carefully 
                  selected to meet our high standards.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Sri Meenakshi Store exterior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Customer First
              </h3>
              <p className="font-body text-muted-foreground">
                Every decision we make is with our customers' best interests at heart.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Quality Assured
              </h3>
              <p className="font-body text-muted-foreground">
                We source only the finest products and maintain strict quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Community Focus
              </h3>
              <p className="font-body text-muted-foreground">
                We are deeply rooted in the Madurai community and committed to its growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Reliable Service
              </h3>
              <p className="font-body text-muted-foreground">
                Consistent, dependable service that you can count on, day after day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              The dedicated people behind Sri Meenakshi Store
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Rajesh Kumar - Founder"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                Rajesh Kumar
              </h3>
              <p className="font-body text-primary mb-2">Founder & Owner</p>
              <p className="font-body text-muted-foreground text-sm">
                With over 20 years of experience in retail, Rajesh leads our team with passion and dedication.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Priya Sharma - Store Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                Priya Sharma
              </h3>
              <p className="font-body text-primary mb-2">Store Manager</p>
              <p className="font-body text-muted-foreground text-sm">
                Priya ensures smooth operations and maintains our high standards of customer service.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Arjun Patel - Inventory Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                Arjun Patel
              </h3>
              <p className="font-body text-primary mb-2">Inventory Manager</p>
              <p className="font-body text-muted-foreground text-sm">
                Arjun manages our inventory and ensures we always have fresh products in stock.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
