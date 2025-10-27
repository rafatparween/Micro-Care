// "use client";

// import React, { useState, useEffect } from "react";
// import { printerProducts } from "../data/printerProducts";
// import { useCart } from "../context/CartContext";
// import Navbar from "../Components/Navbar";

// const PrinterStore = () => {
//   const [products] = useState(printerProducts);
//   const [filteredProducts, setFilteredProducts] = useState(printerProducts);
//   const [sortBy, setSortBy] = useState("featured");
//   const [priceRange, setPriceRange] = useState([0, 2000]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [wishlist, setWishlist] = useState(new Set());

//   // use global cart actions
//   const { addToCart, cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

//   useEffect(() => {
//     let filtered = [...products];

//     if (selectedCategory !== "all") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     filtered = filtered.filter(
//       (product) => product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1]
//     );

//     switch (sortBy) {
//       case "price-low":
//         filtered.sort((a, b) => a.discountPrice - b.discountPrice);
//         break;
//       case "price-high":
//         filtered.sort((a, b) => b.discountPrice - a.discountPrice);
//         break;
//       case "rating":
//         filtered.sort((a, b) => b.rating - a.rating);
//         break;
//       case "newest":
//         filtered.sort((a, b) => b.id - a.id);
//         break;
//       default:
//         break;
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, priceRange, sortBy, products]);

//   const toggleWishlist = (productId) => {
//     const newWishlist = new Set(wishlist);
//     if (newWishlist.has(productId)) newWishlist.delete(productId);
//     else newWishlist.add(productId);
//     setWishlist(newWishlist);
//   };

//   const categories = ["all", "Home & Office", "Professional", "Professional Photo"];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       <Navbar />

//       {/* Hero & Filters (kept similar) */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                   <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
//                     Premium
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                     Printing Solutions
//                   </span>
//                 </h1>
//                 <p className="text-xl text-slate-300 max-w-2xl">
//                   Discover the perfect printer for your home, office, or creative studio.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => document.getElementById("products-section").scrollIntoView({ behavior: "smooth" })}
//                   className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
//                 >
//                   Shop Now
//                 </button>
//                 <button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
//                   View Deals
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-8 pt-8">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-400">{products.length}+</div>
//                   <div className="text-sm text-slate-400 mt-1">Premium Models</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-cyan-400">{Math.max(...products.map((p) => p.rating))}/5</div>
//                   <div className="text-sm text-slate-400 mt-1">Top Rating</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-400">24/7</div>
//                   <div className="text-sm text-slate-400 mt-1">Expert Support</div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
//                 <div className="bg-slate-700 rounded-xl p-6 aspect-video flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-6xl mb-4">🖨️</div>
//                     <div className="text-slate-300">Premium Printer Showcase</div>
//                     <div className="text-slate-400 text-sm mt-2">{filteredProducts.length} products available</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full transform scale-150"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="border-y border-slate-700 bg-slate-800/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
//               <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                 {categories.map((category) => (
//                   <option key={category} value={category}>
//                     {category === "all" ? "All Printers" : category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-2">Price Range</label>
//               <div className="flex items-center space-x-4">
//                 <span className="text-slate-400 text-sm">${priceRange[0]}</span>
//                 <input type="range" min="0" max="2000" value={priceRange[1]} onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} className="flex-1 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer slider" />
//                 <span className="text-slate-400 text-sm">${priceRange[1]}</span>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="rating">Highest Rated</option>
//                 <option value="newest">Newest First</option>
//               </select>
//             </div>

