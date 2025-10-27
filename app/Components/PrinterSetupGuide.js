
"use client";
import { useState } from 'react';

const PrinterSetupGuide = () => {
  const [activeTab, setActiveTab] = useState('wireless');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Printer Setup <span className="text-blue-600">Master Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about setting up your new office printer for optimal performance
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('wireless')}
              className={`flex-1 py-4 px-6 text-lg font-medium text-center ${activeTab === 'wireless' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Wireless Setup
            </button>
            <button
              onClick={() => setActiveTab('wired')}
              className={`flex-1 py-4 px-6 text-lg font-medium text-center ${activeTab === 'wired' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Wired Setup
            </button>
            <button
              onClick={() => setActiveTab('troubleshooting')}
              className={`flex-1 py-4 px-6 text-lg font-medium text-center ${activeTab === 'troubleshooting' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Troubleshooting
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'wireless' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Wireless Printer Setup Guide</h2>
                <p className="text-gray-600">
                  Setting up a wireless printer provides flexibility and convenience for your office. Follow these steps for a seamless installation process.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Position Your Printer</h3>
                    <p className="text-gray-600">Place your printer near your WiFi router and power source. Ensure it's within range for optimal connectivity.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Connect to Power</h3>
                    <p className="text-gray-600">Plug in your printer and turn it on. Allow it to complete its initialization process.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Connect to WiFi</h3>
                    <p className="text-gray-600">Use the printer's control panel to select your network and enter your WiFi password.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Install Software</h3>
                    <p className="text-gray-600">Download and install the latest drivers from the manufacturer's website for full functionality.</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Pro Tip</h3>
                  <p className="text-green-700">
                    If your printer supports WPS, press the WPS button on both your router and printer for an instant connection without entering passwords.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'wired' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Wired Printer Setup Guide</h2>
                <p className="text-gray-600">
                  Wired connections offer reliability and consistent performance. Here's how to set up your traditional wired printer.
                </p>
                
                <ol className="space-y-4 mt-8">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">1</span>
                    <div>
                      <h3 className="font-semibold">Unbox and Position</h3>
                      <p className="text-gray-600">Carefully unbox your printer and place it in your desired location near a power outlet.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">2</span>
                    <div>
                      <h3 className="font-semibold">Connect to Power</h3>
                      <p className="text-gray-600">Plug the power cable into the printer and connect it to a power source, then turn on the printer.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">3</span>
                    <div>
                      <h3 className="font-semibold">Establish Connection</h3>
                      <p className="text-gray-600">Connect your printer to your computer using a USB cable or to your network via Ethernet cable.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">4</span>
                    <div>
                      <h3 className="font-semibold">Install Drivers</h3>
                      <p className="text-gray-600">Download the latest drivers from the manufacturer's website or use the included installation CD.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">5</span>
                    <div>
                      <h3 className="font-semibold">Add Printer to System</h3>
                      <p className="text-gray-600">Go to your computer's printer settings and add the new printer to your devices.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">6</span>
                    <div>
                      <h3 className="font-semibold">Test Your Setup</h3>
                      <p className="text-gray-600">Print a test page to confirm everything is working correctly.</p>
                    </div>
                  </li>
                </ol>
                
                <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                  <p className="text-yellow-700">
                    For Ethernet connections, ensure your network has available ports and DHCP enabled for automatic IP address assignment.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'troubleshooting' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Printer Troubleshooting Guide</h2>
                <p className="text-gray-600">
                  Encountering issues with your printer setup? Here are solutions to common problems.
                </p>
                
                <div className="mt-8 space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Printer Not Detected</h3>
                    <ul className="list-disc pl-5 text-red-700 space-y-2">
                      <li>Ensure all cables are securely connected</li>
                      <li>Check if the printer is powered on</li>
                      <li>Restart both your printer and computer</li>
                      <li>Verify printer drivers are correctly installed</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Wireless Connection Issues</h3>
                    <ul className="list-disc pl-5 text-purple-700 space-y-2">
                      <li>Move printer closer to the router</li>
                      <li>Check if you're using the correct WiFi password</li>
                      <li>Restart your router and printer</li>
                      <li>Verify your network supports the printer's frequency band (2.4GHz vs 5GHz)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-2">Print Quality Problems</h3>
                    <ul className="list-disc pl-5 text-indigo-700 space-y-2">
                      <li>Run the printer's cleaning utility</li>
                      <li>Check ink or toner levels</li>
                      <li>Align print heads through printer settings</li>
                      <li>Use manufacturer-approved supplies</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Additional Help?</h3>
                  <p className="text-blue-700 mb-4">
                    If you're still experiencing issues, consult your printer's manual or visit the manufacturer's support website for model-specific guidance.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                    Contact Support
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Manuals</h3>
            <p className="text-gray-600">Download detailed setup guides and manuals for all major printer brands.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
            <p className="text-gray-600">Watch step-by-step video guides for visual learning and troubleshooting.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-purple-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Support</h3>
            <p className="text-gray-600">Connect with our experts for personalized assistance with your setup.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-blue-600 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Set Up Your Printer?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you need help with installation, troubleshooting, or upgrading your office equipment, we're here to assist.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition duration-200 w-full sm:w-auto">
              Download Complete Guide
            </button>
            <button className="border border-white text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-lg transition duration-200 w-full sm:w-auto">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterSetupGuide;