"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Sun, Moon, MessageCircle, ArrowUp } from "lucide-react";

export default function ScannerSetupGuide() {
  const [activeTab, setActiveTab] = useState("windows");
  const [expandedStep, setExpandedStep] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleStep = (i) => setExpandedStep(expandedStep === i ? null : i);
  const toggleComplete = (i) =>
    setCompletedSteps((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  const scannerSetupSteps = {
    windows: [
      {
        title: "Connect Your Scanner",
        content:
          "Plug your scanner into a USB port and ensure it’s powered on.",
        tips: [
          "Use the original USB cable",
          "Try different ports if not detected",
        ],
        image: "/usb-connection.png",
      },
      {
        title: "Install Drivers",
        content:
          "Windows usually installs drivers automatically. If not, download them manually.",
        tips: [
          "Visit the official support site",
          "Run installer as administrator",
        ],
      },
      {
        title: "Configure Scanner Settings",
        content:
          "Open Control Panel → Devices and Printers → Scan Profiles.",
        tips: ["Choose PDF format", "Use 300dpi resolution"],
      },
      {
        title: "Test Your Scanner",
        content:
          "Use Windows Fax and Scan to test your scanner and confirm functionality.",
      },
    ],
    mac: [
      {
        title: "Connect Your Scanner",
        content:
          "Connect via USB and ensure your scanner is powered on and ready.",
      },
      {
        title: "Install Required Software",
        content:
          "Open Image Capture. If not detected, download drivers from manufacturer.",
      },
      {
        title: "Configure Scanning Options",
        content:
          "In Image Capture, select your scanner and adjust resolution and color settings.",
      },
    ],
    network: [
      {
        title: "Connect Scanner to Network",
        content:
          "Follow on-screen instructions to connect via Ethernet or Wi-Fi.",
      },
      {
        title: "Install Network Software",
        content:
          "Install manufacturer-provided software for network scanning.",
      },
      {
        title: "Add Scanner to PC",
        content:
          "Go to Scanner Settings → Add network scanner using IP address.",
      },
    ],
  };

  const theme = darkMode
    ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
    : "bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900";

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme}`}>
      <Head>
        <title>Scanner Setup Guide | Micro Hub Care</title>
      </Head>

      {/* Navbar / Header */}
      {/* <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
           Micro Hub Care
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header> */}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Effortless Scanner Setup
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-blue-100">
          A modern step-by-step guide to help you set up your scanner like a pro.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
            ⚙️ 15–30 min setup
          </span>
          <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
            ✅ 100% Guaranteed to work
          </span>
        </div>
      </motion.section>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Tab Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {["windows", "mac", "network"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                }`}
              >
                {tab === "windows" && "🪟 Windows"}
                {tab === "mac" && "🍎 Mac OS"}
                {tab === "network" && "🌐 Network"}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {scannerSetupSteps[activeTab].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-md ${
                completedSteps.includes(index)
                  ? "bg-green-50 dark:bg-green-900/30"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3
                  onClick={() => toggleStep(index)}
                  className={`text-lg font-medium cursor-pointer ${
                    completedSteps.includes(index)
                      ? "line-through text-green-600"
                      : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {index + 1}. {step.title}
                </h3>
                <button
                  onClick={() => toggleComplete(index)}
                  className={`rounded-full w-8 h-8 flex items-center justify-center ${
                    completedSteps.includes(index)
                      ? "bg-green-500 text-white"
                      : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  }`}
                >
                  {completedSteps.includes(index) ? "✔" : index + 1}
                </button>
              </div>

              {expandedStep === index && (
                <div className="mt-4 text-gray-700 dark:text-gray-300">
                  <p>{step.content}</p>
                  {step.tips && (
                    <div className="mt-3 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-sm">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                        💡 Tips:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {step.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-3">
            Need Help from Micro Hub Care Experts?
          </h2>
          <p className="text-blue-100 mb-6">
            Connect instantly with our support team for setup or troubleshooting.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              💬 Chat Now
            </a>
            <a
              href="tel:+18005551234"
              className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 font-semibold"
            >
              📞 +(1) 888-291-3869
            </a>
          </div>
        </motion.div>
      </main>

      {/* Floating Buttons */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 text-white p-4 rounded-full shadow-xl">
        <MessageCircle />
      </button>

      {/* Footer */}
     
    </div>
  );
}
