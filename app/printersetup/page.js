"use client";
import { useState } from "react";
import Head from "next/head";

const PrinterSetup = () => {
  const [activeTab, setActiveTab] = useState("wired");
  const [expandedSection, setExpandedSection] = useState(null);

  const setupSteps = {
    wired: [
      {
        title: "Unbox and Position Your Printer",
        icon: "📦",
        details:
          "Remove all packaging and place your printer on a flat surface near your workspace.",
      },
      {
        title: "Power On",
        icon: "🔌",
        details:
          "Plug in your printer and turn it on. Wait until the initialization is complete.",
      },
      {
        title: "Connect via USB or Ethernet",
        icon: "🖥️",
        details:
          "Use the provided USB or Ethernet cable to connect your printer to your PC or network.",
      },
      {
        title: "Install Drivers",
        icon: "💾",
        details:
          "Download the latest drivers from the manufacturer’s website for best performance.",
      },
      {
        title: "Add Printer to Your Device",
        icon: "➕",
        details:
          "Windows: Settings → Devices → Printers. Mac: System Preferences → Printers & Scanners → +",
      },
      {
        title: "Test Print",
        icon: "🖨️",
        details:
          "Print a test page to confirm setup success and check alignment.",
      },
    ],
    wireless: [
      {
        title: "Position Near Router",
        icon: "📶",
        details:
          "Keep your printer close to the router for stable Wi-Fi connectivity.",
      },
      {
        title: "Power On",
        icon: "🔋",
        details:
          "Turn on your printer and wait for it to be ready for configuration.",
      },
      {
        title: "Connect to WiFi",
        icon: "🌐",
        details:
          "Select your WiFi network and enter the password from the printer panel.",
      },
      {
        title: "Install Software",
        icon: "📲",
        details:
          "Use the manufacturer’s app or website to install wireless setup software.",
      },
      {
        title: "Add Printer to Network",
        icon: "🔄",
        details:
          "Ensure your computer is on the same network as your printer for automatic detection.",
      },
      {
        title: "Test Wireless Print",
        icon: "✈️",
        details:
          "Send a test page from multiple devices to ensure Wi-Fi printing works properly.",
      },
    ],
  };

  const toggleSection = (index) =>
    setExpandedSection(expandedSection === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <Head>
        <title>Printer Setup Guide | Micro Hub Care</title>
      </Head>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl font-bold animate-pulse">
            🖨️
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Printer Setup Made Simple
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Follow our step-by-step guide to set up your wired or wireless printer
          quickly and efficiently.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {["wired", "wireless"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-2xl cursor-pointer transition-all duration-500 p-8 shadow-lg ${
              activeTab === tab
                ? "bg-gradient-to-br from-[#59c7b5] to-[#0095d4] text-white"
                : "bg-white hover:bg-blue-100/50 text-gray-800"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2 capitalize">
              {tab} Printer Setup
            </h2>
            <p>
              {tab === "wired"
                ? "Reliable connection using USB or Ethernet cables."
                : "Flexible wireless setup for home or office convenience."}
            </p>
          </div>
        ))}
      </div>

      {/* Setup Steps */}
      <div className="max-w-5xl mx-auto mt-16 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          {activeTab === "wired" ? "Wired" : "Wireless"} Printer Setup Steps
        </h2>

        {setupSteps[activeTab].map((step, index) => (
          <div
            key={index}
            className={`rounded-xl mb-6 transition-all border overflow-hidden ${
              expandedSection === index
                ? "bg-gradient-to-r from-blue-100 to-cyan-100 shadow-md"
                : "bg-white hover:bg-blue-50 border-gray-100"
            }`}
          >
            <button
              onClick={() => toggleSection(index)}
              className="flex items-center justify-between w-full p-5 text-left"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-4">{step.icon}</span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <svg
                className={`h-6 w-6 transform transition-transform ${
                  expandedSection === index ? "rotate-180 text-blue-500" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expandedSection === index && (
              <div className="p-5 pt-0 text-gray-700 animate-fadeIn">
                <p>{step.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need Expert Help?
        </h3>
        <button className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 shadow-lg transition-transform">
          Contact Our Support Team
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} <b>Micro Hub Care</b>. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default PrinterSetup;
