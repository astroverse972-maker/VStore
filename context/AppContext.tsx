
import React, { createContext, useReducer, ReactNode, Dispatch, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface AppState {
  cart: CartItem[];
  wishlist: number[];
}

type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number; selectedSize: string; selectedColor: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; selectedSize: string; selectedColor: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: number }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number };

const initialState: AppState = {
  cart: [],
  wishlist: [],
};

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cart.findIndex(
        item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.selectedColor === action.payload.selectedColor
      );
      if (existingItemIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter(
          item => !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.selectedColor === action.payload.selectedColor)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
        const { id, selectedSize, selectedColor, quantity } = action.payload;
        if (quantity < 1) {
             return {
                ...state,
                cart: state.cart.filter(
                item => !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
                ),
            };
        }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
        return {...state, cart: []};
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.includes(action.payload)) return state;
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlist: state.wishlist.filter(id => id !== action.payload) };
    default:
      return state;
  }
};

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<Action>;
  triggerCartAnimation: () => void;
  cartShake: boolean;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  quickViewProduct: Product | null;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [cartShake, setCartShake] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const triggerCartAnimation = () => {
    setCartShake(true);
    setTimeout(() => setCartShake(false), 820);
  };
  
  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <AppContext.Provider value={{ state, dispatch, triggerCartAnimation, cartShake, openQuickView, closeQuickView, quickViewProduct }}>
      {children}
    </AppContext.Provider>
  );
};
