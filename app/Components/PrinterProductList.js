// "use client";

// import React, { useState } from 'react';
// import { printerProducts } from '../data/printerProducts';

// const PrinterStore = () => {
    
//   const [product] = useState(printerProducts);
//   const [filteredProducts, setFilteredProducts] = useState(printerProducts);
//   const [sortBy, setSortBy] = useState('featured');
//   const [priceRange, setPriceRange] = useState([0, 2000]);
//   const [wishlist, setWishlist] = useState(new Set());

//   const toggleWishlist = (productId) => {
//     const newWishlist = new Set(wishlist);
//     if (newWishlist.has(productId)) {
//       newWishlist.delete(productId);
//     } else {
//       newWishlist.add(productId);
//     }
//     setWishlist(newWishlist);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Navigation */}
      

//       {/* Hero Section */}
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
//                   Expert-curated collection with unbeatable performance.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
//                   Shop Now
//                 </button>
//                 <button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
//                   View Deals
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-8 pt-8">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-400">4.8/5</div>
//                   <div className="text-sm text-slate-400 mt-1">Customer Rating</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-cyan-400">30+</div>
//                   <div className="text-sm text-slate-400 mt-1">Premium Models</div>
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
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full transform scale-150"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filters & Controls */}
//       <section className="border-y border-slate-700 bg-slate-800/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
//               <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                 <option>All Printers</option>
//                 <option>Home & Office</option>
//                 <option>Professional Photo</option>
//                 <option>Large Format</option>
//                 <option>Portable</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-2">Price Range</label>
//               <div className="flex items-center space-x-4">
//                 <span className="text-slate-400 text-sm">${priceRange[0]}</span>
//                 <input 
//                   type="range" 
//                   min="0" 
//                   max="2000" 
//                   value={priceRange[1]}
//                   onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
//                   className="flex-1 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <span className="text-slate-400 text-sm">${priceRange[1]}</span>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
//               <select 
//                 value={sortBy} 
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="rating">Highest Rated</option>
//                 <option value="newest">Newest First</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Premium Printer Collection
//             </h2>
//             <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//               Carefully curated selection of high-performance printers for every need and budget
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard 
//                 key={product.id} 
//                 product={product} 
//                 isWishlisted={wishlist.has(product.id)}
//                 onWishlistToggle={toggleWishlist}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-slate-800/30 border-y border-slate-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300">
//               <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">🚚</span>
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">Free Shipping</h3>
//               <p className="text-slate-400">Free delivery on all orders over $299</p>
//             </div>

//             <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300">
//               <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">🔒</span>
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">2-Year Warranty</h3>
//               <p className="text-slate-400">Comprehensive protection for your investment</p>
//             </div>

//             <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300">
//               <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">💯</span>
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
//               <p className="text-slate-400">24/7 technical support from printer specialists</p>
//             </div>

//             <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300">
//               <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">↩️</span>
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">30-Day Returns</h3>
//               <p className="text-slate-400">Hassle-free returns if not satisfied</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 border-t border-slate-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-sm">P</span>
//                 </div>
//                 <span className="text-xl font-bold text-white">PrintPro</span>
//               </div>
//               <p className="text-slate-400">
//                 Your trusted partner for premium printing solutions since 2024.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="text-white font-semibold mb-4">Products</h4>
//               <ul className="space-y-2 text-slate-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Home Printers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Office Printers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Photo Printers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Large Format</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Support</h4>
//               <ul className="space-y-2 text-slate-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Newsletter</h4>
//               <div className="space-y-4">
//                 <p className="text-slate-400">Get the latest deals and product updates</p>
//                 <div className="flex">
//                   <input 
//                     type="email" 
//                     placeholder="Enter your email"
//                     className="flex-1 bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors">
//                     Subscribe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// const ProductCard = ({ product, isWishlisted, onWishlistToggle }) => {
//   const discountPercentage = Math.round(((product.price - product.discountPrice) / product.price) * 100);

