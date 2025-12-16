// components/DisclaimerPage.jsx
"use client";
import { Shield, AlertTriangle, FileText, Lock, Globe, CheckCircle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <section className="relative py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Legal Disclaimer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Important information about our services and your responsibilities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            
            {/* Independent Service Provider */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-6 h-6 text-[#0095d4]" />
                <h2 className="text-2xl font-bold text-gray-900">Independent Service Provider</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Micro Hub Care  ("we," "our," or "the company") is an independent provider of technical support and informational content for computers, printers, scanners, smart devices, and related peripherals.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We are not affiliated with, endorsed by, or representing any hardware or software manufacturer, unless specifically stated.
                </p>
              </div>
            </div>

            {/* Trademark Usage */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-6 h-6 text-[#0095d4]" />
                <h2 className="text-2xl font-bold text-gray-900">Trademark Usage</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  All product names, images, brands, and trademarks mentioned on this website are the property of their respective owners.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  They are used strictly for identification, reference, and educational purposes only.
                </p>
              </div>
            </div>

            {/* Service Scope */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-6 h-6 text-[#0095d4]" />
                <h2 className="text-2xl font-bold text-gray-900">Service Scope</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  All services offered by Micro Hub Care  are independent and performed by our in-house or contracted technicians.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We provide troubleshooting, diagnosis, setup assistance, driver support, device connectivity support, and general technical guidance.
                </p>
              </div>
            </div>

            {/* Software Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Lock className="w-6 h-6 text-[#0095d4]" />
                <h2 className="text-2xl font-bold text-gray-900">Software Policy</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, distribute, or license any third-party software or product keys.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We only assist customers using genuine, customer-owned software or guide them to official vendor websites.
                </p>
              </div>
            </div>

            {/* Content Disclaimer */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#0095d4]" />
                <h2 className="text-2xl font-bold text-gray-900">Content Disclaimer</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  All tutorials, articles, how-to guides, and troubleshooting steps on this website are for informational purposes only.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not guarantee accuracy, completeness, or suitability for every device or issue.
                </p>
              </div>
            </div>

            {/* Remote Access Safety */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-[#0095d4]" />
                <h2 className="text-2xl font-bold text-gray-900">Remote Access Safety</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Technical support may include optional remote-access sessions.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Remote access is performed only with the customer's permission.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Customers keep full control and may terminate access at any time.
                </p>
              </div>
            </div>

            {/* No Warranty / Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900">No Warranty / Limitation of Liability</h2>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the fullest extent permitted by law, Micro Hub Care  is not liable for any indirect, incidental, or consequential loss or damage arising from:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Use of our website</li>
                  <li>• Following our guides or tutorials</li>
                  <li>• Use of our services</li>
                  <li>• Technical issues related to third-party software or hardware</li>
                </ul>
              </div>
            </div>

            {/* Your Agreement */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-900">Your Agreement</h2>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using this website or contacting our support team, you confirm that:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• You understand this disclaimer</li>
                  <li>• You accept our Terms of Service and Privacy Policy</li>
                </ul>
              </div>
            </div>

            {/* Footer Information */}
            <div className="text-center border-t border-gray-300 pt-12">
              <div className="space-y-4 text-gray-600">
                <p className="text-lg font-semibold">Last Updated: November 2025</p>
                <p className="text-xl">© 2025 Micro Hub Care . All Rights Reserved.</p>
              </div>
              
              {/* Quick Links */}
             
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#59c7b5] to-[#0095d4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Technical Support?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you with printer setup, computer optimization, and IT support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0095d4] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              Get Support Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}