// "use client";
// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   console.log("🛒 CartContext initialized with cart:", cart);

//   // Load cart from localStorage (optional persistence)
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) setCart(JSON.parse(storedCart));
//   }, []);

//   // Save cart to localStorage when changed
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Add to Cart
//   const addToCart = (item) => {
//     console.log("🛒 Adding to cart:", item);
//     setCart((prev) => {
//       const existing = prev.find((i) => i.id === item.id);
//       if (existing) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         return [...prev, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   // Remove
//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((i) => i.id !== id));
//   };

//   // Update quantity
//   const updateQuantity = (id, qty) => {
//     if (qty <= 0) return removeFromCart(id);
//     setCart((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
//     );
//   };

//   // Helpers
//   const getTotalItems = () =>
//     cart.reduce((sum, i) => sum + (i.quantity || 1), 0);

//   const getTotalPrice = () =>
//     cart.reduce(
//       (sum, i) => sum + (i.discountPrice || i.price) * (i.quantity || 1),
//       0
//     );

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage (only in browser)
  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ safe check
      const storedCart = localStorage.getItem("cart");
      if (storedCart) setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage (only in browser)
  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ safe check
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add to Cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  // Helpers
  const getTotalItems = () =>
    cart.reduce((sum, i) => sum + (i.quantity || 1), 0);

  const getTotalPrice = () =>
    cart.reduce(
      (sum, i) => sum + (i.discountPrice || i.price) * (i.quantity || 1),
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
