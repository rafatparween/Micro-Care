// "use client";
// import { useRouter } from 'next/navigation';
// import Navbar from '../Components/Navbar';
// import { useCart } from '../context/CartContext';
// import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, getTotalItems, isLoaded } = useCart();
//   const router = useRouter();

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
//   };

//   const continueShopping = () => {
//     router.push('/');
//   };

//   const proceedToCheckout = () => {
//     alert('Proceeding to checkout!');
//   };

//   // Show loading state
//   if (!isLoaded) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="max-w-6xl mx-auto px-4 py-16">
//           <div className="text-center">
//             <div className="animate-pulse">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-8"></div>
//               <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
//               <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
        
//         <div className="max-w-6xl mx-auto px-4 py-16">
//           <div className="text-center">
//             <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
//               <FaShoppingBag className="text-4xl text-gray-400" />
//             </div>
            
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Your Cart is Empty
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
//               Looks like you haven't added any printers to your cart yet. Start shopping to find the perfect printer for your needs!
//             </p>
            
//             <button
//               onClick={continueShopping}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={continueShopping}
//               className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
//             >
//               <FaArrowLeft className="text-lg" />
//               <span className="font-semibold">Continue Shopping</span>
//             </button>
//           </div>
          
//           <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Items</p>
//             <p className="text-2xl font-bold text-blue-600">{getTotalItems()}</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* Cart Header */}
//               <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   Cart Items ({getTotalItems()})
//                 </h2>
//               </div>

//               {/* Cart Items List */}
//               <div className="divide-y divide-gray-200">
//                 {cart.map((item) => (
//                   <div key={`${item.id}-${item.addedAt || item.id}`} className="p-6 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center space-x-4">
//                       {/* Product Image */}
//                       <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
//                         {item.image && item.image !== '/images/printer1.jpg' ? (
//                           <img 
//                             src={item.image} 
//                             alt={item.name}
//                             className="w-16 h-16 object-cover rounded"
//                             onError={(e) => {
//                               e.target.style.display = 'none';
//                               e.target.nextSibling.style.display = 'block';
//                             }}
//                           />
//                         ) : (
//                           <span className="text-2xl text-blue-600">🖨️</span>
//                         )}
//                       </div>

//                       {/* Product Details */}
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-lg font-semibold text-gray-900 truncate">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                           {item.description}
//                         </p>
                        
//                         {/* Price */}
//                         <div className="flex items-center space-x-2 mt-2">
//                           <span className="text-xl font-bold text-gray-900">
//                             ${item.discountPrice}
//                           </span>
//                           {item.discountPrice < item.price && (
//                             <span className="text-sm text-gray-500 line-through">
//                               ${item.price}
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Quantity Controls */}
//                       <div className="flex items-center space-x-3">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
//                         >
//                           <FaMinus className="text-sm text-gray-700" />
//                         </button>
                        
//                         <span className="w-8 text-center font-semibold text-gray-900">
//                           {item.quantity}
//                         </span>
                        
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
//                         >
//                           <FaPlus className="text-sm text-gray-700" />
//                         </button>
//                       </div>

//                       {/* Item Total & Remove */}
//                       <div className="text-right">
//                         <div className="text-lg font-bold text-gray-900 mb-2">
//                           ${(item.discountPrice * item.quantity).toFixed(2)}
//                         </div>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-500 hover:text-red-700 transition-colors flex items-center space-x-1 text-sm"
//                         >
//                           <FaTrash className="text-sm" />
//                           <span>Remove</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8">
//               {/* Summary Header */}
//               <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 rounded-t-xl">
//                 <h2 className="text-xl font-semibold text-white">Order Summary</h2>
//               </div>

//               {/* Summary Content */}
//               <div className="p-6 space-y-4">
//                 {/* Subtotal */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
//                   <span className="font-semibold text-gray-900">${getTotalPrice().toFixed(2)}</span>
//                 </div>

//                 {/* Shipping */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="font-semibold text-green-600">FREE</span>
//                 </div>

//                 {/* Tax */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Tax (10%)</span>
//                   <span className="font-semibold text-gray-900">${(getTotalPrice() * 0.1).toFixed(2)}</span>
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-gray-200 pt-4">
//                   <div className="flex justify-between items-center text-lg">
//                     <span className="font-semibold text-gray-900">Total</span>
//                     <span className="text-2xl font-bold text-blue-600">
//                       ${(getTotalPrice() * 1.1).toFixed(2)}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Checkout Button */}
//                 <button
//                   onClick={proceedToCheckout}
//                   className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-6"
//                 >
//                   Proceed to Checkout
//                 </button>

