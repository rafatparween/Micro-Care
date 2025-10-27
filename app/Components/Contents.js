"use client";
import React, { useState, useEffect } from 'react';
import { 
  Print, SupportAgent, Schedule, 
  Wifi, Settings, Storage, School, 
  Build, Download, Speed, Security,
  CheckCircle, Phone, Chat, AutoAwesome,
  Scanner, InstallDesktop, Troubleshoot,
  ConnectWithoutContact, DesignServices
} from '@mui/icons-material';

const Contents = () => {
  const [activeService, setActiveService] = useState('installation');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const texts = [
    "Chat with an expert now",
    "Start your setup in minutes",
    "Click to connect instantly"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = currentTextIndex % texts.length;
      const fullText = texts[current];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }
      
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-[50px]">
      {/* Hero Section with Typing Animation */}
      <header className="relative bg-[#1C8DCEED] text-white pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div 
            className="absolute top-0 left-0 right-0 h-full bg-cover bg-center opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Reliable Printer Support Anytime</h1>
          <div className="text-xl md:text-2xl h-10 mb-8">
            <span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </div>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Schedule className="mr-2" />
            <span>Professional Support During Business Hours</span>
          </div>
        </div>
      </header>

      {/* Service Navigation */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap justify-center max-w-4xl mx-auto">
          <button
            className={`flex items-center px-6 py-4 rounded-xl transition-all duration-300 m-1 ${
              activeService === 'installation'
                ? 'bg-[#1C8DCEED] text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveService('installation')}
          >
            <InstallDesktop className="mr-3" />
            <span className="font-medium">Installation & Setup</span>
          </button>
          <button
            className={`flex items-center px-6 py-4 rounded-xl transition-all duration-300 m-1 ${
              activeService === 'assistance'
                ? 'bg-[#1C8DCEED] text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveService('assistance')}
          >
            <ConnectWithoutContact className="mr-3" />
            <span className="font-medium">IT Assistance</span>
          </button>
          <button
            className={`flex items-center px-6 py-4 rounded-xl transition-all duration-300 m-1 ${
              activeService === 'printer-setup'
                ? 'bg-[#1C8DCEED] text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveService('printer-setup')}
          >
            <Build className="mr-3" />
            <span className="font-medium">Printer Setup</span>
          </button>
          <button
            className={`flex items-center px-6 py-4 rounded-xl transition-all duration-300 m-1 ${
              activeService === 'optimization'
                ? 'bg-[#1C8DCEED] text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveService('optimization')}
          >
            <DesignServices className="mr-3" />
            <span className="font-medium">Optimization</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Installation & Setup Section */}
        <section className="mb-20" id="installation">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Installation & Setup</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional setup services for all your printer devices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-[#1C8DCEED] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Print className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Printer Setup</h3>
              <p className="text-gray-600">Configure wired or wireless printers for smooth operation.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-[#1C8DCEED] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Scanner className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Scanner & Device Setup</h3>
              <p className="text-gray-600">Installation and connection for scanners or multifunction devices.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-[#1C8DCEED] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Download className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Software & Driver Assistance</h3>
              <p className="text-gray-600">Ensure your system has the latest drivers and software for compatibility.</p>
            </div>
          </div>
        </section>

        {/* IT & Device Assistance Section */}
        <section className="mb-20" id="assistance">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">IT & Device Assistance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive support for all your technology needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-[#1C8DCEED] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Wifi className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Connectivity Support</h3>
              <p className="text-gray-600 text-sm">Help with Wi-Fi, Bluetooth, and device connections.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-[#1C8DCEED] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Speed className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">System Performance Optimization</h3>
              <p className="text-gray-600 text-sm">Improve speed and responsiveness with cleanup and configuration.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-[#1C8DCEED] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Storage className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Backup & Transfer Guidance</h3>
              <p className="text-gray-600 text-sm">Assistance with moving files securely to new devices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-[#1C8DCEED] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <School className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">User Training & Lessons</h3>
              <p className="text-gray-600 text-sm">Step-by-step support to help you use your devices confidently.</p>
            </div>
          </div>
        </section>

        {/* Printer Installation & Setup Section */}
        <section className="mb-20" id="printer-setup">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Printer Installation & Setup</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional assistance for all your printer needs</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <img
                src="https://media.istockphoto.com/id/172851000/photo/inkjet-printer-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=8zWpsJog9OodpFGTjA_hUFnCJOKeNoBr9tBz2I7M-Lg="
                alt="Printer setup"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="flex-1">
              <div className="mb-8 flex items-start">
                <div className="bg-[#1C8DCEED] p-3 rounded-xl mr-4 flex-shrink-0">
                  <Build className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Assistance with setting up new printers</h3>
                  <p className="text-gray-600 mt-1">(wired or wireless)</p>
                </div>
              </div>
              
              <div className="mb-8 flex items-start">
                <div className="bg-[#1C8DCEED] p-3 rounded-xl mr-4 flex-shrink-0">
                  <Wifi className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Help with connecting printers</h3>
                  <p className="text-gray-600 mt-1">to Wi-Fi, networks, and devices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1C8DCEED] p-3 rounded-xl mr-4 flex-shrink-0">
                  <Download className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Step-by-step guidance</h3>
                  <p className="text-gray-600 mt-1">for driver and software installation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Printer Optimization Section */}
        <section className="mb-20" id="optimization">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Printer Optimization & Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Keep your printer running at its best</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Printer Performance Checks</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-[#1C8DCEED] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Slow printing issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#1C8DCEED] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Connectivity problems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#1C8DCEED] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Print quality troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#1C8DCEED] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Paper feed issues</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Ongoing Maintenance</h3>
              <p className="text-gray-700 mb-6">Assistance with keeping your printer running smoothly</p>

              <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-[#1C8DCEED]">
                <h4 className="font-semibold text-[#1C8DCEED] mb-4">Professional Printer Support</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-[#1C8DCEED] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Help with paper feed, print quality, and common troubleshooting.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#1C8DCEED] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-700">Assistance with keeping your printer running smoothly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-white rounded-2xl shadow-lg p-10 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">We're Here to Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our support team is available during business hours</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center mb-8">
                <div className="bg-[#1C8DCEED] p-3 rounded-xl mr-4">
                  <SupportAgent className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Support Team</h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg">
                Get expert support during business hours. Connect with us online or by phone for immediate assistance!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-5 bg-gray-50 rounded-xl">
                  <Phone className="text-[#1C8DCEED] mr-4 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <p className="text-gray-600">+(1) 888-291-3869</p>
                  </div>
                </div>
                <div className="flex items-center p-5 bg-gray-50 rounded-xl">
                  <Chat className="text-[#1C8DCEED] mr-4 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-800">Live Chat</p>
                    <p className="text-gray-600">Available during business hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <img
                className="w-full h-auto rounded-2xl shadow-md"
                src="https://plus.unsplash.com/premium_photo-1705091310225-c5af0c6d64b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW50ZXIlMjBzZXR1cCUyMHdpZGUlMjB3aWR0aHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Support team"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1C8DCEED] rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Printer Working?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Our team of printer experts is ready to help you with all your printing needs</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#1C8DCEED] font-semibold py-3 px-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Chat className="mr-2" />
              Chat with an Expert
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
              Schedule a Service
            </button>
          </div>
        </section>
      </main>

      <style jsx>{`
        .typed-text {
          color: #fff;
          font-weight: 500;
        }
        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Contents;