//             <div className="flex items-end">
//               <div className="text-slate-300">
//                 <span className="font-semibold">{filteredProducts.length}</span> products found
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section id="products-section" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">Premium Printer Collection</h2>
//             <p className="text-xl text-slate-300 max-w-2xl mx-auto">Carefully curated selection of high-performance printers for every need and budget</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 isWishlisted={wishlist.has(product.id)}
//                 onWishlistToggle={toggleWishlist}
//                 onAddToCart={() => addToCart(product)}
//               />
//             ))}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-12">
//               <div className="text-6xl mb-4">😔</div>
//               <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
//               <p className="text-slate-400">Try adjusting your filters to see more products</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Cart Sidebar */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-4 right-4 z-50">
//           <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-2xl max-w-sm">
//             <h3 className="text-white font-semibold mb-3">Your Cart ({cart.reduce((s, i) => s + i.quantity, 0)})</h3>
//             <div className="space-y-2 max-h-60 overflow-y-auto mb-3">
//               {cart.map((item) => (
//                 <div key={item.id} className="flex justify-between items-center text-sm">
//                   <span className="text-slate-300 truncate flex-1 mr-2">{item.name}</span>
//                   <div className="flex items-center space-x-2">
//                     <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center text-slate-300 hover:bg-slate-600">-</button>
//                     <span className="text-white w-4 text-center">{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center text-slate-300 hover:bg-slate-600">+</button>
//                     <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 ml-2">×</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-between items-center border-t border-slate-700 pt-3">
//               <span className="text-white font-semibold">Total: ${getTotalPrice().toFixed(2)}</span>
//               <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm">Checkout</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const ProductCard = ({ product, isWishlisted, onWishlistToggle, onAddToCart }) => {
//   const discountPercentage = Math.round(((product.price - product.discountPrice) / product.price) * 100);

//   return (
//     <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
//       <div className="relative">
//         <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
//           {discountPercentage > 0 && <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">-{discountPercentage}% OFF</span>}
//           {product.stock < 5 && product.stock > 0 && <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">Low Stock</span>}
//           {product.stock === 0 && <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">Out of Stock</span>}
//         </div>

//         <button onClick={() => onWishlistToggle(product.id)} className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isWishlisted ? 'bg-red-500/20 border border-red-500/50 text-red-400' : 'bg-slate-700/50 border border-slate-600/50 text-slate-400 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400'}`}>
//           <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//         </button>

//         <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
//           {product.image ? <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> : <div className="text-6xl text-slate-600 group-hover:scale-110 transition-transform duration-500">🖨️</div>}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
//             <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">Quick View</button>
//           </div>
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="flex justify-between items-start mb-3">
//           <span className="text-blue-400 text-sm font-semibold uppercase tracking-wide">{product.category}</span>
//           <div className="flex items-center space-x-1">
//             <div className="flex text-amber-400">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</div>
//             <span className="text-slate-400 text-sm">({product.rating})</span>
//           </div>
//         </div>

//         <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-blue-300 transition-colors duration-300">{product.name}</h3>

//         <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {product.features.slice(0, 2).map((f, i) => <span key={i} className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{f}</span>)}
//           {product.features.length > 2 && <span className="bg-slate-700/50 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-600">+{product.features.length - 2} more</span>}
//         </div>

//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center space-x-2">
//             {product.discountPrice < product.price ? (
//               <>
//                 <span className="text-2xl font-bold text-white">${product.discountPrice}</span>
//                 <span className="text-lg text-slate-400 line-through">${product.price}</span>
//               </>
//             ) : (
//               <span className="text-2xl font-bold text-white">${product.price}</span>
//             )}
//           </div>
//           <div className={`text-sm font-medium ${product.stock > 5 ? 'text-green-400' : product.stock > 0 ? 'text-amber-400' : 'text-red-400'}`}>
//             {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//           </div>
//         </div>

//         <div className="flex space-x-3">
//           <button onClick={onAddToCart} className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${product.stock === 0 ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105 shadow-lg shadow-blue-500/25'}`} disabled={product.stock === 0}>
//             {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrinterStore;




"use client";

import React, { useState, useEffect } from "react";
import { printerProducts } from "../data/printerProducts";
import { useCart } from "../context/CartContext";
import Navbar from "../Components/Navbar";

const PrinterStore = () => {
  const [products] = useState(printerProducts);
  const [filteredProducts, setFilteredProducts] = useState(printerProducts);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    let filtered = [...products];
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    filtered = filtered.filter(
      (p) => p.discountPrice >= priceRange[0] && p.discountPrice <= priceRange[1]
    );
    if (sortBy === "price-low") filtered.sort((a, b) => a.discountPrice - b.discountPrice);
    if (sortBy === "price-high") filtered.sort((a, b) => b.discountPrice - a.discountPrice);
    if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
    if (sortBy === "newest") filtered.sort((a, b) => b.id - a.id);
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#59c7b5] via-[#0095d4] to-[#0077b6]">
      <Navbar />
      <section className="py-10">
        <div className="grid md:grid-cols-3 gap-8 px-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-white text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-white/80 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-white text-lg font-semibold">
                  ${product.discountPrice}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-white/30 hover:bg-white/40 text-gray-900 font-semibold px-4 py-2 rounded-xl"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrinterStore;
