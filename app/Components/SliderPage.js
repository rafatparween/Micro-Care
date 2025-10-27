"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import { useState } from 'react';

export default function SliderPage() {
  const router = useRouter(); 
  const [isHovered, setIsHovered] = useState(false);

  const handleSetupClick = () => {
    router.push('../service/Pages');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 mt-[64px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Printer <span className="text-blue-500">Education</span> Portal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your comprehensive resource for printer setup, troubleshooting, and optimization
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/printergirl.jpg"
                  alt="Printer Setup Guide"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              
              {/* Badge on image */}
              <div className="absolute top-6 left-6 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold">
                Step-by-Step Guide
              </div>
            </div>
            
            {/* Text Section */}
            <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How to Set Up Your <span className="text-blue-600">Printer</span>
                  </h2>
                  <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Get comprehensive, step-by-step guidance on how to properly set up, configure, 
                    and register your printer for optimal performance. Our educational resources 
                    make the process simple and straightforward.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">What You'll Learn:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Hardware connection and installation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Software and driver configuration
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Network and wireless setup
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Troubleshooting common issues
                    </li>
                  </ul>
                </div>
                
                <button 
                  className={`bg-blue-600 text-white py-4 px-10 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                    ${isHovered ? 'bg-blue-700 transform -translate-y-1 shadow-lg' : 'shadow-md'}`}
                  onClick={handleSetupClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Begin Printer Setup</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                
                <p className="text-gray-500 text-sm">
                  Average setup time: 10-15 minutes • Difficulty: Beginner
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Documentation</h3>
            <p className="text-gray-400">Detailed manuals and specifications</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Troubleshooting</h3>
            <p className="text-gray-400">Solve common printer issues</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Maintenance</h3>
            <p className="text-gray-400">Keep your printer in perfect condition</p>
          </div>
        </div>
      </div>
    </div>
  );
}