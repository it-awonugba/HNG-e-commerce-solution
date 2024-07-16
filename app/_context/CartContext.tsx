"use client";
import React, { useState, createContext, useContext, ReactNode } from "react";
import { Product } from "../_hooks/useFetchData";
import { useFormatPrice } from "../_hooks/useFormatPrice";

export type CartItemType = {
  id: string;
  product: Product;
  quantity: number;
};

interface CartContextType {
  cart: CartItemType[];
  addProductToCart: (product: Product, quantity?: number) => void;
  removeProductFromCart: (id: string) => void;
  getCartSummary: () => { total: string; tax: string; netTotal: string };
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const { formatPrice } = useFormatPrice();

  const addProductToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      const otherItems = prevCart.filter((item) => item.id !== product.id);
      if (existingItem) {
        return [
          ...otherItems,
          { ...existingItem, quantity: existingItem!.quantity + quantity },
        ];
      }

      return [
        ...prevCart,
        { id: product.id, product: product, quantity: quantity },
      ];
    });
  };

  const removeProductFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  const getCartSummary = () => {
    if (cart.length > 0) {
      const total = cart.reduce((total, cartItem) => {
        const price = formatPrice(cartItem.product);
        return total + Number(price.slice(1)) * cartItem.quantity;
      }, 0);

      const symbol = formatPrice(cart[0].product).charAt(0);
      const tax = 0.1 * total;
      const netTotal = total - Number(tax.toFixed(2));

      return {
        total: `${symbol}${total.toFixed(2)}`,
        tax: `${symbol}${tax.toFixed(2)}`,
        netTotal: `${symbol}${netTotal.toFixed(2)}`,
      };
    }
    return {
      total: "0.00",
      tax: "0.00",
      netTotal: "0.00",
    };
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        getCartSummary,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
