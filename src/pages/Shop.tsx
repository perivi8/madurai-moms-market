import { useState } from 'react';
import { Filter, Search, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock products data
  const products = [
    {
      id: '1',
      name: 'Premium Basmati Rice',
      image: '/api/placeholder/300/200',
      retailPrice: 120,
      wholesalePrice: 100,
      unit: 'kg',
      category: 'Food Staples',
      discount: 10
    },
    {
      id: '2',
      name: 'Tata Tea Premium',
      image: '/api/placeholder/300/200',
      retailPrice: 85,
      wholesalePrice: 70,
      unit: '500g',
      category: 'Beverages'
    },
    {
      id: '3',
      name: 'Fortune Sunflower Oil',
      image: '/api/placeholder/300/200',
      retailPrice: 180,
      wholesalePrice: 165,
      unit: 'litre',
      category: 'Food Staples'
    },
    {
      id: '4',
      name: 'Parle-G Biscuits',
      image: '/api/placeholder/300/200',
      retailPrice: 25,
      unit: 'pack',
      category: 'Packaged Foods'
    },
    {
      id: '5',
      name: 'Arhar Dal (Toor)',
      image: '/api/placeholder/300/200',
      retailPrice: 150,
      wholesalePrice: 130,
      unit: 'kg',
      category: 'Food Staples'
    },
    {
      id: '6',
      name: 'Britannia Milk Bikis',
      image: '/api/placeholder/300/200',
      retailPrice: 40,
      unit: 'pack',
      category: 'Packaged Foods',
      inStock: false
    }
  ];

  const categories = ['All Products', 'Food Staples', 'Beverages', 'Packaged Foods', 'Tobacco Products'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-cream/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Shop Groceries
            </h1>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Fresh products from our store to your doorstep. Retail and wholesale prices available.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Category Filter */}
              <Select defaultValue="All Products">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select defaultValue="featured">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="font-body text-muted-foreground">
              Showing {products.length} products
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary-hover">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;