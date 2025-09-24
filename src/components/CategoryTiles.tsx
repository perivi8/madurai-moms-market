import { ArrowRight, Wheat, Coffee, Package2, Milk, ChefHat, Home, Heart, Baby, Leaf, Cookie, Pill, Candy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const CategoryTiles = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryName: string) => {
    navigate(`/shop?category=${encodeURIComponent(categoryName)}`);
  };
  
  const categories = [
    {
      id: 'food-staples',
      name: 'Food Staples',
      description: 'Rice, Wheat, Pulses, Oil',
      icon: Wheat,
      color: 'primary',
      categoryName: 'Food Staples'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      description: 'Tea, Coffee, Juices, Soft Drinks',
      icon: Coffee,
      color: 'orange',
      categoryName: 'Beverages'
    },
    {
      id: 'packaged-foods',
      name: 'Packaged Foods',
      description: 'Snacks, Biscuits, Ready-to-eat',
      icon: Package2,
      color: 'primary',
      categoryName: 'Packaged Foods'
    },
    {
      id: 'dairy-products',
      name: 'Dairy Products',
      description: 'Milk, Cheese, Yogurt, Butter',
      icon: Milk,
      color: 'blue',
      categoryName: 'Dairy Products'
    },
    {
      id: 'spices',
      name: 'Spices',
      description: 'Turmeric, Chili, Garam Masala',
      icon: ChefHat,
      color: 'red',
      categoryName: 'Spices'
    },
    {
      id: 'household',
      name: 'Household',
      description: 'Cleaning, Detergents, Utilities',
      icon: Home,
      color: 'green',
      categoryName: 'Household'
    },
    {
      id: 'personal-care',
      name: 'Personal Care',
      description: 'Soaps, Shampoo, Skincare',
      icon: Heart,
      color: 'pink',
      categoryName: 'Personal Care'
    },
    {
      id: 'baby-care',
      name: 'Baby Care',
      description: 'Diapers, Baby Food, Care Products',
      icon: Baby,
      color: 'purple',
      categoryName: 'Baby Care'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
      orange: 'bg-orange/10 text-orange border-orange/20 hover:bg-orange/20',
      red: 'bg-red-500/10 text-red-600 border-red-200 hover:bg-red-500/20',
      blue: 'bg-blue-500/10 text-blue-600 border-blue-200 hover:bg-blue-500/20',
      green: 'bg-green-500/10 text-green-600 border-green-200 hover:bg-green-500/20',
      pink: 'bg-pink-500/10 text-pink-600 border-pink-200 hover:bg-pink-500/20',
      purple: 'bg-purple-500/10 text-purple-600 border-purple-200 hover:bg-purple-500/20'
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
                onClick={() => handleCategoryClick(category.categoryName)}
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