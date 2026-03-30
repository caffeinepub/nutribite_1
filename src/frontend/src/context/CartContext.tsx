import { createContext, useContext, useState } from "react";
import type { Product, ProductSize } from "../data/products";

export type CartItem = {
  product: Product;
  size: ProductSize;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, size: ProductSize) => void;
  removeItem: (productId: string, sizeName: string) => void;
  updateQuantity: (productId: string, sizeName: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product, size: ProductSize) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.size.name === size.name,
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size.name === size.name
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, sizeName: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.id === productId && i.size.name === sizeName),
      ),
    );
  };

  const updateQuantity = (productId: string, sizeName: string, qty: number) => {
    if (qty < 1) {
      removeItem(productId, sizeName);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.size.name === sizeName
          ? { ...i, quantity: qty }
          : i,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.size.price * i.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
