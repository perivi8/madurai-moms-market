import { Truck, ArrowLeft, Package, MapPin, Clock, Shield, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const ShippingDelivery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-cream/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button - Top Left */}
          <div className="flex justify-start mb-8">
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <Truck className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xl font-body text-muted-foreground leading-relaxed">
              Fresh Groceries, Delivered with Care
            </p>
            <p className="text-lg font-body text-muted-foreground mt-4">
              We are committed to ensuring that your groceries reach you fresh, securely packed, and on time.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Quick Processing
                </h3>
                <p className="text-muted-foreground">
                  Orders processed within 1-2 business days
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Wide Coverage
                </h3>
                <p className="text-muted-foreground">
                  Local and pan-India delivery options available
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Secure Packaging
                </h3>
                <p className="text-muted-foreground">
                  Tamper-proof, hygienic packaging for freshness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Order Processing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-6 w-6 text-primary" />
                  Order Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Orders are processed once payment confirmation is received.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Processing time is typically 1–2 business days, depending on product availability and order size.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Bulk or wholesale grocery orders may require extra preparation time, which will be communicated in advance.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Delivery Coverage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Delivery Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Local</Badge>
                      Madurai & Surrounding Areas
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Same-day or next-day delivery options may be available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">Pan-India</Badge>
                      All India Deliveries
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Available through trusted courier/logistics partners. Delivery timelines vary based on distance.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Non-Serviceable Areas:</strong> If your location is not covered, our team will notify you and suggest alternatives.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Timelines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Estimated Delivery Timelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Local (Madurai)</h4>
                      <p className="text-sm text-muted-foreground">Same-day or next-day after dispatch</p>
                    </div>
                    <Badge className="bg-green-600">Same Day</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Tamil Nadu</h4>
                      <p className="text-sm text-muted-foreground">2–4 business days after dispatch</p>
                    </div>
                    <Badge className="bg-blue-600">2-4 Days</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Rest of India</h4>
                      <p className="text-sm text-muted-foreground">4–7 business days after dispatch</p>
                    </div>
                    <Badge className="bg-purple-600">4-7 Days</Badge>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Delivery times may vary due to courier delays, weather conditions, or regional restrictions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Charges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-6 w-6 text-primary" />
                  Shipping Charges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Shipping charges are calculated at checkout based on:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Delivery location
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Order size/weight
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Courier service selected
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Free Delivery:</strong> May be available for local orders above a minimum purchase value (announced through promotions).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Packaging & Handling */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Packaging & Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    All groceries are packed in tamper-proof, hygienic packaging to ensure freshness.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Perishable items (like vegetables or fresh produce, if included) are packed with care to maintain quality during transit.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Bulk or wholesale orders are packed in corrugated boxes or sealed containers for safe transportation.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tracking & Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-primary" />
                  Tracking & Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Once dispatched, you will receive:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    An SMS/email notification with tracking details
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    A courier tracking link (for outstation orders)
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Please allow 24 hours for tracking information to update after dispatch.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Delays & Exceptions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-orange-600" />
                  Delays & Exceptions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Delivery may be delayed due to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    Regional lockdowns or restrictions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    Courier network backlogs during festive seasons
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    Incorrect/incomplete delivery address
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    Natural calamities or unavoidable circumstances
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    We will keep you informed in case of delays.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Need Help With Shipping?
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Contact us for any delivery-related assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak with our delivery team
                </p>
                <div className="font-semibold text-primary mb-4">
                  +91 96555 86100
                </div>
                <div className="text-sm text-muted-foreground">
                  Mon-Sat: 9:00 AM - 7:00 PM
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Send us your shipping queries
                </p>
                <div className="font-semibold text-primary mb-4">
                  contact@srimeenakshi.store
                </div>
                <div className="text-sm text-muted-foreground">
                  Response within 24 hours
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3"
            >
              Contact Customer Service
            </Button>
          </div>
        </div>
      </section>

      {/* Store Address */}
      <section className="py-8 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Sri Meenakshi Store</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              📍 No:725, TNHB Colony, Mela Anupandi, Madurai South, Tamil Nadu – 625009
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last Updated: August 2025 | © 2025 Sri Meenakshi Store. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingDelivery;
