import { RotateCcw, ArrowLeft, XCircle, CheckCircle, Clock, AlertTriangle, Phone, Mail, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const CancellationRefund = () => {
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
            <RotateCcw className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl font-body text-muted-foreground leading-relaxed">
              Fair, Transparent & Customer-Friendly
            </p>
            <p className="text-lg font-body text-muted-foreground mt-4">
              We aim to ensure that every grocery order is delivered fresh, correct, and in good condition.
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
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  1 Hour Window
                </h3>
                <p className="text-muted-foreground">
                  Cancel orders within 1 hour of placement
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  24 Hour Returns
                </h3>
                <p className="text-muted-foreground">
                  Report issues within 24 hours of delivery
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Quick Refunds
                </h3>
                <p className="text-muted-foreground">
                  Refunds processed within 3-5 business days
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
            
            {/* Order Cancellations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-orange-600" />
                  Order Cancellations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">Cancellation Window</span>
                  </div>
                  <p className="text-sm text-orange-800">
                    Orders may be cancelled within <strong>1 hour of placement</strong>, provided they have not been packed or dispatched.
                  </p>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Once an order is processed or shipped, cancellations are not possible.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    For bulk/wholesale orders, cancellation terms may differ and will be communicated at the time of purchase.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Returns & Replacements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-6 w-6 text-green-600" />
                  Returns & Replacements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg mb-4">
                  <p className="text-sm text-green-800 font-semibold mb-2">
                    We only accept returns/replacements if:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-800">The wrong item was delivered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-800">Products are damaged, expired, or tampered upon delivery</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-3">Conditions:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Issues must be reported within <strong>24 hours of delivery</strong>, with proof (photos/videos).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Items must be returned in their original, sealed packaging (where applicable).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Fresh produce or unpackaged items are non-returnable, except in case of visible spoilage or damage at delivery.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Non-Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Perishable Groceries</h4>
                      <p className="text-sm text-muted-foreground">Vegetables, fruits, fresh produce once accepted</p>
                    </div>
                    <Badge variant="destructive" className="bg-red-100 text-red-800">
                      No Returns
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Opened Items</h4>
                      <p className="text-sm text-muted-foreground">Items opened, used, or stored improperly after delivery</p>
                    </div>
                    <Badge variant="destructive" className="bg-red-100 text-red-800">
                      No Returns
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">Courier Delays</h4>
                      <p className="text-sm text-muted-foreground">Delays caused by courier/logistics partners beyond our control</p>
                    </div>
                    <Badge variant="destructive" className="bg-red-100 text-red-800">
                      No Refund
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refunds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  Refunds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Refund Timeline</span>
                  </div>
                  <p className="text-sm text-blue-800">
                    Once a return/refund request is approved, refunds will be initiated within <strong>3–5 business days</strong>.
                  </p>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Refunds are processed through the original mode of payment (UPI, card, net banking, etc.).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Depending on your bank/payment provider, it may take 5–10 business days for funds to reflect.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    In some cases, customers may be offered a replacement product or a store credit instead of a cash refund.
                  </li>
                </ul>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Refund Methods
                    </h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Original payment method</li>
                      <li>• Store credit (optional)</li>
                      <li>• Product replacement</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Processing Time
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Approval: 1-2 days</li>
                      <li>• Processing: 3-5 days</li>
                      <li>• Bank reflection: 5-10 days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">Please Note:</h4>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      Since most grocery products are perishable, cancellations and refunds are subject to specific conditions.
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      We recommend inspecting all items immediately upon delivery and reporting any issues promptly.
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      Photos or videos of damaged/wrong items help us process your request faster.
                    </li>
                  </ul>
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
              Need Help?
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Contact us for assistance with cancellations or refunds
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
                  Speak with our customer service team
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
                  Send us your cancellation/refund requests
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
              Last Updated: August 2018 | © 2018 Sri Meenakshi Store. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CancellationRefund;
