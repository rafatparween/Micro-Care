"use client";
import { motion } from 'framer-motion';
import { FiArrowRight, FiWifi, FiPrinter, FiWifiOff, FiDroplet, FiCopy, FiSend } from 'react-icons/fi';
import { useState } from 'react';

export default function Digonode() {
  const [activeCard, setActiveCard] = useState(null);
  
  const items = [
    { 
      name: "Printer Setup", 
      description: "Step-by-step guidance for setting up any printer model",
      icon: <FiPrinter className="text-2xl" />,
      gradient: "from-cyan-400 to-blue-600",
      shadow: "shadow-cyan-500/30",
      stats: "98% success rate"
    },
    { 
      name: "Printer Offline", 
      description: "Fix connectivity issues and get back online instantly",
      icon: <FiWifiOff className="text-2xl" />,
      gradient: "from-purple-400 to-indigo-600",
      shadow: "shadow-purple-500/30",
      stats: "Average fix time: 3 min"
    },
    { 
      name: "Wireless Printer", 
      description: "Configure wireless printing from any device",
      icon: <FiWifi className="text-2xl" />,
      gradient: "from-emerald-400 to-teal-600",
      shadow: "shadow-emerald-500/30",
      stats: "Works with 1000+ models"
    },
    { 
      name: "Ink Issues", 
      description: "Resolve cartridge errors and print quality problems",
      icon: <FiDroplet className="text-2xl" />,
      gradient: "from-amber-400 to-orange-600",
      shadow: "shadow-amber-500/30",
      stats: "Save up to 30% on ink"
    },
    { 
      name: "Scanner", 
      description: "Troubleshoot scanning and document digitization",
      icon: <FiCopy className="text-2xl" />,
      gradient: "from-rose-400 to-pink-600",
      shadow: "shadow-rose-500/30",
      stats: "Crystal clear scans"
    },
    { 
      name: "Fax Problems", 
      description: "Solve traditional fax and digital fax issues",
      icon: <FiSend className="text-2xl" />,
      gradient: "from-violet-400 to-fuchsia-600",
      shadow: "shadow-violet-500/30",
      stats: "Reliable transmission"
    },
  ];

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            width: Math.random() * 12 + 3,
            height: Math.random() * 12 + 3,
            opacity: 0
          }}
          animate={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: [0, 0.4, 0],
            transition: {
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mt-[64px]">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-900 to-gray-900"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_50%)]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
      
      <FloatingParticles />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Premium Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-8">
            <span className="text-sm text-cyan-400 font-medium">PREMIUM DIAGNOSTICS</span>
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
            Advanced Printer Solutions 
            </span>
            <br />
            <span className="text-white">Diagnostics Hub</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Next-generation solutions powered by AI diagnostics and real-time troubleshooting
          </motion.p>
        </motion.div>

        {/* Luxury 3D Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              className="relative group perspective-1000"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-50 blur-xl transition duration-500 group-hover:duration-200`}></div>
              
              {/* 3D Card Container */}
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  transition: { duration: 0.5 }
                }}
                className={`relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col items-center text-center border border-gray-700/30 overflow-hidden transition-all duration-500 group-hover:border-cyan-500/30`}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.2)'
                }}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#gradient)" strokeWidth="0.5" strokeDasharray="5" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#gradient)" strokeWidth="0.5" strokeDasharray="5" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Icon with Gradient Background */}
                <motion.div 
                  className={`relative w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-[5deg]`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="absolute inset-2 bg-white/10 backdrop-blur-md rounded-2xl"></div>
                  <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
                  <div className="relative z-10 text-white">
                    {item.icon}
                  </div>
                  
                  {/* Pulsing ring effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 border-white/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3">{item.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                
                {/* Stats badge */}
                <div className="mb-6 px-3 py-1.5 bg-gray-700/50 rounded-full">
                  <span className="text-sm text-cyan-400">{item.stats}</span>
                </div>
                
                {/* Animated Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-auto w-full bg-gradient-to-br ${item.gradient} text-white px-6 py-4 rounded-xl text-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group/btn`}
                >
                  <span>Diagnose Issue</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  >
                    <FiArrowRight className="text-lg" />
                  </motion.div>
                </motion.div>
                
                {/* Hover bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-xl mb-6">Can't find your specific issue?</p>
          {/* <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Contact Premium Support</span>
            <FiArrowRight className="text-lg" />
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
}