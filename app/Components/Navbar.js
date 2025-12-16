// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import { useCart } from "../context/CartContext";
// import Link from "next/link";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const {  getTotalItems, isCartOpen, toggleCart } = useCart();
//   // const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cart = typeof window !== "undefined"
//   ? JSON.parse(localStorage.getItem("cart")) || []
//   : [];
  
//   const router = useRouter();
//  console.log("🛒 Current cart items in Navbar:", cart);
//   return (
//     <nav className="w-full bg-white shadow-sm border-b border-gray-200">
//       <div className="max-w-[1360px] mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo + Nav */}
//         <div className="flex items-center space-x-8">
//           <Image src="/epslogo.png" alt="HP Logo" width={150} height={150} className="hover:scale-105 transition-transform"/>
//           <div className="hidden md:flex space-x-12 text-[#767676] font-semibold text-base text-[20px]">
//             <Link href="/" className="hover:text-black transition-colors duration-200">Explore</Link>
//             <Link href="/" className="hover:text-black transition-colors duration-200">Shop</Link>
//             <Link href="/" className="hover:text-black transition-colors duration-200">Support</Link>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="hidden lg:flex items-center space-x-6">
//           <div className="flex items-center w-80 border-2 border-gray-200 rounded-full px-4 py-2 hover:border-blue-500 transition-colors duration-200">
//             <input type="text" placeholder="Search Printer Support" className="w-full outline-none text-gray-700 bg-transparent text-sm"/>
//             <FaSearch className="text-gray-500 ml-2"/>
//           </div>

//           {/* Cart */}
//           {/* <Link href="/cart">
//           <div className="relative cursor-pointer" onClick={toggleCart}>
//             <FaShoppingCart className="text-gray-700 text-xl"/>
//             {getTotalItems() > 0 && (
//               <span className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold bg-red-500 animate-pulse">
//                 {getTotalItems()}
//               </span>
//             )}
//           </div>
//           </Link> */}
          

//           <Link href="/SignIn">
//   <button
//     className="hover:scale-105 px-8 py-2 font-semibold rounded-full transition-colors duration-200 shadow-md text-white"
//     style={{ background: "linear-gradient(to right, #59c7b5, #0095d4)" }}
//   >
//     Sign in
//   </button>
// </Link>
//         </div>

//         {/* Mobile */}
//         <div className="lg:hidden flex items-center space-x-4">
//           <div className="relative cursor-pointer" onClick={toggleCart}>
//             <FaShoppingCart className="text-gray-700 text-xl"/>
//             {getTotalItems() > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
//                 {getTotalItems()}
//               </span>
//             )}
//           </div>
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700 focus:outline-none">
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }




"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaPhone } from "react-icons/fa";
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
          <Image src="/logomh.png" alt="HP Logo" width={150} height={150} className="hover:scale-105 transition-transform"/>
          <div className="hidden md:flex space-x-12 text-[#767676] font-semibold text-base text-[20px]">
            <Link href="/" className="hover:text-black transition-colors duration-200">Explore</Link>
            <Link href="/" className="hover:text-black transition-colors duration-200">Shop</Link>
            <Link href="/" className="hover:text-black transition-colors duration-200">Support</Link>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex flex-col items-center w-80">
            <div className="flex items-center justify-center gap-2 mb-2 w-full group cursor-pointer px-4">
              <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-1.5 rounded-full group-hover:scale-110 transition-all duration-300 shadow-md">
                <FaPhone className="text-white text-xs" />
              </div>
              <span className="text-[18px] font-bold bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Call Us <span className="text-gray-900 font-extrabold drop-shadow-sm">+1 (844) 491-5152</span>
              </span>
            </div>
            <div className="flex items-center w-full border-2 border-gray-200 rounded-full px-4 py-2.5 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md">
              <input type="text" placeholder="Search Printer Support" className="w-full outline-none text-gray-700 bg-transparent text-sm placeholder-gray-400"/>
              <FaSearch className="text-gray-500 ml-2 hover:text-blue-500 transition-colors duration-200"/>
            </div>
          </div>

          {/* Cart */}
          {/* <Link href="/cart">
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart className="text-gray-700 text-xl"/>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold bg-red-500 animate-pulse">
                {getTotalItems()}
              </span>
            )}
          </div>
          </Link> */}
          

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