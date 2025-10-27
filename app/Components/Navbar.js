// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="w-full max-w-[1360px] mx-auto px-4 py-4 flex items-center justify-between">
//       {/* Left - Logo & Navigation */}
//       <div className="flex items-center space-x-8">
//         <Image
//           src="/OIP.jpg"
//           alt="HP Logo"
//           width={80}
//           height={80}
//           className="hover:scale-105 transition-transform"
//         />

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex space-x-12 text-[#767676] font-semibold text-base text-[20px]">
//           <a href="#" className="hover:text-black transition-colors duration-200">
//             Explore
//           </a>
//           <a href="#" className="hover:text-black transition-colors duration-200">
//             Shop
//           </a>
//           <a href="#" className="hover:text-black transition-colors duration-200">
//             Support
//           </a>
//         </div>
//       </div>

//       {/* Right - Search, Cart & Sign in */}
//       <div className="hidden lg:flex items-center space-x-6">
//         <div className="flex items-center w-80 border-2 border-gray-200 rounded-full px-4 py-2 hover:border-blue-500 transition-colors duration-200">
//           <input
//             type="text"
//             placeholder="Search HP Support"
//             className="w-full outline-none text-gray-700 bg-transparent text-sm"
//           />
//           <FaSearch className="text-gray-500 ml-2" />
//         </div>

//         <FaShoppingCart className="text-gray-700 text-xl hover:text-blue-600 cursor-pointer transition-colors duration-200" />

//         <button className="hover:scale-105 px-8 py-2 font-semibold rounded-full transition-colors duration-200 shadow-md"
//   style={{ 
//     background: 'linear-gradient(to right, #59c7b5, #59c7b5, #0095d4)' 
//   }}>
//           Sign in
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="lg:hidden flex items-center">
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="text-2xl text-gray-700 focus:outline-none"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 space-y-6 md:hidden">
//           <a href="#" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
//             Explore
//           </a>
//           <a href="#" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
//             Shop
//           </a>
//           <a href="#" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
//             Support
//           </a>

//           <div className="flex items-center w-72 border-2 border-gray-200 rounded-full px-4 py-2 hover:border-blue-500 transition-colors duration-200">
//             <input
//               type="text"
//               placeholder="Search HP Support"
//               className="w-full outline-none text-gray-700 bg-transparent text-sm"
//             />
//             <FaSearch className="text-gray-500 ml-2" />
//           </div>

//           <FaShoppingCart className="text-gray-700 text-2xl hover:text-blue-600 cursor-pointer transition-colors duration-200" />

//           <button className="bg-gradient-to-r from-[#59c7b5] via-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent hover:bg-blue-700 text-white px-8 py-2 font-semibold rounded-full transition-colors duration-200 shadow-md">
//             Sign in
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }




"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {  getTotalItems, isCartOpen, toggleCart } = useCart();
  // const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cart = typeof window !== "undefined"
  ? JSON.parse(localStorage.getItem("cart")) || []
  : [];
  
  const router = useRouter();
 console.log("🛒 Current cart items in Navbar:", cart);
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-[1360px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center space-x-8">
          <Image src="/logomh.png" alt="HP Logo" width={100} height={100} className="hover:scale-105 transition-transform"/>
          <div className="hidden md:flex space-x-12 text-[#767676] font-semibold text-base text-[20px]">
            <Link href="/" className="hover:text-black transition-colors duration-200">Explore</Link>
            <Link href="/" className="hover:text-black transition-colors duration-200">Shop</Link>
            <Link href="/" className="hover:text-black transition-colors duration-200">Support</Link>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center w-80 border-2 border-gray-200 rounded-full px-4 py-2 hover:border-blue-500 transition-colors duration-200">
            <input type="text" placeholder="Search Printer Support" className="w-full outline-none text-gray-700 bg-transparent text-sm"/>
            <FaSearch className="text-gray-500 ml-2"/>
          </div>

          {/* Cart */}
          <Link href="/cart">
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart className="text-gray-700 text-xl"/>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold bg-red-500 animate-pulse">
                {getTotalItems()}
              </span>
            )}
          </div>
          </Link>

          <Link href="/SignIn">
  <button
    className="hover:scale-105 px-8 py-2 font-semibold rounded-full transition-colors duration-200 shadow-md text-white"
    style={{ background: "linear-gradient(to right, #59c7b5, #0095d4)" }}
  >
    Sign in
  </button>
</Link>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart className="text-gray-700 text-xl"/>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {getTotalItems()}
              </span>
            )}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700 focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