//                 {/* Security Badge */}
//                 <div className="text-center mt-4">
//                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
//                     <span>🔒</span>
//                     <span>Secure checkout • 256-bit SSL encrypted</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useRouter } from "next/navigation";
// import Navbar from "../Components/Navbar";
// import { useCart } from "../context/CartContext";
// import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag } from "react-icons/fa";

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, getTotalItems, isLoaded, getTotalPrice } = useCart();
//   const router = useRouter();

//   const continueShopping = () => router.push("/store");
//   const proceedToCheckout = () => alert("Proceeding to checkout!");

//   if (!isLoaded) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="max-w-6xl mx-auto px-4 py-16">
//           <div className="text-center">
//             <div className="animate-pulse">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-8"></div>
//               <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
//               <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!cart || cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="max-w-6xl mx-auto px-4 py-16">
//           <div className="text-center">
//             <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
//               <FaShoppingBag className="text-4xl text-gray-400" />
//             </div>

//             <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>

//             <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
//               Looks like you haven't added any printers to your cart yet. Start shopping to find the perfect printer for your needs!
//             </p>

//             <button
//               onClick={continueShopping}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={continueShopping}
//               className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
//             >
//               <FaArrowLeft className="text-lg" />
//               <span className="font-semibold">Continue Shopping</span>
//             </button>
//           </div>

//           <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Items</p>
//             <p className="text-2xl font-bold text-blue-600">{getTotalItems()}</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-900">Cart Items ({getTotalItems()})</h2>
//               </div>

//               <div className="divide-y divide-gray-200">
//                 {cart.map((item) => (
//                   <div key={`${item.id}-${item.addedAt || item.id}`} className="p-6 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="w-16 h-16 object-cover rounded"
//                             onError={(e) => {
//                               e.target.style.display = "none";
//                               if (e.target.nextSibling) e.target.nextSibling.style.display = "block";
//                             }}
//                           />
//                         ) : (
//                           <span className="text-2xl text-blue-600">🖨️</span>
//                         )}
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
//                         <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>

//                         <div className="flex items-center space-x-2 mt-2">
//                           <span className="text-xl font-bold text-gray-900">${item.discountPrice}</span>
//                           {item.discountPrice < item.price && <span className="text-sm text-gray-500 line-through">${item.price}</span>}
//                         </div>
//                       </div>

//                       <div className="flex items-center space-x-3">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
//                         >
//                           <FaMinus className="text-sm text-gray-700" />
//                         </button>

//                         <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>

//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
//                         >
//                           <FaPlus className="text-sm text-gray-700" />
//                         </button>
//                       </div>

//                       <div className="text-right">
//                         <div className="text-lg font-bold text-gray-900 mb-2">${(item.discountPrice * item.quantity).toFixed(2)}</div>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-500 hover:text-red-700 transition-colors flex items-center space-x-1 text-sm"
//                         >
//                           <FaTrash className="text-sm" />
//                           <span>Remove</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8">
//               <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 rounded-t-xl">
//                 <h2 className="text-xl font-semibold text-white">Order Summary</h2>
//               </div>

//               <div className="p-6 space-y-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
//                   <span className="font-semibold text-gray-900">${getTotalPrice().toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="font-semibold text-green-600">FREE</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Tax (10%)</span>
//                   <span className="font-semibold text-gray-900">${(getTotalPrice() * 0.1).toFixed(2)}</span>
//                 </div>

//                 <div className="border-t border-gray-200 pt-4">
//                   <div className="flex justify-between items-center text-lg">
//                     <span className="font-semibold text-gray-900">Total</span>
//                     <span className="text-2xl font-bold text-blue-600">${(getTotalPrice() * 1.1).toFixed(2)}</span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={proceedToCheckout}
//                   className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-6"
//                 >
//                   Proceed to Checkout
//                 </button>

//                 <div className="text-center mt-4">
//                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
//                     <span>🔒</span>
//                     <span>Secure checkout • 256-bit SSL encrypted</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </div>
//   );
// }



// 'use client';

// import React from 'react';
// import Link from 'next/link';
// // import { useCart } from '../context/CartContext';

