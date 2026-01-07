import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, Award, Clock, Mail, Phone } from 'lucide-react';

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
              Serving the Madurai community since 2018 with fresh groceries, 
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
                  Founded in 2018 by Mr. Mohan Balamurugan, Sri Meenakshi Store began as a dedicated 
                  neighborhood grocery shop with a clear vision: to provide fresh, quality 
                  products to the families of Madurai at affordable prices with exceptional service.
                </p>
                <p>
                  Under Mr. Mohan Balamurugan's leadership, what started as a community-focused store 
                  has grown into a trusted name in the Madurai South area, serving hundreds of families 
                  with both retail and wholesale grocery needs. We take immense pride in our personal 
                  relationships with customers and our unwavering commitment to quality.
                </p>
                <p>
                  Located in the heart of TNHB Colony, Mela Anupanadi, we continue to uphold the same 
                  values that founded our store: integrity, quality, and exceptional customer service. 
                  Every product on our shelves is carefully selected by Mr. Mohan Balamurugan himself 
                  to meet our high standards and serve our community better.
                </p>
                <p>
                  Today, Sri Meenakshi Store stands as a testament to dedication and community service, 
                  continuously evolving to meet the changing needs of our valued customers while 
                  maintaining the personal touch that makes us special.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/about/about.jpg" 
                alt="Sri Meenakshi Store - Our Story"
                className="rounded-lg shadow-lg w-full h-auto"
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

      {/* Customer Support */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Customer Support
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              We're here to help you with any questions or concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-cream/30 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Email Us
              </h3>
              <p className="font-body text-primary font-semibold">
                contact@srimeenakshi.store
              </p>
              <p className="font-body text-primary font-semibold">
                srimeenakshistore388@gmail.com
              </p>
            </div>

            <div className="text-center p-6 bg-cream/30 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Call Us
              </h3>
              <p className="font-body text-primary font-semibold">
                +91 96555 86100
              </p>
              <p className="font-body text-primary font-semibold">
                +91 79042 38354 (WhatsApp)
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
