import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, Clock, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface OrderData {
  orderId: string;
  items: any[];
  total: number;
  address: any;
  paymentMethod: string;
  orderDate: string;
}

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Get order data from localStorage
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrderData(JSON.parse(lastOrder));
    } else {
      // If no order data, redirect to shop
      navigate('/shop');
    }
  }, [navigate]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case 'cod': return 'Cash on Delivery';
      case 'card': return 'Credit/Debit Card';
      case 'upi': return 'UPI Payment';
      default: return method;
    }
  };

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Success Header */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-lg font-body text-muted-foreground mb-6">
              Thank you for your order. We've received your order and will start processing it soon.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <div className="text-sm text-muted-foreground">Order ID</div>
              <div className="text-2xl font-bold text-primary">{orderData.orderId}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Timeline */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">Order Confirmed</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(orderData.orderDate)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Package className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">Processing</div>
                        <div className="text-sm text-muted-foreground">
                          We're preparing your order
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Truck className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-muted-foreground">Out for Delivery</div>
                        <div className="text-sm text-muted-foreground">
                          Estimated: {estimatedDelivery.toLocaleDateString('en-IN')}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-muted-foreground">Delivered</div>
                        <div className="text-sm text-muted-foreground">
                          We'll notify you when delivered
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Items */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderData.items.map((item) => {
                      const currentPrice = item.selectedPrice === 'wholesale' && item.wholesalePrice 
                        ? item.wholesalePrice 
                        : item.retailPrice;

                      return (
                        <div key={`${item.id}-${item.selectedPrice}`} className="flex gap-4 p-4 border rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.selectedPrice === 'wholesale' ? 'Wholesale' : 'Retail'} • Qty: {item.quantity}
                            </p>
                            <p className="font-semibold text-primary">
                              ₹{(currentPrice * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Actions */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order ID:</span>
                      <span className="font-mono text-sm">{orderData.orderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Date:</span>
                      <span>{new Date(orderData.orderDate).toLocaleDateString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payment:</span>
                      <span>{getPaymentMethodName(orderData.paymentMethod)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Paid:</span>
                      <span className="text-primary">₹{orderData.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-1">
                    <div className="font-semibold">
                      {orderData.address.firstName} {orderData.address.lastName}
                    </div>
                    <div>{orderData.address.address}</div>
                    {orderData.address.landmark && (
                      <div className="text-muted-foreground">Near {orderData.address.landmark}</div>
                    )}
                    <div>
                      {orderData.address.city}, {orderData.address.state} - {orderData.address.pincode}
                    </div>
                    <div className="text-muted-foreground">
                      Phone: {orderData.address.phone}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate('/track-order')}
                  className="w-full bg-primary hover:bg-primary-hover"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Track Your Order
                </Button>

                <Button 
                  variant="outline"
                  onClick={() => navigate('/shop')}
                  className="w-full"
                >
                  Continue Shopping
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button 
                  variant="outline"
                  onClick={() => window.print()}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
              </div>

              {/* Help */}
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <div className="text-sm font-semibold mb-1">Need Help?</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Contact us for any order-related queries
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate('/contact')}
                      className="w-full"
                    >
                      Contact Support
                    </Button>
                  </div>
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

export default OrderConfirmation;