// export default function CartPage() {
// //  const { cart, getTotalItems, isCartOpen, toggleCart } = useCart();
// const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   if (!cart || cart.length === 0) {
//     return (
//       <div style={{ padding: 24 }}>
//         <h2>Your cart is empty</h2>
//         <p>
//           <Link href="/">Go back to shop</Link>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: 24 }}>
//       <h2>Your Cart</h2>
//       {/* <button onClick={clear} style={{ marginBottom: 12 }}>Clear Cart</button> */}
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {cart.map((it) => (
//           <li key={it.id} style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <div>
//                 <strong>{it.title || it.name || 'Product'}</strong>
//                 <div>Price: ${it.price ?? 0}</div>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                 <input
//                   type="number"
//                   min="1"
//                   value={it.qty || 1}
//                   onChange={(e) => updateQty(it.id, Number(e.target.value))}
//                   style={{ width: 64 }}
//                 />
//                 <div style={{ minWidth: 96, textAlign: 'right' }}>
//                   Subtotal: ${( (it.qty || 1) * (it.price || 0) ).toFixed(2)}
//                 </div>
//                 <button onClick={() => removeItem(it.id)} style={{ marginLeft: 12 }}>Remove</button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <div style={{ marginTop: 16 }}>
//         <strong>Total items:</strong> {cart && cart.length > 0 ? cart.reduce((sum, item) => sum + (item.qty || 1), 0) : 0}
//         <br />
//         <strong>Total price:</strong> ${cart && cart.length > 0 ? cart.reduce((sum, item) => sum + ((item.qty || 1) * (item.price || 0)), 0).toFixed(2) : '0.00'}
//       </div>
//     </div>
//   );
// }



'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Load cart from localStorage on client side
  //   const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCart(savedCart);
  //   setIsLoading(false);
  // }, []);


  useEffect(() => {
  // Ensure code runs only on client
  if (typeof window !== "undefined") {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      setCart([]); // fallback if corrupted data
    }
    setIsLoading(false);
  }
}, []);

  const updateQty = (productId, newQty) => {
    if (newQty < 1) return;
    
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, qty: newQty } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + ((item.qty || 1) * (item.price || 0)), 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <ShoppingBag className="w-12 h-12 text-blue-500" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Cart is Empty
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Looks like you haven't added any items to your cart yet.
            </p>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <ShoppingCart className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">{getTotalItems()} items</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-200/50">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Cart Items
                  </h2>
                  <button
                    onClick={clearCart}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold transition-colors duration-200"
                  >
                    <Trash2 className="w-5 h-5" />
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200/50">
                {cart.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50/50 transition-colors duration-200">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center shadow-lg">
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.title || item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          ) : (
                            <ShoppingBag className="w-8 h-8 text-blue-500" />
                          )}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {item.title || item.name || 'Product'}
                        </h3>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-2xl font-bold text-blue-600">
                            ${(item.price || 0).toFixed(2)}
                          </span>
                          <div className="text-sm text-gray-500">
                            ${((item.qty || 1) * (item.price || 0)).toFixed(2)} total
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700">Quantity:</span>
                            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl shadow-sm">
                              <button
                                onClick={() => updateQty(item.id, (item.qty || 1) - 1)}
                                className="p-2 hover:bg-gray-100 rounded-l-xl transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              
                              <input
                                type="number"
                                min="1"
                                value={item.qty || 1}
                                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                                className="w-16 py-2 text-center border-0 bg-transparent focus:outline-none focus:ring-0"
                              />
                              
                              <button
                                onClick={() => updateQty(item.id, (item.qty || 1) + 1)}
                                className="p-2 hover:bg-gray-100 rounded-r-xl transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Items:</span>
                  <span className="font-semibold text-gray-800">{getTotalItems()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold text-gray-800">${getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                
                <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-4">
                  <span className="text-gray-800">Total:</span>
                  <span className="text-blue-600 text-xl">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Proceed to Checkout
                </button>
                
                <Link 
                  href="/"
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Continue Shopping
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-xs text-gray-600">Secure Payment</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 text-sm font-bold">🚚</span>
                    </div>
                    <span className="text-xs text-gray-600">Free Shipping</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-amber-600 text-sm font-bold">↻</span>
                    </div>
                    <span className="text-xs text-gray-600">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};