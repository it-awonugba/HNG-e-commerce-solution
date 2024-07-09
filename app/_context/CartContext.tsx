"use client";
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Product } from "../../data/data";

interface CartContextType {
  cart: Product[];
  addProductToCart: (product: Product, quantity?: number) => void;
  removeProductFromCart: (id: number) => void;
  setCart: Dispatch<SetStateAction<Product[]>>;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProductToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity! += quantity;
        if (updatedCart[existingItemIndex].quantity! <= 0) {
          return updatedCart.filter((item) => item.id !== product.id);
        }
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeProductFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
