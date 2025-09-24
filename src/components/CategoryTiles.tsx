import { ArrowRight, Wheat, Coffee, Cigarette, Package2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CategoryTiles = () => {
  const categories = [
    {
      id: 'food-staples',
      name: 'Food Staples',
      description: 'Rice, Wheat, Pulses, Oil',
      icon: Wheat,
      color: 'primary',
      href: '/shop?category=staples'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      description: 'Tea, Coffee, Juices, Soft Drinks',
      icon: Coffee,
      color: 'orange',
      href: '/shop?category=beverages'
    },
    {
      id: 'tobacco',
      name: 'Tobacco Products',
      description: 'Cigarettes, Paan, Gutka',
      icon: Cigarette,
      color: 'red',
      href: '/shop?category=tobacco'
    },
    {
      id: 'packaged',
      name: 'Packaged Foods',
      description: 'Snacks, Biscuits, Ready-to-eat',
      icon: Package2,
      color: 'primary',
      href: '/shop?category=packaged'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
      orange: 'bg-orange/10 text-orange border-orange/20 hover:bg-orange/20',
      red: 'bg-red/10 text-red border-red/20 hover:bg-red/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            From daily essentials to bulk orders - find everything your family or business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-product ${getColorClasses(category.color)}`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-white/50 group-hover:bg-white/80 transition-colors">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm font-body opacity-80 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-label font-semibold">
                      Shop Now
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;