//   return (
//     <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
//       {/* Card Header with Badges */}
//       <div className="relative">
//         <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
//           {discountPercentage > 0 && (
//             <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
//               -{discountPercentage}% OFF
//             </span>
//           )}
//           {product.stock < 5 && product.stock > 0 && (
//             <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
//               Low Stock
//             </span>
//           )}
//           {product.stock === 0 && (
//             <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
//               Out of Stock
//             </span>
//           )}
//         </div>

//         {/* Wishlist Button */}
//         <button
//           onClick={() => onWishlistToggle(product.id)}
//           className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
//             isWishlisted 
//               ? 'bg-red-500/20 border border-red-500/50 text-red-400' 
//               : 'bg-slate-700/50 border border-slate-600/50 text-slate-400 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400'
//           }`}
//         >
//           <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//         </button>

//         {/* Product Image */}
//         <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
//           <div className="text-6xl text-slate-600 group-hover:scale-110 transition-transform duration-500">
//             🖨️
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
//             <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//               Quick View
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-6">
//         {/* Category & Rating */}
//         <div className="flex justify-between items-start mb-3">
//           <span className="text-blue-400 text-sm font-semibold uppercase tracking-wide">
//             Professional
//           </span>
//           <div className="flex items-center space-x-1">
//             <div className="flex text-amber-400">
//               {'★'.repeat(Math.floor(product.rating))}
//               {'☆'.repeat(5 - Math.floor(product.rating))}
//             </div>
//             <span className="text-slate-400 text-sm">({product.rating})</span>
//           </div>
//         </div>

//         {/* Product Name */}
//         <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-blue-300 transition-colors duration-300">
//           {product.name}
//         </h3>

//         {/* Description */}
//         <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
//           {product.description}
//         </p>

//         {/* Features */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {product.features.slice(0, 2).map((feature, index) => (
//             <span key={index} className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">
//               {feature}
//             </span>
//           ))}
//           {product.features.length > 2 && (
//             <span className="bg-slate-700/50 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-600">
//               +{product.features.length - 2} more
//             </span>
//           )}
//         </div>

//         {/* Price & Stock */}
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
//           <div className={`text-sm font-medium ${
//             product.stock > 5 ? 'text-green-400' : 
//             product.stock > 0 ? 'text-amber-400' : 'text-red-400'
//           }`}>
//             {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-3">
//           <button 
//             className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
//               product.stock === 0 
//                 ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
//                 : 'bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105 shadow-lg shadow-blue-500/25'
//             }`}
//             disabled={product.stock === 0}
//           >
//             {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrinterStore;





"use client";

import React, { useState, useEffect } from 'react';
import { printerProducts } from '../data/printerProducts';
import { useCart } from '../context/CartContext';

