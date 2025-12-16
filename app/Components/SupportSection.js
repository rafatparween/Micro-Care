// // Alternative Modern Version with Multiple Typing Effects
// // components/AdvancedTypingBanner.jsx
// 'use client';
// import React, { useState, useEffect } from 'react';

// const SuppoertSection = () => {
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);

//  const messages = [
//   "Welcome to EZ Tech Printer Solutions LLC, a registered U.S. technology-services company providing printer, computer, and IT device support nationwide.",
//   "For over two years, we’ve delivered professional remote and onsite solutions, serving over a thousand happy customers across the United States.",
//   "🚀 Professional Printer & IT Support Nationwide",
//   "💻 1000+ Happy Customers | 2+ Years Experience", 
//   "🔧 Remote & Onsite Solutions | 50 States Coverage",
//   "⚡ Fast Response | Expert Technicians | Guaranteed Service",
//   "🛡️ Your Trusted Technology Partner Since 2022"
// ];

//   useEffect(() => {
//     const currentMessage = messages[currentIndex];
    
//     if (isTyping) {
//       if (currentText.length < currentMessage.length) {
//         const timeout = setTimeout(() => {
//           setCurrentText(currentMessage.substring(0, currentText.length + 1));
//         }, 80);
//         return () => clearTimeout(timeout);
//       } else {
//         // Finished typing, wait then start deleting
//         setTimeout(() => setIsTyping(false), 2000);
//       }
//     } else {
//       if (currentText.length > 0) {
//         const timeout = setTimeout(() => {
//           setCurrentText(currentText.substring(0, currentText.length - 1));
//         }, 40);
//         return () => clearTimeout(timeout);
//       } else {
//         // Finished deleting, move to next message
//         setIsTyping(true);
//         setCurrentIndex((currentIndex + 1) % messages.length);
//       }
//     }
//   }, [currentText, isTyping, currentIndex, messages]);

//   return (
//     <section className="mb-16" id="support">
//       <div className="w-[1360px] mx-auto px-4  mt-[70px]">
//         <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 h-[200px] overflow-hidden relative group border border-gray-200">
          
//           {/* Animated Background Elements */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full animate-spin-slow"></div>
//             <div className="absolute bottom-0 left-0 w-28 h-28 bg-cyan-500/5 rounded-full animate-spin-slow reverse"></div>
//           </div>
          
//           <div className="flex items-center h-full gap-8 relative z-10">
            
//             {/* Icon Section */}
//             <div className="flex-shrink-0">
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
//               </div>
//             </div>
            
//             {/* Content */}
//             <div className="flex-1">
//               <div className="flex items-center gap-4 mb-4">
//                 <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
//                   EZ TECH PRINTER SOLUTIONS
//                 </h2>
               
//               </div>
              
//               {/* Advanced Typing Area */}
//               <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex gap-1">
//                     <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                   </div>
//                   <div className="text-lg font-bold text-gray-800 font-mono min-h-[28px] flex items-center">
//                     {currentText}
//                     <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse"></span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Live Status */}
//               <div className="flex gap-6">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-semibold text-gray-700">Online Support</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-semibold text-gray-700">Instant Response</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-semibold text-gray-700">Guaranteed Fix</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Professional Image */}
//             <div className="flex-shrink-0">
//               <div className="relative group">
//                 <div className="w-48 h-[170px] rounded-xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
//                   <img
//                     className="w-full h-full object-cover"
//                     src="https://media.istockphoto.com/id/1337179160/photo/office-worker-print-paper-on-multifunction-laser-printer-copy-print-scan-and-fax-machine-in.jpg?s=612x612&w=0&k=20&c=-X45arkLvrEd37sF4_BGq0-2OBUo52JfxKXDxsfHb6A="
//                     alt="Professional IT Support"
//                   />
//                 </div>
//                 <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white text-sm font-bold px-4 py-2 rounded-full shadow-2xl animate-bounce">
//                   🚀 PRO
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Animated Top Border */}
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] animate-pulse"></div>
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes spin-slow-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//         .animate-spin-slow.reverse {
//           animation: spin-slow-reverse 25s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SuppoertSection;



// components/HPBanner.js



import Image from "next/image";

export default function SupportSection() {
  return (
    <>
      <section className="w-full bg-white flex justify-center">
        <div className="relative flex flex-col md:flex-row w-full max-w-[1330px] min-h-[300px] md:h-60 items-center px-5 md:px-10 py-6 md:py-0 overflow-hidden">

          {/* Left Text */}
          <div className="flex-1 z-10 max-w-[650px] text-center md:text-left">
            <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-semibold text-black leading-snug">
              We're here to help you set up your printer
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed max-w-[91%] mx-auto md:mx-0">
              Connect your printer to Wi-Fi, a wired network, or your computer in just a few steps.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[200px] sm:h-[250px] md:absolute md:right-0 md:top-0 md:h-full md:w-[45%] lg:w-[40%]">
            <Image
              src="/logobanner.jpg"
              alt="HP Printer"
              fill
              style={{ objectFit: "cover", objectPosition: "right" }}
              priority
              className="pointer-events-none select-none"
            />
          </div>

        </div>
      </section>

      <hr className="border-t border-[#ddd]" />
    </>
  );
}
