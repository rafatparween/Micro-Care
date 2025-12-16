"use client";
import { useState } from "react";
import Head from "next/head";

const PrinterSetup = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => setExpandedFaq(expandedFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <Head>
        <title>Printer Setup Guide | EzTech-Printer-Solutions</title>
      </Head>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl font-bold">
            🖨️
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Simple, Fast & Reliable Printer Setup for Every Device
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Setting up a printer can be confusing — whether it's wireless, wired, or mobile printing.
          Our experts handle the complete setup for you.
        </p>
      </div>

      {/* Setup Services */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-blue-100 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
          <span className="text-green-500">✅</span>
          Setup Services We Offer
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Wireless Printer Setup</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We connect your printer to your Wi-Fi network securely and ensure smooth communication with all devices.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">USB/Wired Setup</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Stable, fast printing configuration for desktops and offices.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Driver Installation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We download and install the correct drivers for your device.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Mobile Printing Setup</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We configure your phone/tablet for easy printing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-[#59c7b5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-xl">✔</span>
              <h3 className="text-xl font-bold text-gray-800">Multi-Device Connection</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Share printers between multiple computers.
            </p>
          </div>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl shadow-2xl p-10 text-white mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3">
          <span className="text-white">✅</span>
          Step-by-Step Setup Process
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white text-[#0095d4] rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
              <h3 className="text-lg font-semibold">Connect and power on the printer</h3>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white text-[#0095d4] rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
              <h3 className="text-lg font-semibold">Install/update drivers</h3>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white text-[#0095d4] rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
              <h3 className="text-lg font-semibold">Connect through Wi-Fi or USB</h3>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white text-[#0095d4] rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
              <h3 className="text-lg font-semibold">Configure system settings</h3>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white text-[#0095d4] rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span>
              <h3 className="text-lg font-semibold">Perform test prints</h3>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white text-[#0095d4] rounded-full w-8 h-8 flex items-center justify-center font-bold">6</span>
              <h3 className="text-lg font-semibold">Explain maintenance tips</h3>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-blue-100 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
          <span className="text-green-500">✅</span>
          FAQs
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
            <button
              onClick={() => toggleFaq(0)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-800 pr-4">Q. How long does printer setup take?</h3>
              <div className={`transform transition-transform duration-300 ${expandedFaq === 0 ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-[#0095d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedFaq === 0 && (
              <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                Usually 10–15 minutes.
              </div>
            )}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
            <button
              onClick={() => toggleFaq(1)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-800 pr-4">Q. Can I connect multiple devices?</h3>
              <div className={`transform transition-transform duration-300 ${expandedFaq === 1 ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-[#0095d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedFaq === 1 && (
              <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                Yes, we can help link all your devices.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need Expert Help?
        </h3>
        <button className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 shadow-lg transition-transform duration-300">
          Contact Our Support Team
        </button>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default PrinterSetup;