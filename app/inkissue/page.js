"use client";
import { useState } from "react";
import Head from "next/head";

export default function InkCartridgeGuide() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => setExpandedFaq(expandedFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <Head>
        <title>Ink Cartridge Solutions | EzTech-Printer-Solutions</title>
      </Head>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl font-bold">
            🖨️
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Ink Cartridge Troubles? We'll Fix It Professionally
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cartridges not recognized? Poor print quality? Streaks or faded prints?
          We diagnose and repair all ink-related problems.
        </p>
      </div>

      {/* What We Fix Section */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-blue-100 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
          <span className="text-green-500">✅</span>
          What We Fix
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Cartridge not detected</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Low ink error even after refill</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Streaks and smudges</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Color not printing</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Alignment problems</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Slow printing</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Ink buildup or clogging</h3>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need Professional Ink Cartridge Help?
        </h3>
        <button className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 shadow-lg transition-transform duration-300">
          Contact Our Support Team
        </button>
      </div>

      {/* Footer */}
     
    </div>
  );
}