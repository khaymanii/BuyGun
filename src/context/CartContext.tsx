/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { db } from "../firebaseConfig/firebase";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartContextValue {
  cartCount: number | null; // Allow `null` to represent the loading state
  cartItems: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
  subtotal: number;
  addToCart: (item: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => Promise<void>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const [cartCount, setCartCount] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<
    {
      id: string;
      name: string;
      price: number;
      image: string;
    }[]
  >([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  const calculateSubtotal = (items: typeof cartItems) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (currentUser) {
        try {
          const cartDoc = await getDoc(doc(db, "carts", currentUser.uid));
          if (cartDoc.exists()) {
            const data = cartDoc.data();
            setCartCount(data.cartCount || 0);
            setCartItems(data.items || []);
            setSubtotal(calculateSubtotal(data.items || []));
          } else {
            await setDoc(doc(db, "carts", currentUser.uid), {
              cartCount: 0,
              items: [],
              subtotal: 0,
            });
            setCartCount(0);
            setCartItems([]);
            setSubtotal(0);
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
          setCartCount(0);
          setCartItems([]);
          setSubtotal(0);
        }
      } else {
        setCartCount(0);
        setCartItems([]);
        setSubtotal(0);
      }
    };

    fetchCart();
  }, [currentUser]);

  const addToCart = async (item: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => {
    if (currentUser) {
      const userCartRef = doc(db, "carts", currentUser.uid);

      try {
        const userCartDoc = await getDoc(userCartRef);
        if (!userCartDoc.exists()) {
          await setDoc(userCartRef, { cartCount: 0, items: [], subtotal: 0 });
        }

        const currentCartItems = userCartDoc.data()?.items || [];
        const newSubtotal =
          currentCartItems.reduce(
            (total: number, cartItem: { price: number }) =>
              total + cartItem.price,
            0
          ) + item.price;

        await updateDoc(userCartRef, {
          cartCount: currentCartItems.length + 1,
          items: arrayUnion(item), // `price` is already a number
          subtotal: newSubtotal,
        });

        setCartCount(currentCartItems.length + 1);
        setCartItems([...currentCartItems, item]);
        setSubtotal(newSubtotal);
        toast.success(`${item.name} added to cart`);
      } catch (error) {
        console.error("Error updating cart:", error);
        toast.error("An error occurred while adding the item to your cart");
      }
    } else {
      toast.error("Please sign in to add items to the cart");
    }
  };

  const value: CartContextValue = {
    cartCount,
    cartItems,
    addToCart,
    subtotal,
  };

  return (
    <CartContext.Provider value={value}>
      {cartCount !== null ? children : null}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
