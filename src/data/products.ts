import { Product } from '@/contexts/CartContext';

export const allProducts: Product[] = [
  // Page 1 - 8 products
  {
    id: '1',
    name: 'Premium Basmati Rice',
    image: '/shop/1.jpg',
    retailPrice: 120,
    wholesalePrice: 100,
    unit: 'kg',
    category: 'Food Staples',
    discount: 10,
    description: 'Premium quality aged basmati rice with long grains and aromatic fragrance. Perfect for biryanis and special occasions.',
    inStock: true
  },
  {
    id: '2',
    name: 'Tata Tea Premium',
    image: '/shop/2.jpg',
    retailPrice: 85,
    wholesalePrice: 70,
    unit: '500g',
    category: 'Beverages',
    description: 'Rich and flavorful tea blend made from the finest tea leaves. Perfect for your morning and evening tea.',
    inStock: true
  },
  {
    id: '3',
    name: 'Fortune Sunflower Oil',
    image: '/shop/3.jpg',
    retailPrice: 180,
    wholesalePrice: 165,
    unit: 'litre',
    category: 'Food Staples',
    description: 'Pure and refined sunflower oil, rich in Vitamin E. Ideal for all cooking needs.',
    inStock: true
  },
  {
    id: '4',
    name: 'Parle-G Biscuits',
    image: '/shop/4.jpg',
    retailPrice: 25,
    unit: 'pack',
    category: 'Packaged Foods',
    description: 'Classic glucose biscuits loved by generations. Perfect with tea or as a quick snack.',
    inStock: true
  },
  {
    id: '5',
    name: 'Arhar Dal (Toor)',
    image: '/shop/5.jpg',
    retailPrice: 150,
    wholesalePrice: 130,
    unit: 'kg',
    category: 'Food Staples',
    description: 'High-quality toor dal, rich in protein and essential nutrients. A staple in Indian cuisine.',
    inStock: true
  },
  {
    id: '6',
    name: 'Britannia Milk Bikis',
    image: '/shop/6.jpg',
    retailPrice: 40,
    unit: 'pack',
    category: 'Packaged Foods',
    description: 'Delicious milk biscuits fortified with calcium and vitamins. Great for kids and adults.',
    inStock: true
  },
  {
    id: '7',
    name: 'Amul Fresh Milk',
    image: '/shop/7.jpg',
    retailPrice: 30,
    wholesalePrice: 28,
    unit: '500ml',
    category: 'Dairy Products',
    description: 'Fresh and pure milk from Amul. Rich in calcium and protein for healthy bones.',
    inStock: true
  },
  {
    id: '8',
    name: 'MDH Garam Masala',
    image: '/shop/8.jpg',
    retailPrice: 45,
    wholesalePrice: 40,
    unit: '100g',
    category: 'Spices',
    description: 'Authentic blend of aromatic spices. Adds perfect flavor to your Indian dishes.',
    inStock: true
  },

  // Page 2 - 8 products
  {
    id: '9',
    name: 'Surf Excel Detergent',
    image: '/shop/9.jpg',
    retailPrice: 95,
    wholesalePrice: 85,
    unit: '1kg',
    category: 'Household',
    description: 'Powerful detergent that removes tough stains and keeps clothes bright and clean.',
    inStock: true
  },
  {
    id: '10',
    name: 'Maggi 2-Minute Noodles',
    image: '/shop/10.jpg',
    retailPrice: 15,
    unit: 'pack',
    category: 'Packaged Foods',
    description: 'Quick and tasty noodles ready in just 2 minutes. Perfect for hunger pangs.',
    inStock: true
  },
  {
    id: '11',
    name: 'Colgate Toothpaste',
    image: '/shop/11.jpg',
    retailPrice: 55,
    wholesalePrice: 48,
    unit: '200g',
    category: 'Personal Care',
    description: 'Advanced cavity protection toothpaste for healthy teeth and fresh breath.',
    inStock: true
  },
  {
    id: '12',
    name: 'Aashirvaad Atta',
    image: '/shop/12.jpg',
    retailPrice: 220,
    wholesalePrice: 200,
    unit: '5kg',
    category: 'Food Staples',
    discount: 5,
    description: '100% whole wheat flour made from finest quality wheat. Perfect for rotis and parathas.',
    inStock: true
  },
  {
    id: '13',
    name: 'Nestle Cerelac',
    image: '/shop/13.jpg',
    retailPrice: 185,
    wholesalePrice: 170,
    unit: '300g',
    category: 'Baby Care',
    description: 'Nutritious baby cereal fortified with iron and vitamins for healthy growth.',
    inStock: true
  },
  {
    id: '14',
    name: 'Lux Soap',
    image: '/shop/14.jpg',
    retailPrice: 35,
    wholesalePrice: 30,
    unit: '125g',
    category: 'Personal Care',
    description: 'Luxurious beauty soap with moisturizing ingredients for soft and smooth skin.',
    inStock: true
  },
  {
    id: '15',
    name: 'Red Label Tea',
    image: '/shop/15.jpg',
    retailPrice: 75,
    wholesalePrice: 65,
    unit: '500g',
    category: 'Beverages',
    description: 'Strong and refreshing tea blend perfect for chai lovers.',
    inStock: true
  },
  {
    id: '16',
    name: 'Clinic Plus Shampoo',
    image: '/shop/16.jpg',
    retailPrice: 65,
    wholesalePrice: 58,
    unit: '350ml',
    category: 'Personal Care',
    description: 'Nourishing shampoo with milk protein for strong and healthy hair.',
    inStock: true
  },

  // Page 3 - 8 products
  {
    id: '17',
    name: 'Kissan Mixed Fruit Jam',
    image: '/shop/17.jpg',
    retailPrice: 85,
    wholesalePrice: 78,
    unit: '500g',
    category: 'Packaged Foods',
    description: 'Delicious mixed fruit jam made from real fruits. Perfect for breakfast.',
    inStock: true
  },
  {
    id: '18',
    name: 'Vim Dishwash Bar',
    image: '/shop/18.jpg',
    retailPrice: 25,
    wholesalePrice: 22,
    unit: '300g',
    category: 'Household',
    description: 'Powerful dishwash bar that cuts through grease and leaves dishes sparkling clean.',
    inStock: true
  },
  {
    id: '19',
    name: 'Bournvita Health Drink',
    image: '/shop/19.jpg',
    retailPrice: 195,
    wholesalePrice: 180,
    unit: '500g',
    category: 'Beverages',
    description: 'Nutritious health drink with vitamins and minerals for growing children.',
    inStock: true
  },
  {
    id: '20',
    name: 'Patanjali Honey',
    image: '/shop/20.jpg',
    retailPrice: 125,
    wholesalePrice: 115,
    unit: '500g',
    category: 'Natural Products',
    description: 'Pure and natural honey with no added sugar. Rich in antioxidants and nutrients.',
    inStock: true
  },
  {
    id: '21',
    name: 'Lizol Floor Cleaner',
    image: '/shop/21.jpg',
    retailPrice: 85,
    wholesalePrice: 78,
    unit: '500ml',
    category: 'Household',
    description: 'Powerful floor cleaner that kills 99.9% germs and leaves floors sparkling clean.',
    inStock: true
  },
  {
    id: '22',
    name: 'Haldiram Bhujia',
    image: '/shop/22.jpg',
    retailPrice: 45,
    unit: '200g',
    category: 'Snacks',
    description: 'Crispy and spicy bhujia made from gram flour. Perfect tea-time snack.',
    inStock: true
  },
  {
    id: '23',
    name: 'Dettol Antiseptic',
    image: '/shop/23.jpg',
    retailPrice: 95,
    wholesalePrice: 88,
    unit: '250ml',
    category: 'Healthcare',
    description: 'Trusted antiseptic liquid for cuts, wounds and personal hygiene.',
    inStock: true
  },
  {
    id: '24',
    name: 'Cadbury Dairy Milk',
    image: '/shop/24.jpg',
    retailPrice: 35,
    unit: '55g',
    category: 'Confectionery',
    description: 'Smooth and creamy milk chocolate that melts in your mouth.',
    inStock: true
  }
];

export const categories = [
  'All Products', 
  'Food Staples', 
  'Beverages', 
  'Packaged Foods', 
  'Dairy Products',
  'Spices',
  'Household',
  'Personal Care',
  'Baby Care',
  'Natural Products',
  'Snacks',
  'Healthcare',
  'Confectionery'
];

export const getProductsByPage = (page: number, itemsPerPage: number = 8) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return allProducts.slice(startIndex, endIndex);
};

export const getTotalPages = (itemsPerPage: number = 8) => {
  return Math.ceil(allProducts.length / itemsPerPage);
};

export const getProductById = (id: string) => {
  return allProducts.find(product => product.id === id);
};

export const filterProducts = (
  products: Product[],
  searchQuery: string,
  category: string,
  sortBy: string
) => {
  let filtered = [...products];

  // Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by category
  if (category && category !== 'All Products') {
    filtered = filtered.filter(product => product.category === category);
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.retailPrice - b.retailPrice);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.retailPrice - a.retailPrice);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      // Keep original order for 'featured'
      break;
  }

  return filtered;
};
