// "use client";
// import { Wrench, Cpu, Wifi, BookOpen, Cloud, Laptop } from "lucide-react";

// export default function PrinterSetupSection() {
//   const services = [
//     { icon: Wrench, title: "Printer setup, driver installation, & troubleshooting" },
//     { icon: Cpu, title: "Computer optimization & virus removal" },
//     { icon: Wifi, title: "Internet & network configuration" },
//     { icon: BookOpen, title: "Educational printer-related content & guides" },
//     { icon: Cloud, title: "Data backup & cloud setup" },
//     { icon: Laptop, title: "Remote & onsite IT support" },
//   ];

//   return (
//     <section className="mb-32 py-20 h-[750px] mt-[-69px]">
//       <div className="max-w-[1360px] mx-auto px-4">
//         <div className="bg-gradient-to-br from-[#59c7b5]/10 via-[#0095d4]/10 to-[#59c7b5]/5 rounded-4xl p-12 shadow-2xl border border-[#59c7b5]/20 backdrop-blur-sm">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
            
//             {/* Left Text Section */}
//             <div className="flex-1">
//               <div className="mb-2">
//               </div>
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">
//                 Complete IT & Printer
//                 <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent"> Solutions</span>
//               </h2>
//               <p className="text-xl text-gray-600 mb-12 leading-relaxed">
//                 Professional technology services to keep your devices running smoothly and efficiently
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {services.map((service, index) => {
//                   const Icon = service.icon;
//                   return (
//                     <div 
//                       key={index} 
//                       className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#59c7b5]/30 transition-all duration-300 hover:-translate-y-1"
//                     >
//                       <div className="flex items-start space-x-4">
//                         <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-xl flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
//                           <Icon className="text-white text-xl" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors duration-300">
//                           {service.title}
//                         </h3>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Right Image Section */}
//             <div className="flex-1">
//               <div className="relative">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
//                   <img
//                     src="https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png"
//                     alt="Professional IT Services"
//                     className="w-full h-auto"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
//                 </div>
                
//                 {/* Floating Stats Card */}
//                 <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">1000+</div>
//                     <div className="text-gray-600 text-sm font-semibold">Happy Customers</div>
//                   </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#59c7b5]/20 rounded-2xl rotate-12 backdrop-blur-sm animate-pulse"></div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0095d4]/20 rounded-2xl -rotate-12 backdrop-blur-sm animate-pulse delay-1000"></div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom CTA */}
         
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// export default function PrinterSetupSection() {
//   return (
//     <section className="mb-32 py-20 h-[750px] mt-[-69px]">
//       <div className="max-w-[1360px] mx-auto px-4">
//         <div className="bg-gradient-to-br from-[#59c7b5]/10 via-[#0095d4]/10 to-[#59c7b5]/5 rounded-4xl p-12 shadow-2xl border border-[#59c7b5]/20 backdrop-blur-sm">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             {/* Left Text Section */}
//             <div className="flex-1">
//               <div className="mb-8">
//                 <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                   Diagnose and <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">Solve</span>
//                 </h2>
//                 <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//                   Contact Support – <span className="text-[#0095d4]">Chat Live</span>
//                 </h3>
//                 <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                   In this support hub, you'll find quick access to live assistance for Printer Setup
//                 </p>
//               </div>
              
//               {/* Issues List */}
//               <div className="space-y-4 mb-12">
//                 <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[#59c7b5] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Can't connect to wireless printer</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[#0095d4] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Can't find wireless printer on network</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[#59c7b5] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Flashing blue light on the wireless printer</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[#0095d4] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Error printing from wireless printer</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[#59c7b5] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Error setting up the wireless printer</span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               {/* <button className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] hover:from-[#4ab7a5] hover:to-[#0085c4] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
//                 Start Live Chat Now
//               </button> */}
//             </div>

//             {/* Right Image Section - Keeping original design */}
//             <div className="flex-1">
//               <div className="relative">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
//                   <img 
//                     src="https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png" 
//                     alt="Professional IT Services" 
//                     className="w-full h-auto" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
//                 </div>
                
//                 {/* Floating Stats Card */}
//                 {/* <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">
//                       1000+
//                     </div>
//                     <div className="text-gray-600 text-sm font-semibold">Happy Customers</div>
//                   </div>
//                 </div> */}

//                 {/* Decorative Elements */}
//                 {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#59c7b5]/20 rounded-2xl rotate-12 backdrop-blur-sm animate-pulse"></div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0095d4]/20 rounded-2xl -rotate-12 backdrop-blur-sm animate-pulse delay-1000"></div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
export default function PrinterSetupSection() {
  return (
    <section className="mb-32 py-20 h-[750px] mt-[-69px]">
      <div className="max-w-[1360px] mx-auto px-4">
        <div className="bg-gradient-to-br from-[#59c7b5]/10 via-[#0095d4]/10 to-[#59c7b5]/5 rounded-4xl p-12 shadow-2xl border border-[#59c7b5]/20 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Text Section */}
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Diagnose and <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">Solve</span>
                </h2>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Contact Support – <span className="text-[#0095d4]">Chat Live</span> 
                  <span className="text-3xl font-bold ml-4 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">
                    or Call Us
                  </span>
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  In this support hub, you'll find quick access to live assistance for Printer Setup
                </p>
              </div>

              {/* Issues List */}
              <div className="space-y-4 mb-12">
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[#59c7b5] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Can't connect to wireless printer</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[#0095d4] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Can't find wireless printer on network</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[#59c7b5] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Flashing blue light on the wireless printer</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[#0095d4] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Error printing from wireless printer</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[#59c7b5] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900">Error setting up the wireless printer</span>
                </div>
                <div className="text-center mt-6 pt-4 border-t border-gray-200">
                  <p className="text-[24px] font-bold bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">
                   Call Us For Printer Support:- +1 (844) 491-5152
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              {/* <button className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] hover:from-[#4ab7a5] hover:to-[#0085c4] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Live Chat Now
              </button> */}
            </div>

            {/* Right Image Section - Keeping original design */}
            <div className="flex-1">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img src="https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png" alt="Professional IT Services" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                </div>

                {/* Floating Stats Card */}
                {/* <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">
                      1000+
                    </div>
                    <div className="text-gray-600 text-sm font-semibold">Happy Customers</div>
                  </div>
                </div> */}

                {/* Decorative Elements */}
                {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#59c7b5]/20 rounded-2xl rotate-12 backdrop-blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0095d4]/20 rounded-2xl -rotate-12 backdrop-blur-sm animate-pulse delay-1000"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}