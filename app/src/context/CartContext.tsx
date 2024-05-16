import { ReactNode, createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  quantity: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: {children: ReactNode}) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product): void => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if(existingProduct) {
                return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            } else {
                return [...prevCart, {...product, quantity: 1}]
            }
        });
    }

    const removeFromCart = (productId: number): void => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    }

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? {...item, quantity} : item));
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if(context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
