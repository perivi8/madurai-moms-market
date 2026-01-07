import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const TrackOrder = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock order data for demonstration
  const mockOrders = {
    'ORD1703123456789': {
      orderId: 'ORD1703123456789',
      status: 'out_for_delivery',
      orderDate: '2018-01-15T10:30:00Z',
      estimatedDelivery: '2018-01-17T18:00:00Z',
      items: [
        { name: 'Premium Basmati Rice', quantity: 2, price: 240 },
        { name: 'Tata Tea Premium', quantity: 1, price: 85 }
      ],
      total: 325,
      address: {
        name: 'John Doe',
        address: '123 Main Street, Anna Nagar, Madurai - 625020',
        phone: '+91 98765 43210'
      },
      timeline: [
        { status: 'confirmed', time: '2018-01-15T10:30:00Z', message: 'Order confirmed' },
        { status: 'processing', time: '2018-01-15T14:00:00Z', message: 'Order is being prepared' },
        { status: 'shipped', time: '2018-01-16T09:00:00Z', message: 'Order shipped from warehouse' },
        { status: 'out_for_delivery', time: '2018-01-17T08:00:00Z', message: 'Out for delivery' }
      ],
      deliveryAgent: {
        name: 'Ravi Kumar',
        phone: '+91 98765 43211',
        vehicle: 'TN 64 AB 1234'
      }
    }
  };

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      setError('Please enter an order ID');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // Check localStorage for recent orders first
      const lastOrder = localStorage.getItem('lastOrder');
      let foundOrder = null;

      if (lastOrder) {
        const parsedOrder = JSON.parse(lastOrder);
        if (parsedOrder.orderId === orderId) {
          foundOrder = {
            orderId: parsedOrder.orderId,
            status: 'processing',
            orderDate: parsedOrder.orderDate,
            estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
            items: parsedOrder.items,
            total: parsedOrder.total,
            address: {
              name: `${parsedOrder.address.firstName} ${parsedOrder.address.lastName}`,
              address: `${parsedOrder.address.address}, ${parsedOrder.address.city}, ${parsedOrder.address.state} - ${parsedOrder.address.pincode}`,
              phone: parsedOrder.address.phone
            },
            timeline: [
              { status: 'confirmed', time: parsedOrder.orderDate, message: 'Order confirmed' },
              { status: 'processing', time: new Date().toISOString(), message: 'Order is being prepared' }
            ],
            deliveryAgent: {
              name: 'Ravi Kumar',
              phone: '+91 98765 43211',
              vehicle: 'TN 64 AB 1234'
            }
          };
        }
      }

      // Fallback to mock orders
      if (!foundOrder) {
        foundOrder = mockOrders[orderId as keyof typeof mockOrders];
      }

      if (foundOrder) {
        setOrderData(foundOrder);
        setError('');
      } else {
        setError('Order not found. Please check your order ID and try again.');
        setOrderData(null);
      }
      setIsLoading(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-600';
      case 'processing': return 'bg-yellow-600';
      case 'shipped': return 'bg-purple-600';
      case 'out_for_delivery': return 'bg-orange-600';
      case 'delivered': return 'bg-green-600';
      default: return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-5 w-5 text-white" />;
      case 'processing': return <Package className="h-5 w-5 text-white" />;
      case 'shipped': return <Truck className="h-5 w-5 text-white" />;
      case 'out_for_delivery': return <Truck className="h-5 w-5 text-white" />;
      case 'delivered': return <CheckCircle className="h-5 w-5 text-white" />;
      default: return <Clock className="h-5 w-5 text-white" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-cream/30 py-12">
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
          
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Track Your Order
            </h1>
            <p className="text-lg font-body text-muted-foreground">
              Enter your order ID to get real-time updates on your delivery
            </p>
          </div>
        </div>
      </section>

      {/* Track Order Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Enter Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="orderId" className="block text-sm font-medium text-foreground mb-2">
                    Order ID
                  </label>
                  <Input
                    id="orderId"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="e.g., ORD1703123456789"
                    className="text-center font-mono"
                  />
                </div>
                
                {error && (
                  <div className="text-red-600 text-sm text-center">{error}</div>
                )}

                <Button 
                  onClick={handleTrackOrder}
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-hover"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Tracking...
                    </div>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Track Order
                    </>
                  )}
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  You can find your Order ID in the confirmation email or SMS
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Tracking Results */}
          {orderData && (
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Order Timeline */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Order Timeline</span>
                        <Badge variant="secondary" className="font-mono">
                          {orderData.orderId}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {orderData.timeline.map((event: any, index: number) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(event.status)}`}>
                              {getStatusIcon(event.status)}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-foreground capitalize">
                                {event.status.replace('_', ' ')}
                              </div>
                              <div className="text-sm text-muted-foreground mb-1">
                                {event.message}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {formatDate(event.time)}
                              </div>
                            </div>
                          </div>
                        ))}

                        {orderData.status !== 'delivered' && (
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300">
                              <CheckCircle className="h-5 w-5 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-muted-foreground">Delivered</div>
                              <div className="text-sm text-muted-foreground">
                                Estimated: {formatDate(orderData.estimatedDelivery)}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Delivery Agent Info */}
                  {orderData.status === 'out_for_delivery' && (
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Truck className="h-5 w-5" />
                          Delivery Agent
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {orderData.deliveryAgent.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{orderData.deliveryAgent.name}</div>
                            <div className="text-sm text-muted-foreground">
                              Vehicle: {orderData.deliveryAgent.vehicle}
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Order Details Sidebar */}
                <div className="space-y-6">
                  {/* Order Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Order Date:</span>
                          <span>{new Date(orderData.orderDate).toLocaleDateString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Items:</span>
                          <span>{orderData.items.length} items</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span className="text-primary">₹{orderData.total}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Delivery Address */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Delivery Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm space-y-1">
                        <div className="font-semibold">{orderData.address.name}</div>
                        <div className="text-muted-foreground">{orderData.address.address}</div>
                        <div className="text-muted-foreground">Phone: {orderData.address.phone}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Order Items */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Items Ordered</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {orderData.items.map((item: any, index: number) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-muted-foreground">Qty: {item.quantity}</div>
                            </div>
                            <div className="font-semibold">₹{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackOrder;
