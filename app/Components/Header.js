// "use client";
// import { useState } from "react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black py-2 px-4">
//       {/* Container with 1360px width and side spacing */}
//       <div className="flex justify-between items-center max-w-[1360px] mx-auto px-6">
//         {/* Left - Logo or Title */}
//         <a href="#" className="text-white font-bold text-[20px] md:hidden">
//           HP Support
//         </a>

//         {/* Hamburger Icon (Mobile) */}
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Menu Items - Increased space between text */}
//         <div
//           className={`flex-col md:flex-row md:flex md:space-x-12 items-center text-center absolute md:static bg-[#0182c8] md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
//             isOpen ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"
//           }`}
//         >
//           <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
//             Support Home
//           </a>

//           <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               Products
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
//             Software and Drivers
//           </a>

//           <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               Diagnostics
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
//             Contact Us
//           </a>

//           <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               Business Support
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               My HP Account
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }




"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Printer Offline", path: "/printeroffline" },
    { label: "Printer Setup", path: "/printersetup" },
    { label: "Scanner Setup", path: "/scannersetup" },
    { label: "Support Home", path: "/supporthome" },
    { label: "Ink Cartridges Issue", path: "/inkissue" },
    { label: "Diagnostics", path: "/diagnostics" },
    { label: "Business Support", path: "/businesssupport" },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Navigation Bar */}
      <nav className=" text-white w-full"style={{ background: "linear-gradient(to right, #59c7b5, #0095d4)" }}>
        <div className="max-w-[98.99%]  px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >

              <FiMenu />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex justify-between items-center w-full">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="relative text-sm sm:text-base md:text-lg font-medium whitespace-nowrap px-3 transition-colors duration-200 hover:text-cyan-300"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          role="presentation"
        />
      )}

      {/* Mobile sliding menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="h-16 flex items-center justify-end pr-4 border-b border-gray-800">
          <button
            className="text-white text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col px-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block py-4 text-lg font-medium border-b border-gray-800 last:border-0 hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
