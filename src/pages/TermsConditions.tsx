import { Shield, ArrowLeft, FileText, Users, CreditCard, Truck, RotateCcw, Scale, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
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
            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl font-body text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our services. By shopping with us, you agree to these conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-semibold">
              Last Updated: August 2018
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                  Welcome to Sri Meenakshi Store. By shopping with us—whether in-store or online—you agree to comply with the following Terms & Conditions. These terms govern all product sales, deliveries, and interactions with our services.
                </p>
                <p className="text-base font-body text-red-600 font-semibold">
                  If you do not agree with these terms, please discontinue using our services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* General Use */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  1. General Use of Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    You confirm that you are at least 18 years of age or using our services under the supervision of a parent/guardian.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Our products are sold strictly for personal, household, or business consumption and must not be resold without authorization.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    We reserve the right to refuse or cancel orders in cases of suspected misuse, fraudulent activity, or violation of these terms.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Products & Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  2. Products & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    We specialize in groceries, packaged goods, and household essentials.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Product images and descriptions on the website are for reference only; actual packaging or branding may vary based on stock availability.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    All products are subject to availability and may be modified, substituted, or discontinued without prior notice.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pricing & Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  3. Pricing & Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    All prices are displayed in Indian Rupees (INR ₹) and are inclusive of applicable taxes, unless stated otherwise.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Prices may change due to supply fluctuations, seasonal availability, or store policies.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Payments must be made in full at the time of placing an order.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    We accept UPI, debit/credit cards, net banking, and secure third-party gateways for online payments.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Shipping & Delivery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-primary" />
                  4. Shipping & Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Deliveries are available within specified serviceable areas through our delivery partners.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Estimated delivery timelines will be shared during checkout.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Customers must provide accurate delivery details; we are not responsible for delays caused by incorrect addresses or unavailability of the recipient.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Please refer to our Shipping & Delivery Policy for full details.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Returns & Refunds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-6 w-6 text-primary" />
                  5. Returns & Refunds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Due to the perishable nature of groceries, returns are accepted only if:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Wrong products are delivered
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Items are damaged or expired upon delivery
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Refunds or replacements will be processed as per our Cancellation & Refund Policy.
                </p>
              </CardContent>
            </Card>

            {/* Customer Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  6. Customer Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  By placing an order, you agree to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Inspect products at the time of delivery and report issues immediately
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Store groceries in appropriate conditions to maintain freshness
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Not misuse products for unlawful purposes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  7. Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All logos, product images, designs, and website content are the intellectual property of Sri Meenakshi Store and may not be reproduced without permission.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-6 w-6 text-primary" />
                  8. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    We are not responsible for delays caused by third-party logistics providers, natural calamities, or other circumstances beyond our control.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Our liability is limited to the invoice value of the product purchased.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    We are not liable for health issues caused by misuse, improper storage, or allergies.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-6 w-6 text-primary" />
                  9. Governing Law & Jurisdiction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These Terms & Conditions are governed by the laws of India, with jurisdiction under the courts of Madurai, Tamil Nadu.
                </p>
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
              Questions About Our Terms?
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Contact us for assistance regarding these Terms & Conditions
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
                  Send us your questions or concerns
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
              © 2018 Sri Meenakshi Store. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
