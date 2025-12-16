// // pages/index.js
// "use client"
// import { useState } from 'react';
// import Head from 'next/head';
// import { 
//   Wifi, 
//   Power, 
//   Settings, 
//   Phone, 
//   Mail, 
//   MessageCircle, 
//   CheckCircle, 
//   AlertTriangle,
//   Zap,
//   RefreshCw,
//   Shield,
//   Users,
//   Clock,
//   Star
// } from 'lucide-react';

// export default function PrinterTroubleshooting() {
//   const [activeTab, setActiveTab] = useState('connection');
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     issue: '',
//     printerModel: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const faqs = [
//     {
//       question: "Why does my printer keep going offline?",
//       answer: "This can happen due to connection drops, outdated drivers, or incorrect settings. Follow the troubleshooting steps above to resolve it."
//     },
//     {
//       question: "How do I get my HP/Epson/Canon printer back online?",
//       answer: "The steps are similar for most printers. Ensure proper connection, update drivers, and clear print queue."
//     },
//     {
//       question: "Can a printer go offline due to Wi-Fi issues?",
//       answer: "Yes. If the printer disconnects from Wi-Fi, it may show as offline. Restart the router and reconnect the printer."
//     },
//     {
//       question: "How do I stop my printer from going offline repeatedly?",
//       answer: "Keep drivers updated, use a stable connection, and disable 'Use Printer Offline' mode in settings."
//     }
//   ];

//   const stats = [
//     { number: "Always", label: "Expert Support", icon: <Clock className="w-6 h-6" /> },
//     { number: "15min", label: "Average Response", icon: <Zap className="w-6 h-6" /> },
//     { number: "98%", label: "Success Rate", icon: <CheckCircle className="w-6 h-6" /> },
//     { number: "50K+", label: "Issues Resolved", icon: <Users className="w-6 h-6" /> }
//   ];

//   const handleFaqToggle = (index) => {
//     setExpandedFaq(expandedFaq === index ? null : index);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     alert('Your query has been submitted! Our EzTech-Printer-Solutions team will contact you shortly.');
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       issue: '',
//       printerModel: ''
//     });
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <Head>
//         <title>Printer Troubleshooting Guide | EzTech-Printer-Solutions</title>
//         <meta name="description" content="Professional printer troubleshooting and support from EzTech-Printer-Solutions experts" />
//       </Head>

