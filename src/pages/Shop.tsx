import { useState, useMemo, useEffect } from 'react';
import { Filter, Search, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts, categories, filterProducts, getTotalPages } from '@/data/products';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Calculate items per page based on screen size
  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (viewMode === 'list') {
        // For list view, always show 6 items per page
        setItemsPerPage(6);
        return;
      }

      const width = window.innerWidth;
      let itemsPerRow = 4; // Default for large screens (xl:grid-cols-4)
      
      if (width < 640) {
        // Mobile: grid-cols-1
        itemsPerRow = 1;
      } else if (width < 1024) {
        // Tablet: sm:grid-cols-2
        itemsPerRow = 2;
      } else if (width < 1280) {
        // Desktop: lg:grid-cols-3
        itemsPerRow = 3;
      } else {
        // Large Desktop: xl:grid-cols-4
        itemsPerRow = 4;
      }
      
      // Show 2 rows worth of products
      const newItemsPerPage = itemsPerRow * 2;
      setItemsPerPage(newItemsPerPage);
      // Reset to first page when items per page changes
      setCurrentPage(1);
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);
    
    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, [viewMode]);

  // Filter and paginate products
  const { paginatedProducts, totalPages, totalProducts } = useMemo(() => {
    const filtered = filterProducts(allProducts, searchQuery, selectedCategory, sortBy);
    const total = filtered.length;
    const pages = Math.ceil(total / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginated = filtered.slice(startIndex, endIndex);
    
    return {
      paginatedProducts: paginated,
      totalPages: pages,
      totalProducts: total
    };
  }, [searchQuery, selectedCategory, sortBy, currentPage, itemsPerPage]);

  // Reset to first page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  // Handle page change with scroll to top
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                onChange={(e) => { setSearchQuery(e.target.value); handleFilterChange(); }}
              />
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={(value) => { setSelectedCategory(value); handleFilterChange(); }}>
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
              <Select value={sortBy} onValueChange={(value) => { setSortBy(value); handleFilterChange(); }}>
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
              Showing {paginatedProducts.length} of {totalProducts} products ({itemsPerPage} per page)
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {paginatedProducts.map((product) => (
              viewMode === 'grid' ? (
                <ProductCard key={product.id} {...product} />
              ) : (
                <div key={product.id} className="flex gap-4 p-4 border rounded-lg bg-white shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">₹{product.retailPrice}</span>
                        <span className="text-sm text-muted-foreground">/{product.unit}</span>
                      </div>
                      <Button className="bg-primary hover:bg-primary-hover">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    size="sm"
                    variant={currentPage === page ? "default" : "outline"}
                    className={currentPage === page ? "bg-primary hover:bg-primary-hover" : ""}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;