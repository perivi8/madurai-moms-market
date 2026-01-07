import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Package, Minus, Plus, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedPriceType, setSelectedPriceType] = useState<'retail' | 'wholesale'>('retail');

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <Button onClick={() => navigate('/shop')} className="bg-primary hover:bg-primary-hover">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        priceType: selectedPriceType
      }
    });
    
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const currentPrice = selectedPriceType === 'wholesale' && product.wholesalePrice 
    ? product.wholesalePrice 
    : product.retailPrice;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-4 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/shop')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              
              {/* Discount Badge */}
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-red text-red-foreground font-label font-semibold text-lg px-3 py-1">
                  {product.discount}% OFF
                </Badge>
              )}
              
              {/* Stock Status */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <Badge variant="destructive" className="font-label text-lg px-4 py-2">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Category */}
              <Badge variant="secondary" className="text-sm font-label">
                {product.category}
              </Badge>

              {/* Product Name */}
              <h1 className="text-4xl font-heading font-bold text-foreground leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">(4.8) • 124 reviews</span>
              </div>

              {/* Description */}
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Price Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Choose Price Type
                </h3>
                <div className="flex gap-4">
                  <Card 
                    className={`cursor-pointer transition-all ${
                      selectedPriceType === 'retail' 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPriceType('retail')}
                  >
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          ₹{product.retailPrice}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Retail Price / {product.unit}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {product.wholesalePrice && (
                    <Card 
                      className={`cursor-pointer transition-all ${
                        selectedPriceType === 'wholesale' 
                          ? 'ring-2 ring-orange bg-orange/5' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedPriceType('wholesale')}
                    >
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange">
                            ₹{product.wholesalePrice}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Wholesale Price / {product.unit}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Quantity
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-muted-foreground">
                    Total: ₹{(currentPrice * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 text-lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                {product.wholesalePrice && (
                  <Button 
                    variant="outline" 
                    className="border-orange text-orange hover:bg-orange hover:text-orange-foreground py-3"
                  >
                    <Package className="h-5 w-5" />
                  </Button>
                )}
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">Above ₹500</div>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Quality Assured</div>
                  <div className="text-xs text-muted-foreground">100% Fresh</div>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Easy Returns</div>
                  <div className="text-xs text-muted-foreground">7 Day Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Tabs */}
      <section className="py-12 bg-cream/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    Product Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Unit:</span>
                      <span className="font-medium">{product.unit}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stock Status:</span>
                      <Badge variant={product.inStock ? "default" : "destructive"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Product ID:</span>
                      <span className="font-medium">#{product.id}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    Delivery & Returns
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Delivery Information</h4>
                      <p className="text-muted-foreground">
                        Free delivery on orders above ₹500. Standard delivery takes 1-2 business days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Return Policy</h4>
                      <p className="text-muted-foreground">
                        7-day return policy for unopened items. Fresh products cannot be returned.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Customer Support</h4>
                      <p className="text-muted-foreground">
                        Contact us at +91 96555 86100 for any product-related queries.
                      </p>
                    </div>
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

export default ProductDetails;
