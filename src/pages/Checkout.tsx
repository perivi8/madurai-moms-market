import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, MapPin, Phone, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create order
    const orderData = {
      items: state.items,
      total: state.total + (state.total >= 500 ? 0 : 50),
      address: formData,
      paymentMethod,
      orderDate: new Date().toISOString(),
      orderId: `ORD${Date.now()}`
    };

    // Store order in localStorage (in real app, send to backend)
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    // Clear cart
    dispatch({ type: 'CLEAR_CART' });
    
    // Navigate to confirmation
    navigate('/order-confirmation');
  };

  const deliveryFee = state.total >= 500 ? 0 : 50;
  const totalAmount = state.total + deliveryFee;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            Your cart is empty
          </h1>
          <Button onClick={() => navigate('/shop')} className="bg-primary hover:bg-primary-hover">
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-cream/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Checkout
            </h1>
            <p className="text-lg font-body text-muted-foreground">
              Complete your order details
            </p>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Delivery Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Delivery Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="landmark">Landmark (Optional)</Label>
                      <Input
                        id="landmark"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Near temple, opposite school, etc."
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 p-4 border rounded-lg">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <Truck className="h-5 w-5 text-green-600" />
                              <div>
                                <div className="font-semibold">Cash on Delivery</div>
                                <div className="text-sm text-muted-foreground">
                                  Pay when your order is delivered
                                </div>
                              </div>
                            </div>
                          </Label>
                        </div>


                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Items */}
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {state.items.map((item) => {
                        const currentPrice = item.selectedPrice === 'wholesale' && item.wholesalePrice 
                          ? item.wholesalePrice 
                          : item.retailPrice;

                        return (
                          <div key={`${item.id}-${item.selectedPrice}`} className="flex justify-between items-center text-sm">
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{item.name}</div>
                              <div className="text-muted-foreground">
                                {item.quantity} × ₹{currentPrice}
                              </div>
                            </div>
                            <div className="font-semibold">
                              ₹{(currentPrice * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <Separator />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span>₹{state.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery:</span>
                        <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-primary">₹{totalAmount.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 text-lg"
                    >
                      Confirm Order
                    </Button>

                    <div className="text-xs text-muted-foreground text-center">
                      By placing this order, you agree to our terms and conditions
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
