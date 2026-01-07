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
              Your Privacy, Our Responsibility
            </p>
            <p className="text-lg font-body text-muted-foreground mt-4">
              At Sri Meenakshi Store, we value your trust and are committed to protecting your personal information. Whether you shop with us in-store or place an order online, we ensure that your data is handled securely, transparently, and in compliance with applicable Indian IT laws and global best practices.
            </p>
            <p className="text-base font-body text-muted-foreground mt-4">
              This Privacy Policy explains what data we collect, how we use it, how we safeguard it, and the rights you have as our customer.
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
                  <p className="text-muted-foreground mb-4">
                    When you purchase groceries, place an online order, or contact us, we may collect the following information:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Full Name
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Email Address & Phone Number
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Billing & Shipping Address
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Order & Transaction Details
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Payment Information (processed through secure third-party gateways)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Delivery Preferences
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
                      Device & Browser Information (for online shoppers)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Cookies & Analytics Data (to improve site performance and customer experience)
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We only collect information necessary to fulfill your order and provide a smooth shopping experience.
                  </p>
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
                    Why We Collect Your Information
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your data is used solely for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Processing and fulfilling your grocery orders
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Coordinating delivery or pickup services
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Providing after-sales support or resolving issues
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Managing wholesale/B2B customer relationships (if applicable)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Sending promotional updates and offers (only if you opt in)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Complying with taxation and regulatory requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Improving our website, services, and product offerings
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
                    How We Protect Your Information
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We adopt strict security measures to ensure your personal information is kept safe:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <strong>SSL Encryption:</strong> All online transactions are encrypted.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <strong>Secure Payment Handling:</strong> Payment details are never stored; they are managed through trusted, PCI-compliant third-party providers.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <strong>Controlled Access:</strong> Only authorized staff handle sensitive customer data.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <strong>Data Reviews:</strong> Regular audits are conducted to maintain security standards.
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
                    Your Rights & Choices
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    As our customer, you have the right to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Access the information we hold about you
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Request corrections or updates to your details
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Request deletion of your personal data (where legally permitted)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Opt out of promotional messages at any time
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Raise concerns regarding privacy or data misuse
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We will respond to such requests within 30 business days.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Third-Party Sharing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We do not sell or rent customer information. Your data is only shared with:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Delivery/logistics partners for order fulfillment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Payment gateway providers for transaction processing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Government/regulatory authorities when legally required
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Policy Updates
                  </h3>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy occasionally to reflect business, legal, or technological changes. Updates will always be posted on this page with a revised "Last Updated" date.
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

      {/* Last Updated */}
      <section className="py-8 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Last Updated: August 2018
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2018 Sri Meenakshi Store. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
