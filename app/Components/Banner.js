



// "use client"
// import { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight, FaHeadset, FaCheck } from "react-icons/fa";

// const sliderImages = [
//   { url: "/deskjet.avif" },
//   { url: "/Envy.avif" },
//   { url: "/Laserjet.avif" },
//   { url: "/NSLaser.avif" }
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % sliderImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [current]);

//   const prev = () => setCurrent((current - 1 + sliderImages.length) % sliderImages.length);
//   const next = () => setCurrent((current + 1) % sliderImages.length);

//   return (
//     <div className="flex justify-center px-4 my-6">
//       <div className="relative flex items-stretch justify-center min-h-[380px] bg-[#f7f7f7] rounded-2xl shadow-xl overflow-hidden w-full max-w-[1440px]">
        
//         {/* Background Elements */}
//         <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#59c7b57d] to-[#0095d47d] rounded-full -translate-y-36 translate-x-36 opacity-20"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#59c7b57d] to-[#0095d47d] rounded-full translate-y-40 -translate-x-40 opacity-20"></div>

//         {/* LEFT CONTENT */}
//         <div className="relative z-10 w-1/2 flex flex-col justify-center pl-16 pr-12 py-10">
//           <div className="flex items-center gap-2 mb-3">
//             <div className="w-2 h-2 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-full animate-pulse"></div>
//             <span 
//               className="font-bold text-sm tracking-wide"
//               style={{
//                 background: 'linear-gradient(to top, #59c7b5, #59c7b5, #0095d4)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent'
//               }}
//             >
//               24/7 LIVE SUPPORT
//             </span>
//           </div>

//           <h1 
//             className="text-4xl font-black mb-4 leading-tight"
//             style={{
//               background: 'linear-gradient(to top, #59c7b5, #59c7b5, #0095d4)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent'
//             }}
//           >
//             Expert Tech
//             <span className="block">Support Hub</span>
//           </h1>

//           <p className="text-lg text-gray-800 mb-4 leading-relaxed font-medium">
//             Instant solutions for computer & printer issues
//           </p>

//           {/* HORIZONTAL LINE */}
//           <div 
//             className="w-full h-1 rounded-full mb-4"
//             style={{
//               background: 'linear-gradient(to right, #59c7b5, #0095d4)'
//             }}
//           ></div>

//           <div className="space-y-3 mb-6">
//             {[
//               &apos;Live Chat with Experts',
//               'Quick Problem Diagnosis', 
//               'Step-by-Step Solutions'
//             ].map((item, index) => (
//               <div key={index} className="flex items-center group hover:translate-x-2 transition-all duration-300">
//                 <FaCheck 
//                   className="mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
//                   style={{
//                     color: '#0095d4'
//                   }}
//                   size={14}
//                 />
//                 <span className="text-base text-gray-800 font-semibold">{item}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-3">
//             <button 
//               className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
//               style={{
//                 background: 'linear-gradient(to top, #59c7b5, #59c7b5, #0095d4)'
//               }}
//             >
//               <FaHeadset className="text-base" />
//               <span className="text-base">Start Live Chat</span>
//             </button>
//             <button 
//               className="border-2 font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
//               style={{
//                 borderColor: '#59c7b5',
//                 color: '#0095d4',
//                 background: 'rgba(255, 255, 255, 0.9)'
//               }}
//             >
//               <span className="text-base">View Solutions</span>
//             </button>
//           </div>
//         </div>

//         {/* DIVIDER */}
//         <div className="relative z-10 flex flex-col justify-center">
//           <div 
//             className="w-1 h-40 rounded-full mx-6"
//             style={{
//               background: 'linear-gradient(to bottom, #59c7b5, #0095d4)'
//             }}
//           ></div>
//         </div>

//         {/* RIGHT SLIDER */}
//         <div className="relative z-10 w-1/2 flex flex-col justify-center items-center pl-12 pr-16 py-10">
//           <div className="w-full max-w-md">
//             <div className="relative">
//               {/* ARROWS */}
//               <button
//                 onClick={prev}
//                 className="absolute -left-5 top-1/2 z-20 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
//               >
//                 <FaChevronLeft 
//                   className="text-lg"
//                   style={{
//                     color: '#0095d4'
//                   }}
//                 />
//               </button>

//               <button
//                 onClick={next}
//                 className="absolute -right-5 top-1/2 z-20 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
//               >
//                 <FaChevronRight 
//                   className="text-lg"
//                   style={{
//                     color: '#0095d4'
//                   }}
//                 />
//               </button>

