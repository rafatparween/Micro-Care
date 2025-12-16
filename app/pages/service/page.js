'use client';
import React, { useState, useEffect } from 'react';
import { 
  Print, SupportAgent, Schedule, 
  Wifi, Settings, Storage, School, 
  Build, Download, Speed, Security,
  CheckCircle, Phone, Chat, AutoAwesome,
  Scanner, InstallDesktop, Troubleshoot,
  ConnectWithoutContact, DesignServices,
  ArrowRight, Star, Verified, PlayArrow
} from '@mui/icons-material';

const Services = () => {
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Modern Hero Section with Background Image */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center bg-no-repeat">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#59c7b5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 -right-10 w-72 h-72 bg-[#0095d4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#59c7b5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-6 h-6 bg-[#59c7b5] rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float animation-delay-1000">
            <div className="w-4 h-4 bg-[#0095d4] rounded-full opacity-40"></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float animation-delay-2000">
            <div className="w-8 h-8 bg-[#59c7b5] rounded-full opacity-30"></div>
          </div>

          <div className="max-w-[1360px] w-full mx-auto px-4 relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 mb-8">
              <Verified className="text-[#59c7b5] mr-2 text-lg" />
              <span className="text-gray-700 font-medium">Trusted by 10,000+ Customers</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">
              Get Reliable<br />
              <span className="text-white">Printer Support</span>
            </h1>
            
            <div className="text-3xl md:text-4xl h-16 mb-12 font-light text-white">
              <span className="typed-text font-medium">{currentText}</span>
              <span className="cursor text-[#59c7b5] ml-2">|</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white font-bold text-lg px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center">
                <Chat className="mr-3 text-xl" />
                Start Live Chat
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold text-lg px-12 py-5 rounded-2xl hover:bg-white hover:text-[#0095d4] transition-all duration-300 transform hover:scale-105 flex items-center">
                <PlayArrow className="mr-3 text-xl" />
                Watch Demo
              </button>
            </div>

            {/* Schedule Badge */}
            {/* <div className="inline-flex items-center bg-white/90 backdrop-blur-lg rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
              <Schedule className="text-[#59c7b5] mr-3 text-2xl" />
              <div className="text-left">
                <div className="font-bold text-gray-800">Professional Support</div>
                <div className="text-gray-600">During Business Hours</div>
              </div>
            </div> */}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </header>

        {/* Service Navigation - Modern Cards */}
        <div className="max-w-[1360px] mx-auto px-4 -mt-20 relative z-20 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'installation', icon: InstallDesktop, label: 'Installation & Setup', color: 'from-[#59c7b5] to-[#0095d4]' },
              { id: 'assistance', icon: ConnectWithoutContact, label: 'IT Assistance', color: 'from-[#0095d4] to-[#59c7b5]' },
              { id: 'printer-setup', icon: Build, label: 'Printer Setup', color: 'from-[#59c7b5] to-[#0095d4]' },
              { id: 'optimization', icon: DesignServices, label: 'Optimization', color: 'from-[#0095d4] to-[#59c7b5]' }
            ].map((service) => (
              <div
                key={service.id}
                className={`group bg-gradient-to-br ${service.color} p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer border border-white/20`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="bg-white/20 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.label}</h3>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation & Setup - Modern Grid */}
        <section className="mb-32" id="installation">
          <div className="max-w-[1360px] mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-[#59c7b5]/10 text-[#59c7b5] font-semibold px-6 py-3 rounded-full mb-6">
                <Star className="mr-2" />
                Premium Services
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Installation & Setup</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professional setup services for all your printer devices
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Print, 
                  title: "Printer Setup", 
                  desc: "Configure wired or wireless printers for smooth operation.",
                  features: ["Wireless Setup", "Wired Connection", "Network Configuration"]
                },
                { 
                  icon: Scanner, 
                  title: "Scanner & Device Setup", 
                  desc: "Installation and connection for scanners or multifunction devices.",
                  features: ["Scanner Setup", "Multi-function", "Device Integration"]
                },
                { 
                  icon: Download, 
                  title: "Software & Driver Assistance", 
                  desc: "Ensure your system has the latest drivers and software for compatibility.",
                  features: ["Driver Updates", "Software Install", "Compatibility Check"]
                }
              ].map((item, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-4">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#59c7b5] to-[#0095d4] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-white text-3xl" />
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#59c7b5] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.desc}</p>
                  <div className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="text-[#59c7b5] mr-3 text-lg" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT & Device Assistance - Feature Grid with Background */}
        <section className="mb-32 py-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-fixed bg-no-repeat">
          <div className="max-w-[1360px] mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">IT & Device Assistance</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive support for all your technology needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Wifi, title: "Connectivity Support", desc: "Help with Wi-Fi, Bluetooth, and device connections." },
                { icon: Speed, title: "System Performance Optimization", desc: "Improve speed and responsiveness with cleanup and configuration." },
                { icon: Storage, title: "Backup & Transfer Guidance", desc: "Assistance with moving files securely to new devices." },
                { icon: School, title: "User Training & Lessons", desc: "Step-by-step support to help you use your devices confidently." }
              ].map((item, index) => (
                <div key={index} className="group bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 transform hover:-translate-y-2 duration-300">
                  <div className="bg-gradient-to-br from-[#59c7b5]/10 to-[#0095d4]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <item.icon className="text-[#59c7b5] text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Printer Setup - Modern Split Layout with Background */}
        <section className="mb-32 py-20 bg-[url('https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat">
          <div className="max-w-[1360px] mx-auto px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-4xl p-12 shadow-2xl border border-white/20">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <h2 className="text-5xl font-bold text-gray-900 mb-8">Printer Installation & Setup</h2>
                  <p className="text-xl text-gray-600 mb-12">
                    Professional assistance for all your printer needs
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { icon: Build, title: "Assistance with setting up new printers", desc: "(wired or wireless)" },
                      { icon: Wifi, title: "Help with connecting printers", desc: "to Wi-Fi, networks, and devices" },
                      { icon: Download, title: "Step-by-step guidance", desc: "for driver and software installation" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl mr-6 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="text-white text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-lg">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src="https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png"
                      alt="Printer setup"
                      className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#59c7b5]/10 rounded-2xl rotate-12 backdrop-blur-sm"></div>
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#0095d4]/10 rounded-2xl -rotate-12 backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section - Modern Design */}
        <section className="mb-32" id="support">
          <div className="max-w-[1360px] mx-auto px-4">
            <div className="bg-white rounded-4xl shadow-2xl p-16 border border-gray-100">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-5 rounded-3xl mr-6 shadow-lg">
                      <SupportAgent className="text-white text-4xl" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">We are Here to Help</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    Get expert support during business hours. Connect with us online or by phone for immediate assistance!
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-200 transform hover:-translate-y-2 duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#59c7b5] p-3 rounded-2xl mr-4">
                          <Phone className="text-white text-2xl" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-xl">Call Us</p>
                          <p className="text-gray-600">(844) 491-5152</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-200 transform hover:-translate-y-2 duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#0095d4] p-3 rounded-2xl mr-4">
                          <Chat className="text-white text-2xl" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-xl">Live Chat</p>
                          <p className="text-gray-600">Available during business hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <img
                      className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      src="https://media.istockphoto.com/id/1337179160/photo/office-worker-print-paper-on-multifunction-laser-printer-copy-print-scan-and-fax-machine-in.jpg?s=612x612&w=0&k=20&c=-X45arkLvrEd37sF4_BGq0-2OBUo52JfxKXDxsfHb6A="
                      alt="Support team"
                    />
                    {/* Stats Overlay */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Modern Design with Background */}
        <section className="mb-32">
          <div className="max-w-[1360px] mx-auto px-4">
            <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-4xl p-16 text-center text-white relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1558603668-6572836d70c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-blend-overlay">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Get Your Printer Working?</h2>
                <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-95">
                  Our team of printer experts is ready to help you with all your printing needs
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-white text-[#0095d4] font-bold text-lg py-5 px-14 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    <Chat className="mr-3 text-xl" />
                    Chat with an Expert
                  </button>
                  <button className="border-2 border-white text-white font-bold text-lg py-5 px-14 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    Schedule a Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .typed-text {
            font-weight: 500;
          }
          .cursor {
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          .rounded-4xl {
            border-radius: 3rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;