const PrinterStore = () => {
  const [products] = useState(printerProducts);
  const [filteredProducts, setFilteredProducts] = useState(printerProducts);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const {addToCart} = useCart();

  // Filter products based on category and price
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price
    filtered = filtered.filter(product => 
      product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, products]);

  // Update cart count
  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cart]);

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  // const addToCart = (product) => {
  //   if (product.stock === 0) return;
    
  //   setCart(prevCart => {
  //     const existingItem = prevCart.find(item => item.id === product.id);
      
  //     if (existingItem) {
  //       // Increase quantity if item already in cart
  //       return prevCart.map(item =>
  //         item.id === product.id 
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       // Add new item to cart
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalCartPrice = () => {
    return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
  };

  const categories = ['all', 'Home & Office', 'Professional', 'Professional Photo'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#59c7b5] via-[#0095d4] to-[#0077b6]">
      {/* Navigation */}
    

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-50 to-cyan-100 bg-clip-text text-transparent">
                    Premium
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
                    Printing Solutions
                  </span>
                </h1>
                <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                  Discover the perfect printer for your home, office, or creative studio. 
                  Expert-curated collection with unbeatable performance and cutting-edge technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20"
                >
                  Shop Now
                </button>
                <button className="bg-transparent border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                  View Deals
                </button>
              </div>

              
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 drop-shadow-2xl">🖨️</div>
                    <div className="text-white text-xl font-semibold">Premium Printer Showcase</div>
                    <div className="text-white/70 text-sm mt-2">
                      {filteredProducts.length} premium products available
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-cyan-300/20 blur-3xl rounded-full transform scale-150"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="bg-white/10 backdrop-blur-md border-y border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category === 'all' ? 'All Printers' : category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Price Range</label>
              <div className="flex items-center space-x-4">
                <span className="text-white/80 text-sm">${priceRange[0]}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="2000" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-white/80 text-sm">${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            <div className="flex items-end">
              <div className="text-white backdrop-blur-sm bg-white/10 rounded-xl px-4 py-2 border border-white/20">
                <span className="font-semibold">{filteredProducts.length}</span> products found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Premium Printer Collection
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Carefully curated selection of high-performance printers for every need and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isWishlisted={wishlist.has(product.id)}
                onWishlistToggle={toggleWishlist}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-white/70">Try adjusting your filters to see more products</p>
            </div>
          )}
        </div>
      </section>

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-2xl max-w-sm">
            <h3 className="text-white font-semibold mb-3 text-lg">Your Cart ({cartCount})</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm backdrop-blur-sm bg-white/10 rounded-xl p-3">
                  <span className="text-white truncate flex-1 mr-2 font-medium">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-white w-4 text-center font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-300 hover:text-red-200 ml-2 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center border-t border-white/30 pt-4">
              <span className="text-white font-bold text-lg">Total: ${getTotalCartPrice().toFixed(2)}</span>
              <button className="bg-white/30 hover:bg-white/40 text-slate-800 font-semibold px-6 py-2 rounded-xl text-sm transition-all duration-300 transform hover:scale-105">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
     
    </div>
  );
};

const ProductCard = ({ product, isWishlisted, onWishlistToggle, onAddToCart }) => {
  const discountPercentage = Math.round(((product.price - product.discountPrice) / product.price) * 100);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
      {/* Card Header with Badges */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
          {discountPercentage > 0 && (
            <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              -{discountPercentage}% OFF
            </span>
          )}
          {product.stock < 5 && product.stock > 0 && (
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Low Stock
            </span>
          )}
          {product.stock === 0 && (
            <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Out of Stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onWishlistToggle(product.id)}
          className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isWishlisted 
              ? 'bg-red-500/30 border border-red-400/50 text-red-300 shadow-lg' 
              : 'bg-white/20 border border-white/30 text-white/80 hover:bg-red-500/30 hover:border-red-400/50 hover:text-red-300 hover:shadow-lg'
          }`}
        >
          <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="text-6xl text-white/40 group-hover:scale-110 transition-transform duration-500">
              🖨️
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-semibold">
              Quick View
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category & Rating */}
        <div className="flex justify-between items-start mb-4">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
            <div className="flex text-amber-300">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-white/80 text-sm font-semibold">({product.rating})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-cyan-100 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="bg-white/15 text-white/90 px-3 py-1 rounded-full text-xs border border-white/20">
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs border border-white/20">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        {/* Price & Stock */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            {product.discountPrice < product.price ? (
              <>
                <span className="text-2xl font-bold text-white">${product.discountPrice}</span>
                <span className="text-lg text-white/60 line-through">${product.price}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-white">${product.price}</span>
            )}
          </div>
          <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
            product.stock > 5 ? 'bg-green-500/20 text-green-300 border border-green-400/30' : 
            product.stock > 0 ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30' : 'bg-red-500/20 text-red-300 border border-red-400/30'
          }`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={() =>  onAddToCart(product)}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
              product.stock === 0 
                ? 'bg-white/10 text-white/40 cursor-not-allowed' 
                : 'bg-white/30 hover:bg-white/40 text-slate-800 transform hover:scale-105 shadow-lg hover:shadow-white/20'
            }`}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrinterStore;