import { useState } from 'react';
import { Building2, Users, Package, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Wholesale = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    gstin: '',
    businessType: '',
    orderDetails: '',
    estimatedQuantity: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Wholesale inquiry:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange/10 to-primary/10 py-16">
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange/20 text-orange text-sm font-label font-semibold mb-6">
              <Building2 className="mr-2 h-4 w-4" />
              For Restaurants & Shops
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Bulk Orders &
              <span className="block text-orange">Wholesale Pricing</span>
            </h1>
            
            <p className="text-xl font-body text-muted-foreground leading-relaxed mb-8">
              Special rates for restaurants, hotels, retail shops, and bulk buyers. 
              Get competitive wholesale prices with reliable supply and timely delivery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">Bulk Quantities</h3>
                <p className="font-body text-muted-foreground text-sm">Minimum order quantities with attractive pricing</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">Business Support</h3>
                <p className="font-body text-muted-foreground text-sm">Dedicated support for your business needs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">Credit Terms</h3>
                <p className="font-body text-muted-foreground text-sm">Flexible payment terms for registered businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Inquiry Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Submit Wholesale Inquiry
                </CardTitle>
                <p className="font-body text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with our best wholesale rates.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessName" className="font-label font-semibold">
                        Business Name *
                      </Label>
                      <Input
                        id="businessName"
                        placeholder="Your Business Name"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactName" className="font-label font-semibold">
                        Contact Person *
                      </Label>
                      <Input
                        id="contactName"
                        placeholder="Your Full Name"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="font-label font-semibold">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-label font-semibold">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="business@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gstin" className="font-label font-semibold">
                        GSTIN (if applicable)
                      </Label>
                      <Input
                        id="gstin"
                        placeholder="22AAAAA0000A1Z5"
                        value={formData.gstin}
                        onChange={(e) => handleInputChange('gstin', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="businessType" className="font-label font-semibold">
                        Business Type *
                      </Label>
                      <Input
                        id="businessType"
                        placeholder="Restaurant / Hotel / Retail Shop"
                        value={formData.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="orderDetails" className="font-label font-semibold">
                      Order Details *
                    </Label>
                    <Textarea
                      id="orderDetails"
                      placeholder="List the products and quantities you need. Example: Rice - 50kg, Oil - 20 litres, etc."
                      rows={4}
                      value={formData.orderDetails}
                      onChange={(e) => handleInputChange('orderDetails', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="estimatedQuantity" className="font-label font-semibold">
                      Estimated Monthly Order Value
                    </Label>
                    <Input
                      id="estimatedQuantity"
                      placeholder="₹ 25,000 per month"
                      value={formData.estimatedQuantity}
                      onChange={(e) => handleInputChange('estimatedQuantity', e.target.value)}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-orange hover:bg-orange/90 text-orange-foreground font-label font-semibold py-3 text-base shadow-button"
                    size="lg"
                  >
                    Submit Wholesale Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-cream border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    Direct Contact for Wholesale
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-label font-semibold text-foreground">Wholesale Hotline</div>
                        <div className="font-body text-muted-foreground">+91 98765 43210</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-label font-semibold text-foreground">Wholesale Email</div>
                        <div className="font-body text-muted-foreground">wholesale@srimeenakshistore.com</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold mb-4">
                    Why Choose Our Wholesale Service?
                  </h3>
                  
                  <ul className="space-y-3 font-body">
                    <li className="flex items-start gap-2">
                      <span className="text-orange">✓</span>
                      <span>Competitive wholesale pricing on bulk orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange">✓</span>
                      <span>Regular supply with consistent quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange">✓</span>
                      <span>Flexible payment terms for registered businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange">✓</span>
                      <span>Dedicated account manager for your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange">✓</span>
                      <span>Free delivery for orders above minimum quantity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wholesale;