/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { db } from "../firebaseConfig/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext"; // Import AuthContext to access currentUser

interface CartContextValue {
  cartCount: number | null; // Allow `null` to represent the loading state
  addToCart: () => Promise<void>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { currentUser } = useAuth(); // Access currentUser from AuthContext
  const [cartCount, setCartCount] = useState<number | null>(null); // Start with `null`

  // Fetch cart count from Firestore when user logs in or changes
  useEffect(() => {
    const fetchCartCount = async () => {
      if (currentUser) {
        try {
          const cartDoc = await getDoc(doc(db, "carts", currentUser.uid));
          if (cartDoc.exists()) {
            const data = cartDoc.data();
            setCartCount(data.cartCount || 0);
          } else {
            // Initialize cart document for the user if not present
            await setDoc(doc(db, "carts", currentUser.uid), { cartCount: 0 });
            setCartCount(0);
          }
        } catch (error) {
          console.error("Error fetching cart count:", error);
          setCartCount(0); // Fallback to 0 on error
        }
      } else {
        setCartCount(0); // Reset cart count if no user is logged in
      }
    };

    fetchCartCount();
  }, [currentUser]);

  // Function to add items to the cart
  const addToCart = async () => {
    if (currentUser) {
      try {
        const newCount = (cartCount || 0) + 1;
        setCartCount(newCount);

        // Update cart count in Firestore
        await updateDoc(doc(db, "carts", currentUser.uid), {
          cartCount: newCount,
        });
      } catch (error) {
        console.error("Error updating cart count:", error);
      }
    } else {
      console.warn("User must be logged in to add items to the cart");
    }
  };

  const value: CartContextValue = {
    cartCount,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {cartCount !== null ? children : null}
    </CartContext.Provider>
  ); // Render children only after cartCount is loaded
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
