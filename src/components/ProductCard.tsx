import { ShoppingCart, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  retailPrice: number;
  wholesalePrice?: number;
  unit: string;
  category: string;
  inStock?: boolean;
  discount?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  image, 
  retailPrice, 
  wholesalePrice, 
  unit, 
  category, 
  inStock = true,
  discount 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-product transition-all duration-200 border-0 shadow-soft">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-card bg-cream/30">
          <img
            src={image}
            alt={`${name} - Fresh groceries from Sri Meenakshi Store`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {discount && (
            <Badge className="absolute top-2 left-2 bg-red text-red-foreground font-label font-semibold">
              {discount}% OFF
            </Badge>
          )}
          
          {/* Stock Badge */}
          {!inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive" className="font-label">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <Badge variant="secondary" className="text-xs font-label">
            {category}
          </Badge>

          {/* Product Name */}
          <h3 className="font-heading font-semibold text-foreground leading-tight line-clamp-2">
            {name}
          </h3>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-label font-bold text-primary">
                  ₹{retailPrice}
                </span>
                <span className="text-sm font-body text-muted-foreground ml-1">
                  /{unit}
                </span>
              </div>
              {wholesalePrice && (
                <div className="text-right">
                  <div className="text-xs font-body text-muted-foreground">
                    Wholesale
                  </div>
                  <div className="text-sm font-label font-semibold text-orange">
                    ₹{wholesalePrice}/{unit}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button 
              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-label font-semibold shadow-button"
              size="sm"
              disabled={!inStock}
            >
              <ShoppingCart className="mr-1 h-4 w-4" />
              Add to Cart
            </Button>
            
            {wholesalePrice && (
              <Button 
                variant="outline" 
                size="sm"
                className="border-orange text-orange hover:bg-orange hover:text-orange-foreground"
              >
                <Package className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;