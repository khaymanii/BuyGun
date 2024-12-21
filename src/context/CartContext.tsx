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
  addToCart: (item: {
    id: string;
    name: string;
    price: string;
    image: string;
  }) => Promise<void>;
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
  const addToCart = async (item: {
    id: string;
    name: string;
    price: string | number;
  }) => {
    if (currentUser) {
      const userCartRef = doc(db, "carts", currentUser.uid);

      try {
        // Ensure cart document exists
        const userCartDoc = await getDoc(userCartRef);

        if (!userCartDoc.exists()) {
          await setDoc(userCartRef, {
            cartCount: 0,
            items: [],
          });
        }

        // Fetch current cartCount from Firestore
        const currentCartCount = userCartDoc.exists()
          ? userCartDoc.data()?.cartCount || 0
          : 0;

        // Update cartCount and items
        await updateDoc(userCartRef, {
          cartCount: currentCartCount + 1,
          items: arrayUnion(item),
        });

        setCartCount(currentCartCount + 1);
        toast.success(`${item.name} added to cart`);
      } catch (error) {
        console.error("Error updating cart:", error);
        toast.error("An error occurred while adding the item to your cart");
      }
    } else {
      console.warn("User must be logged in to add items to the cart");
      toast.error("Please sign in to add items to the cart");
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
