"use client";
import { useState } from "react";
import { 
  Wrench, 
  Cpu, 
  Wifi, 
  BookOpen, 
  Cloud, 
  Laptop,
  MessageCircle,
  HeadphonesIcon,
  Zap,
  Shield,
  Star,
  CheckCircle,
  Play,
  Users,
  Clock,
  Award,
  TrendingUp,
  Smartphone,
  Server,
  Database,
  ShieldCheck,
  Rocket,
  Video,
  Download,
  Settings,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Calendar
} from "lucide-react";

export default function EnhancedPrinterSolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    { 
      icon: Wrench, 
      title: "Printer setup, driver installation, & troubleshooting",
      description: "Complete printer configuration and technical support",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Cpu, 
      title: "Computer optimization & virus removal",
      description: "Boost performance and secure your systems",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: Wifi, 
      title: "Internet & network configuration",
      description: "Seamless connectivity solutions",
      color: "from-purple-500 to-indigo-500"
    },
    { 
      icon: BookOpen, 
      title: "Educational printer-related content & guides",
      description: "Learn with comprehensive resources",
      color: "from-orange-500 to-amber-500"
    },
    { 
      icon: Cloud, 
      title: "Data backup & cloud setup",
      description: "Secure your data with cloud solutions",
      color: "from-pink-500 to-rose-500"
    },
    { 
      icon: Laptop, 
      title: "Remote & onsite IT support",
      description: "Expert assistance wherever you are",
      color: "from-teal-500 to-cyan-500"
    },
  ];

  const imageSections = {
    showcase: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    ],
    tech: [
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=250&h=180&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=250&h=180&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=250&h=180&fit=crop",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=250&h=180&fit=crop"
    ],
    solutions: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=280&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=280&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=280&h=200&fit=crop"
    ]
  };

  
  

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center">
      <div className="max-w-[1600px] mx-auto px-6 w-full">
        {/* Main Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-4xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="flex flex-col xl:flex-row">
            {/* Left Content Section */}
            <div className="flex-1 p-12 lg:p-16">
              <div className="max-w-2xl mx-auto lg:mx-0">
                {/* Header Badge */}
               

                {/* Main Heading */}
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 leading-tight">
                  Complete IT &{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    Printer
                  </span>{" "}
                  Solutions
                </h1>

                {/* Description */}
                <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
                  Professional technology services to keep your devices running smoothly and efficiently with  expert support.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                  {[
                    "Instant Remote Support",
                    "On-site Technician Dispatch", 
                    "Hardware & Software Solutions",
                    "Proactive Monitoring",
                    "Data Security & Backup",
                    "Customer Care"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white text-sm" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started Now
                      <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </button>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-1 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50 h-full">
                          {/* Icon Container */}
                          <div className={`relative mb-4 p-3 rounded-2xl bg-gradient-to-r ${service.color} w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="text-white text-xl" />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                          </div>

                          {/* Content */}
                          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {service.description}
                          </p>

                          {/* Hover Border Effect */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { number: "1000+", label: "Happy Customers", icon: Users },
                    { number: "Always", label: "Support Available", icon: Clock },
                    { number: "99%", label: "Success Rate", icon: TrendingUp },
                    { number: "5min", label: "Avg Response Time", icon: Zap },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white text-lg" />
                        </div>
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Visual Section - ULTIMATE IMAGE LAYOUT */}
            <div className="flex-1 relative min-h-[800px] bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 overflow-hidden p-8">
              
              {/* Main Grid Layout */}
              <div className="grid grid-cols-12 grid-rows-6 gap-4 h-full">
                
                {/* Large Hero Image - Top Left */}
                <div className="col-span-8 row-span-3 relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://c.pxhere.com/images/a0/ba/a7c5ab9316d820783e4284b3dbf4-1674976.jpg!d" 
                    alt="IT Support Team" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
                      <Zap className="w-3 h-3" />
                      Featured Service
                    </div>
                    <h3 className="text-2xl font-bold mt-3">Professional IT Support Team</h3>
                    <p className="text-blue-100 text-sm mt-1"> Expert Assistance</p>
                  </div>
                </div>

                {/* Team Members - Top Right */}
               

                {/* Tech Gallery - Middle Left */}
                <div className="col-span-6 row-span-2 relative">
                  <div className="grid grid-cols-2 gap-3 h-full">
                    {imageSections.tech.map((img, index) => (
                      <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
                        <img 
                          src={img} 
                          alt={`Tech ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                          Tech {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions Showcase - Middle Right */}
                <div className="col-span-6 row-span-2 relative rounded-3xl overflow-hidden shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop" 
                    alt="Cloud Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                    Cloud Solutions
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">Enterprise Cloud</h4>
                    <p className="text-sm opacity-90">Secure & Scalable</p>
                  </div>
                </div>

                {/* Image Carousel - Bottom Full Width */}
                <div className="col-span-12 row-span-1 relative">
                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide h-full">
                    {imageSections.showcase.map((img, index) => (
                      <div key={index} className="flex-shrink-0 w-64 group">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 h-full">
                          <img 
                            src={img} 
                            alt={`Showcase ${index + 1}`}
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                          <div className="absolute bottom-2 left-2 text-white">
                            <div className="text-xs font-semibold">Case Study {index + 1}</div>
                            <div className="text-[10px] opacity-90">Success Story</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating Elements */}
              

              

              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/20 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Clock className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gray-900">5min</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                </div>
              </div>

              {/* Contact Quick Action */}
              

              {/* Background Elements */}
              <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow z-0"></div>
              <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-2xl animate-pulse-slow-delayed z-0"></div>

              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-5 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
              </div>

            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/5 via-cyan-600/5 to-teal-600/5 border-t border-white/20">
            <div className="px-12 py-8 text-center">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Ready to Transform Your IT Experience?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their technology needs. 
                Get started with a free consultation today.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Book Free Consultation Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slow-delayed {
          animation: pulse-slow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}