//       {/* Hero Section */}
//       <header className="relative bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white py-20 lg:py-28 overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex justify-center mb-6">
//             <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
//               <Settings className="w-10 h-10 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//             Printer <span className="text-cyan-100">Offline?</span>
//           </h1>
//           <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
//             Professional troubleshooting solutions from <span className="font-semibold">EzTech-Printer-Solutions</span> experts
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               onClick={() => document.getElementById('troubleshooting-section').scrollIntoView({ behavior: 'smooth' })}
//               className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
//             >
//               Start Troubleshooting
//             </button>
//             <a
//               href="tel:+15551234567"
//               className="bg-white text-[#0095d4] hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
//             >
//               <Phone className="w-5 h-5" />
//               Call Expert Now
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Stats Section */}
//       <section className="py-16 bg-white/80 backdrop-blur-sm -mt-10 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//                   <div className="text-[#0095d4] mb-3 flex justify-center">
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-600 font-semibold text-sm">
//                     {stat.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main id="troubleshooting-section" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         {/* Tabs Navigation */}
//         <div className="flex flex-wrap gap-3 mb-12 justify-center">
//           {[
//             { id: 'connection', label: 'Connection Issues', icon: <Settings className="w-5 h-5" /> },
//             { id: 'wifi', label: 'WiFi Setup', icon: <Wifi className="w-5 h-5" /> },
//             { id: 'sleep', label: 'Sleep Mode', icon: <Power className="w-5 h-5" /> },
//             { id: 'expert', label: 'Expert Help', icon: <Users className="w-5 h-5" /> }
//           ].map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
//                 activeTab === tab.id 
//                   ? 'bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white shadow-2xl' 
//                   : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-white/20 hover:border-[#59c7b5]/30 shadow-lg hover:shadow-xl'
//               }`}
//             >
//               {tab.icon}
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden mb-16">
//           {activeTab === 'connection' && (
//             <div className="p-8">
//               <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fixing Printer Connection Issues</h2>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     step: "1",
//                     title: "Check Basic Connections",
//                     description: "Ensure the printer is powered on and not in sleep mode. Check all cables (USB/power) are properly connected.",
//                     icon: <Settings className="w-8 h-8" />
//                   },
//                   {
//                     step: "2",
//                     title: "Restart Devices",
//                     description: "Turn off the printer, unplug for 30 seconds, then restart. Also restart your computer to refresh connections.",
//                     icon: <RefreshCw className="w-8 h-8" />
//                   },
//                   {
//                     step: "3",
//                     title: "Set Printer to Online Mode",
//                     description: "Go to Control Panel > Devices and Printers. Right-click your printer and ensure 'Use Printer Offline' is not selected.",
//                     icon: <CheckCircle className="w-8 h-8" />
//                   },
//                   {
//                     step: "4",
//                     title: "Clear Print Queue",
//                     description: "Open print queue and cancel all documents. Restart the print spooler service from Windows Services.",
//                     icon: <AlertTriangle className="w-8 h-8" />
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:border-[#59c7b5] transition-all duration-300 group">
//                     <div className="flex items-start gap-4">
//                       <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
//                         {item.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           <span className="bg-[#0095d4] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
//                             {item.step}
//                           </span>
//                           <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//                         </div>
//                         <p className="text-gray-600 leading-relaxed">{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'wifi' && (
//             <div className="p-8">
//               <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Connecting Your Printer to WiFi</h2>
              
//               <div className="grid lg:grid-cols-2 gap-8">
//                 <div className="space-y-6">
//                   {[
//                     {
//                       icon: <Wifi className="w-8 h-8" />,
//                       title: "Check Network Connection",
//                       description: "Move your printer and computer closer to the router. Check signal quality and try opening a website to test internet connection."
//                     },
//                     {
//                       icon: <RefreshCw className="w-8 h-8" />,
//                       title: "Restart Your Router",
//                       description: "Unplug the router's power cord, wait 15 seconds, then reconnect it. This often resolves intermittent WiFi issues."
//                     },
//                     {
//                       icon: <Settings className="w-8 h-8" />,
//                       title: "Check Wireless Settings",
//                       description: "Ensure wireless signal is turned on in printer settings. Look for a light next to the wireless button/icon on your printer."
//                     }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-[#59c7b5] transition-all duration-300">
//                       <div className="bg-[#0095d4] text-white rounded-xl p-3 flex-shrink-0">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
//                         <p className="text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-2xl p-6 text-white">
//                   <div className="flex items-center gap-3 mb-4">
//                     <Zap className="w-6 h-6" />
//                     <h3 className="text-xl font-bold">Pro Tip</h3>
//                   </div>
//                   <p className="text-white/90 leading-relaxed">
//                     If you recently changed your WiFi password or network security settings, you'll need to reconnect 
//                     your printer to the network with the new credentials. Most printers have a WiFi setup wizard in their settings menu.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'sleep' && (
//             <div className="p-8">
//               <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Resolving Printer Sleep Mode Issues</h2>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     title: "Wake Up Your Printer",
//                     description: "If your printer is in sleep mode, touch the printer's touchscreen or press the Power button to wake it up and put it in ready state.",
//                     tip: "Quick Tip"
//                   },
//                   {
//                     title: "Adjust Power Settings",
//                     description: "Access your printer's settings menu to adjust sleep timer or disable power-saving mode completely.",
//                     note: "Location varies by printer model"
//                   },
//                   {
//                     title: "Check for Error Messages",
//                     description: "Look for any warning lights or error messages on the printer display that might indicate why it's not waking up.",
//                     warning: "Important"
//                   },
//                   {
//                     title: "Perform a Power Cycle",
//                     description: "Turn off the printer, unplug it from power, wait 60 seconds, then reconnect and power on. This often resolves unresponsive behavior."
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:border-[#59c7b5] transition-all duration-300 group hover:scale-105">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
//                     <p className="text-gray-600 mb-4">{item.description}</p>
//                     {item.tip && (
//                       <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1">
//                         <Zap className="w-4 h-4" />
//                         {item.tip}
//                       </div>
//                     )}
//                     {item.warning && (
//                       <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1">
//                         <AlertTriangle className="w-4 h-4" />
//                         {item.warning}
//                       </div>
//                     )}
//                     {item.note && (
//                       <div className="text-gray-500 text-sm mt-2 flex items-center gap-1">
//                         <Clock className="w-4 h-4" />
//                         {item.note}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'expert' && (
//             <div className="p-8">
//               <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Need Expert Help from EzTech-Printer-Solutions?</h2>
              
//               <div className="grid lg:grid-cols-2 gap-8">
//                 <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
//                   <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//                     <MessageCircle className="w-6 h-6 text-[#0095d4]" />
//                     Contact Our Experts
//                   </h3>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Printer Model</label>
//                         <input
//                           type="text"
//                           name="printerModel"
//                           value={formData.printerModel}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
//                           placeholder="e.g., HP LaserJet Pro"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Issue *</label>
//                       <textarea
//                         name="issue"
//                         value={formData.issue}
//                         onChange={handleInputChange}
//                         rows="4"
//                         className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
//                         required
//                       ></textarea>
//                     </div>
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-[#59c7b5] to-[#0095d4] hover:from-[#59c7b5] hover:to-[#0077b6] disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                           Submitting...
//                         </>
//                       ) : (
//                         <>
//                           <Mail className="w-5 h-5" />
//                           Submit Request
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//                     <Shield className="w-6 h-6 text-[#59c7b5]" />
//                     Why Choose EzTech-Printer-Solutions?
//                   </h3>
//                   <div className="space-y-4 mb-8">
//                     {[
//                       " support from certified printer specialists",
//                       "Remote troubleshooting available worldwide",
//                       "Step-by-step guidance for any printer model",
//                       "Free initial diagnosis and assessment",
//                       "Quick response time - typically under 15 minutes",
//                       "Comprehensive follow-up and support"
//                     ].map((benefit, index) => (
//                       <div key={index} className="flex items-start gap-3">
//                         <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                         <span className="text-gray-700">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-xl p-4">
//                     <div className="flex items-start gap-3">
//                       <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <h4 className="font-semibold text-amber-800 mb-1">Immediate Assistance Available</h4>
//                         <p className="text-amber-700 text-sm">
//                           For urgent printer issues, call our support line at{' '}
//                           <span className="font-bold">+(1) 888-291-3869</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* FAQ Section */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden mb-16">
//           <div className="p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
//                   <button
//                     onClick={() => handleFaqToggle(index)}
//                     className="flex justify-between items-center w-full text-left focus:outline-none"
//                   >
//                     <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
//                     <div className={`transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
//                       <svg className="w-6 h-6 text-[#0095d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </button>
//                   {expandedFaq === index && (
//                     <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
//           <div className="p-12 text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Still Having Printer Problems?</h2>
//             <p className="text-cyan-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
//               Our certified EzTech-Printer-Solutions technicians are ready to provide professional solutions for all your printer issues.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => setActiveTab('expert')}
//                 className="bg-white text-[#0095d4] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 Get Expert Help Now
//               </button>
//               <a
//                 href="tel:+15551234567"
//                 className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0095d4] font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
//               >
//                 <Phone className="w-5 h-5" />
//                 Call: +(1) 888-291-3869
//               </a>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



// pages/index.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import { 
  Wifi, 
  Power, 
  Settings, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  RefreshCw,
  Shield,
  Users,
  Clock,
  Star
} from 'lucide-react';

export default function PrinterTroubleshooting() {
  const [activeTab, setActiveTab] = useState('printer-offline');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: '',
    printerModel: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: "Why does my printer keep going offline?",
      answer: "Weak Wi-Fi, outdated drivers, and blocked print tasks are the most common reasons."
    },
    {
      question: "Can I fix an offline printer myself?",
      answer: "Basic restarts may help, but if the issue repeats, professional diagnostics is recommended."
    },
    {
      question: "Why does my printer go offline after a power outage?",
      answer: "It may lose its IP address or Wi-Fi connection."
    },
    {
      question: "How long does printer setup take?",
      answer: "Usually 10–15 minutes."
    },
    {
      question: "Can I connect multiple devices?",
      answer: "Yes, we can help link all your devices."
    }
  ];

  const stats = [
    { number: "Always", label: "Expert Support", icon: <Clock className="w-6 h-6" /> },
    { number: "15min", label: "Average Response", icon: <Zap className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50K+", label: "Issues Resolved", icon: <Users className="w-6 h-6" /> }
  ];

  const handleFaqToggle = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Your query has been submitted! Our EzTech-Printer-Solutions team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      issue: '',
      printerModel: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Printer Troubleshooting Guide | EzTech-Printer-Solutions</title>
        <meta name="description" content="Professional printer troubleshooting and support from EzTech-Printer-Solutions experts" />
      </Head>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
              <Settings className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Printer <span className="text-cyan-100">Offline?</span>
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
            Let's Bring It Back Online in Minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('troubleshooting-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Troubleshooting
            </button>
            <a
              href="tel:+18882913869"
              className="bg-white text-[#0095d4] hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Expert Now
            </a>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-[#0095d4] mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="troubleshooting-section" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Tabs Navigation */}
        {/* <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {[
            { id: 'printer-offline', label: 'Printer Offline', icon: <Settings className="w-5 h-5" /> },
            { id: 'printer-setup', label: 'Printer Setup', icon: <Wifi className="w-5 h-5" /> },
            { id: 'scanner-setup', label: 'Scanner Setup', icon: <Power className="w-5 h-5" /> },
            { id: 'ink-issues', label: 'Ink Issues', icon: <Users className="w-5 h-5" /> },
            { id: 'expert-help', label: 'Expert Help', icon: <Users className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white shadow-2xl' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-white/20 hover:border-[#59c7b5]/30 shadow-lg hover:shadow-xl'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div> */}

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden mb-16">
          {activeTab === 'printer-offline' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Printer Offline? Let's Bring It Back Online in Minutes</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl mb-8">
                  When your printer suddenly stops responding, shows "Offline," or disappears from your device, it can interrupt your work and cause unnecessary stress.
                  Our experts help diagnose and resolve printer connectivity issues quickly and easily.
                </p>

                <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white rounded-2xl p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    Why Printers Go Offline
                  </h3>
                  <p className="text-white/90 mb-4">Your printer may appear offline due to:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-white/90">
                    <li className="flex items-center gap-2">• Network or Wi-Fi drops</li>
                    <li className="flex items-center gap-2">• Wrong printer port or driver</li>
                    <li className="flex items-center gap-2">• Print spooler blocked</li>
                    <li className="flex items-center gap-2">• Incorrect default printer</li>
                    <li className="flex items-center gap-2">• USB cable/port issues</li>
                    <li className="flex items-center gap-2">• Router or IP conflict problems</li>
                    <li className="flex items-center gap-2">• Outdated system settings</li>
                    <li className="flex items-center gap-2">• Sleep mode or auto-off functions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0095d4]" />
                    Complete Troubleshooting We Provide
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ 1. Connection Check</h4>
                      <p className="text-gray-600">We verify Wi-Fi strength, network stability, IP address, and connectivity status to ensure the printer is communicating properly.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ 2. Printer Mode & Driver Fix</h4>
                      <p className="text-gray-600">We ensure your printer is set to "Online Mode," reinstall/update drivers, and clear incorrect port selections.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ 3. Software Reset & Print Queue Repair</h4>
                      <p className="text-gray-600">Stuck print jobs cause 70% of offline errors. We clean, reset, and repair your print spooler system.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ 4. Wireless Setup & Sync</h4>
                      <p className="text-gray-600">If your printer joined a different Wi-Fi network, we reconfigure it and sync it with your laptop/computer.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ 5. Deep Diagnostics</h4>
                      <p className="text-gray-600">Complete device check to identify hidden settings blocking communication.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Fast Help?</h3>
                  <p className="text-lg text-gray-700 mb-4">Our specialists can fix your offline printer in 15 minutes.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <Phone className="w-5 h-5 text-[#0095d4]" />
                      📞 Toll-Free: (844) 491-5152
                    </div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <MessageCircle className="w-5 h-5 text-[#59c7b5]" />
                      💬 Live Chat Available 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'printer-setup' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">PRINTER SETUP PAGE — FULL PRO CONTENT</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl mb-8">
                  Simple, Fast & Reliable Printer Setup for Every Device
                </p>
                <p className="mb-8">
                  Setting up a printer can be confusing — whether it's wireless, wired, or mobile printing.
                  Our experts handle the complete setup for you.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0095d4]" />
                    Setup Services We Offer
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Wireless Printer Setup</h4>
                      <p className="text-gray-600">We connect your printer to your Wi-Fi network securely and ensure smooth communication with all devices.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ USB/Wired Setup</h4>
                      <p className="text-gray-600">Stable, fast printing configuration for desktops and offices.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Driver Installation</h4>
                      <p className="text-gray-600">We download and install the correct drivers for your device.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Mobile Printing Setup</h4>
                      <p className="text-gray-600">We configure your phone/tablet for easy printing.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Multi-Device Connection</h4>
                      <p className="text-gray-600">Share printers between multiple computers.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white rounded-2xl p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    Step-by-Step Setup Process
                  </h3>
                  <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-white/90">
                    <li className="flex items-center gap-2">1. Connect and power on the printer</li>
                    <li className="flex items-center gap-2">2. Install/update drivers</li>
                    <li className="flex items-center gap-2">3. Connect through Wi-Fi or USB</li>
                    <li className="flex items-center gap-2">4. Configure system settings</li>
                    <li className="flex items-center gap-2">5. Perform test prints</li>
                    <li className="flex items-center gap-2">6. Explain maintenance tips</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scanner-setup' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">SCANNER SETUP PAGE — FULL PRO CONTENT</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Effortless Scanner Setup</h3>
                <p className="text-xl mb-8 text-center">
                  We configure your scanner for desktops, laptops, and mobile devices.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0095d4]" />
                    What Scanner Setup Includes
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Driver installation</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Wireless or USB connection</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Scan-to-computer setup</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Scan-to-email setup</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ File format configuration (PDF, JPEG)</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Resolution & quality settings</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ink-issues' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">INK CARTRIDGE ISSUE PAGE — FULL PRO CONTENT</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Ink Cartridge Troubles? We'll Fix It Professionally
                </h3>
                <p className="text-xl mb-8 text-center">
                  Cartridges not recognized? Poor print quality? Streaks or faded prints?
                  We diagnose and repair all ink-related problems.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0095d4]" />
                    What We Fix
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Cartridge not detected</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Low ink error even after refill</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Streaks and smudges</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Color not printing</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Alignment problems</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Slow printing</h4>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✔ Ink buildup or clogging</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'expert-help' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Need Expert Help from EzTech-Printer-Solutions?</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-[#0095d4]" />
                    Contact Our Experts
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Printer Model</label>
                        <input
                          type="text"
                          name="printerModel"
                          value={formData.printerModel}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
                          placeholder="e.g.,  LaserJet Pro"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Issue *</label>
                      <textarea
                        name="issue"
                        value={formData.issue}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095d4] focus:border-[#0095d4] transition-all duration-200"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#59c7b5] to-[#0095d4] hover:from-[#59c7b5] hover:to-[#0077b6] disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[#59c7b5]" />
                    Why Choose EzTech-Printer-Solutions?
                  </h3>
                  <div className="space-y-4 mb-8">
                    {[
                      "support from certified printer specialists",
                      "Remote troubleshooting available worldwide",
                      "Step-by-step guidance for any printer model",
                      "Free initial diagnosis and assessment",
                      "Quick response time - typically under 15 minutes",
                      "Comprehensive follow-up and support"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-800 mb-1">Immediate Assistance Available</h4>
                        <p className="text-amber-700 text-sm">
                          For urgent printer issues, call our support line at{' '}
                          <span className="font-bold">(844) 491-5152</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <div className={`transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-[#0095d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Still Having Printer Problems?</h2>
            <p className="text-cyan-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Our certified EzTech-Printer-Solutions technicians are ready to provide professional solutions for all your printer issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab('expert-help')}
                className="bg-white text-[#0095d4] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Get Expert Help Now
              </button>
              <a
                href="tel:+18882913869"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0095d4] font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call: (844) 491-5152
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}