//               {/* SLIDER */}
//               <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
//                 <div className="relative h-64 transition-all duration-500 ease-out">
//                   <img
//                     src={sliderImages[current].url}
//                     alt="HP Product"
//                     className="w-full h-full object-contain scale-90 hover:scale-95 transition-transform duration-700"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* INDICATORS */}
//             <div className="flex justify-center mt-6 gap-2">
//               {sliderImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrent(index)}
//                   className={`rounded-full transition-all duration-500 ${
//                     index === current 
//                       ? &apos;w-8 h-2 shadow-lg'
//                       : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
//                   }`}
//                   style={{
//                     backgroundColor: index === current ? '#0095d4' : '',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaHeadset, FaCheck } from "react-icons/fa";

const sliderImages = [
  { url: "/deskjet.avif" },
  { url: "/Envy.avif" },
  { url: "/Laserjet.avif" },
  { url: "/NSLaser.avif" }
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + sliderImages.length) % sliderImages.length);
  const next = () => setCurrent((current + 1) % sliderImages.length);

  return (
    <div className="flex justify-center px-4 my-6">
      <div className="relative flex flex-col md:flex-row items-stretch justify-center min-h-[380px] bg-[#f7f7f7] rounded-2xl shadow-xl overflow-hidden w-full max-w-[1440px]">

        {/* Background Circles */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-[#59c7b57d] to-[#0095d47d] rounded-full -translate-y-20 md:-translate-y-36 translate-x-20 md:translate-x-36 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-tr from-[#59c7b57d] to-[#0095d47d] rounded-full translate-y-32 md:translate-y-40 -translate-x-32 md:-translate-x-40 opacity-20"></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-4 md:pl-16 md:pr-12 py-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-full animate-pulse"></div>
            <span
              className="font-bold text-sm tracking-wide"
              style={{
                background: 'linear-gradient(to top, #59c7b5, #59c7b5, #0095d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
             Diagnose and solve
            </span>
          </div>

          <h1
            className="text-2xl md:text-4xl font-black mb-4 leading-tight"
            style={{
              background: 'linear-gradient(to top, #59c7b5, #59c7b5, #0095d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
           Contact Us through
            <span className="block"> Live Chat</span>
          </h1>

          <p className="text-base md:text-lg text-gray-800 mb-4 leading-relaxed font-medium">
           In this Assistance hub, you&apos;ll find quick access to live assistance for common computer and printer issues.
          </p>

          {/* HORIZONTAL LINE */}
          <div
            className="w-full h-1 rounded-full mb-4"
            style={{ background: 'linear-gradient(to right, #59c7b5, #0095d4)' }}
          ></div>

          <div className="space-y-3 mb-6">
            {['Live Chat with Experts', 'Quick Problem Diagnosis', 'Step-by-Step Solutions'].map((item, index) => (
              <div key={index} className="flex items-center group hover:translate-x-2 transition-all duration-300">
                <FaCheck
                  className="mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#0095d4' }}
                  size={14}
                />
                <span className="text-sm md:text-base text-gray-800 font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: 'linear-gradient(to top, #59c7b5, #59c7b5, #0095d4)' }}
            >
              <FaHeadset className="text-base" />
              <span className="text-sm md:text-base">Start Live Chat</span>
            </button>
            <button
              className="border-2 font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: '#59c7b5', color: '#0095d4', background: 'rgba(255, 255, 255, 0.9)' }}
            >
              <span className="text-sm md:text-base">View Solutions</span>
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:flex relative z-10 flex-col justify-center">
          <div
            className="w-1 h-40 rounded-full mx-6"
            style={{ background: 'linear-gradient(to bottom, #59c7b5, #0095d4)' }}
          ></div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pl-12 md:pr-16 py-10">
          <div className="w-full max-w-md">
            <div className="relative">
              {/* ARROWS */}
              <button
                onClick={prev}
                className="absolute -left-5 top-1/2 z-20 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <FaChevronLeft className="text-lg" style={{ color: '#0095d4' }} />
              </button>

              <button
                onClick={next}
                className="absolute -right-5 top-1/2 z-20 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <FaChevronRight className="text-lg" style={{ color: '#0095d4' }} />
              </button>

              {/* SLIDER IMAGE */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
                <div className="relative h-48 md:h-64 transition-all duration-500 ease-out">
                  <img
                    src={sliderImages[current].url}
                    alt="HP Product"
                    className="w-full h-full object-contain scale-90 hover:scale-95 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* INDICATORS */}
           <div className="flex justify-center mt-6 gap-2">
  {sliderImages.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`rounded-full transition-all duration-500 ${
        index === current ? "w-8 h-2 shadow-lg" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
      }`}
      style={{ backgroundColor: index === current ? "#0095d4" : "" }}
    />
  ))}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
