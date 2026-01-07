import { RotateCcw, Shield, Clock, CheckCircle, XCircle, AlertTriangle, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const ReturnPolicy = () => {
  const navigate = useNavigate();

  const returnableCategories = [
    { category: 'Packaged Foods', days: 7, condition: 'Unopened packaging' },
    { category: 'Personal Care', days: 7, condition: 'Unopened and unused' },
    { category: 'Household Items', days: 14, condition: 'Unopened packaging' },
    { category: 'Baby Care', days: 7, condition: 'Unopened packaging' },
    { category: 'Healthcare', days: 7, condition: 'Unopened packaging' }
  ];

  const nonReturnableCategories = [
    { category: 'Fresh Produce', reason: 'Perishable items' },
    { category: 'Dairy Products', reason: 'Perishable items' },
    { category: 'Meat & Seafood', reason: 'Perishable items' },
    { category: 'Opened Food Items', reason: 'Hygiene and safety' },
    { category: 'Custom Orders', reason: 'Made to order' }
  ];

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
            <RotateCcw className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Return Policy
            </h1>
            <p className="text-xl font-body text-muted-foreground leading-relaxed">
              We want you to be completely satisfied with your purchase. 
              Here's everything you need to know about our return policy.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  7-14 Day Returns
                </h3>
                <p className="text-muted-foreground">
                  Return eligible items within 7-14 days of delivery
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-muted-foreground">
                  100% refund for damaged or defective products
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Easy Process
                </h3>
                <p className="text-muted-foreground">
                  Simple return process with free pickup for eligible items
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Return Categories */}
      <section className="py-16 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-6 w-6" />
                  Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {returnableCategories.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-foreground">{item.category}</div>
                        <div className="text-sm text-muted-foreground">{item.condition}</div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {item.days} days
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Non-Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-6 w-6" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nonReturnableCategories.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-foreground">{item.category}</div>
                        <div className="text-sm text-muted-foreground">{item.reason}</div>
                      </div>
                      <Badge variant="destructive" className="bg-red-100 text-red-800">
                        No Returns
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              How to Return Items
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to return your items
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Contact Us
                </h3>
                <p className="text-sm text-muted-foreground">
                  Call or email us within the return period to initiate the process
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Pack Items
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pack items in original packaging with all accessories and tags
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Schedule Pickup
                </h3>
                <p className="text-sm text-muted-foreground">
                  We'll arrange free pickup from your address at your convenience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Get Refund
                </h3>
                <p className="text-sm text-muted-foreground">
                  Receive refund within 3-5 business days after we receive the item
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Return Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    General Conditions
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Items must be returned in original condition with all packaging, tags, and accessories
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Return request must be initiated within the specified return period
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Items damaged due to misuse or normal wear are not eligible for return
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Original receipt or order confirmation is required for all returns
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Refund Policy
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Refunds will be processed to the original payment method
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Processing time: 3-5 business days after item inspection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Delivery charges are non-refundable unless the item is damaged or defective
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Store credit may be offered as an alternative to cash refund
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Damaged or Defective Items
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Report damaged or defective items within 24 hours of delivery
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Provide photos of the damaged item and packaging
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Full refund or replacement will be provided for verified cases
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      No questions asked return for quality issues
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Returns */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Need Help with Returns?
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Our customer service team is here to assist you
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
                  Speak directly with our return specialists
                </p>
                <div className="font-semibold text-primary mb-2">
                  +91 96555 86100
                </div>
                <div className="font-semibold text-primary mb-4">
                  +91 79042 38354 (WhatsApp)
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
                  Send us your return request details
                </p>
                <div className="font-semibold text-primary mb-4">
                  srimeenakshistore388@gmail.com
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

      <Footer />
    </div>
  );
};

export default ReturnPolicy;
