import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  image: string;
  retailPrice: number;
  wholesalePrice?: number;
  unit: string;
  category: string;
  inStock?: boolean;
  discount?: number;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedPrice: 'retail' | 'wholesale';
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; priceType: 'retail' | 'wholesale' } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, priceType } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id && item.selectedPrice === priceType
      );

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
      } else {
        const newItem: CartItem = {
          ...product,
          quantity: 1,
          selectedPrice: priceType,
        };
        newItems = [...state.items, newItem];
      }

      const total = newItems.reduce((sum, item) => {
        const price = item.selectedPrice === 'wholesale' ? item.wholesalePrice || item.retailPrice : item.retailPrice;
        return sum + (price * item.quantity);
      }, 0);

      return { items: newItems, total };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const total = newItems.reduce((sum, item) => {
        const price = item.selectedPrice === 'wholesale' ? item.wholesalePrice || item.retailPrice : item.retailPrice;
        return sum + (price * item.quantity);
      }, 0);
      return { items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }

      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );

      const total = newItems.reduce((sum, item) => {
        const price = item.selectedPrice === 'wholesale' ? item.wholesalePrice || item.retailPrice : item.retailPrice;
        return sum + (price * item.quantity);
      }, 0);

      return { items: newItems, total };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

const loadCartFromStorage = (): CartState => {
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return { items: [], total: 0 };
};

const saveCartToStorage = (state: CartState) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, loadCartFromStorage());

  // Save cart to localStorage whenever state changes
  useEffect(() => {
    saveCartToStorage(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
