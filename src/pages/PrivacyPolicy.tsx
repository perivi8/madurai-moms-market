import { Shield, ArrowLeft, Eye, Lock, Database, UserCheck, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl font-body text-muted-foreground leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Data Protection
                </h3>
                <p className="text-muted-foreground">
                  Your personal information is encrypted and securely stored
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Transparency
                </h3>
                <p className="text-muted-foreground">
                  Clear information about how we use your data
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Your Rights
                </h3>
                <p className="text-muted-foreground">
                  Full control over your personal information and preferences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Name, email address, and phone number when you create an account
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Delivery address and payment information for order processing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Communication preferences and customer service interactions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Order history and shopping preferences to improve your experience
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Automatically Collected Information
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Device information, IP address, and browser type
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Website usage patterns and navigation behavior
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Cookies and similar tracking technologies for functionality
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Service Provision
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Process and fulfill your grocery orders and deliveries
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Provide customer support and respond to your inquiries
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Send order confirmations, delivery updates, and important notices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Manage your account and maintain our customer database
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Business Operations
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Improve our products, services, and website functionality
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Analyze shopping trends and customer preferences
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Send promotional offers and newsletters (with your consent)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Prevent fraud and ensure the security of our platform
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Security Measures
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      SSL encryption for all data transmission and storage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Regular security audits and system updates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Restricted access to personal information on a need-to-know basis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Secure payment processing through trusted third-party providers
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Data Retention
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Personal information is retained only as long as necessary
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Order history maintained for 3 years for customer service
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Account information deleted upon request (subject to legal requirements)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                  Your Rights & Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Data Rights
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Access and review your personal information at any time
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Request correction of inaccurate or incomplete data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Delete your account and associated personal information
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Opt-out of marketing communications at any time
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Cookie Preferences
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Essential cookies for website functionality (cannot be disabled)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Analytics cookies to improve our services (optional)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Marketing cookies for personalized offers (optional)
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
              Privacy Questions?
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Contact us if you have any questions about our privacy practices
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
                  Speak with our privacy team
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
                  Send us your privacy concerns
                </p>
                <div className="font-semibold text-primary mb-4">
                  customer@srimeenakshistore.com
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

      {/* Last Updated */}
      <section className="py-8 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              This Privacy Policy was last updated on September 24, 2024
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 Sri Meenakshi Store. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
