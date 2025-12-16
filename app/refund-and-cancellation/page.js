// components/RefundPolicyPage.jsx
"use client";
import { CheckCircle, XCircle, Phone, Mail, Globe, Clock, Shield, FileText, HelpCircle, DollarSign } from "lucide-react";

export default function RefundPolicyPage() {
  const policySections = [
    {
      icon: Globe,
      title: "1. Nature of Our Services (No Physical Products)",
      content: "Micro Hub Care provides remote technical support services including printer/computer/scanner troubleshooting, software guidance, network/Wi-Fi support, and step-by-step assistance.",
      points: [
        { type: "check", text: "Remote technical support" },
        { type: "check", text: "Printer/computer/scanner troubleshooting" },
        { type: "check", text: "Software guidance" },
        { type: "check", text: "Network/Wi-Fi support" },
        { type: "check", text: "Step-by-step assistance" }
      ],
      disclaimer: "We do not sell physical goods. Therefore: No shipping, No physical returns, No product exchanges. This policy applies only to digital services."
    },
    {
      icon: CheckCircle,
      title: "2. Eligibility for Refunds",
      content: "Refunds may be issued only if one of the following conditions is met:",
      points: [
        { type: "check", text: "A. Service Not Delivered - If a technician could not connect, call, or start the service due to our technical issue" },
        { type: "check", text: "B. Issue Not Resolved by the Technician - If our technician is unable to fix the original problem described by you and you cooperated fully" },
        { type: "check", text: "C. Duplicate Charges - Accidental double payment for the same service" },
        { type: "check", text: "D. Wrong Amount Charged - Billing error due to a system or processing mistake" }
      ],
      contact: "If any of the above apply, you may request a refund by contacting us."
    },
    {
      icon: XCircle,
      title: "3. Non-Refundable Cases",
      content: "Refunds cannot be issued in the following situations:",
      points: [
        { type: "x", text: "You refuse troubleshooting steps" },
        { type: "x", text: "Your device has hardware damage" },
        { type: "x", text: "Issue is caused by malware, third-party software, or pre-existing errors" },
        { type: "x", text: "Problem is outside the scope of the purchased service" },
        { type: "x", text: "You change your mind after service has been delivered" },
        { type: "x", text: "You give false or incomplete information" },
        { type: "x", text: "You deny remote access required for troubleshooting" },
        { type: "x", text: "Your internet or device is unstable and prevents support" },
        { type: "x", text: "Service was already completed successfully" }
      ],
      disclaimer: "Once a service is successfully delivered, it becomes non-refundable."
    },
    {
      icon: Clock,
      title: "4. Cancellation Policy",
      points: [
        { type: "check", text: "Before Service Begins - You may cancel a service before the technician starts working. If no work has begun → full refund is possible." },
        { type: "x", text: "After Work Has Started - Once a technician begins diagnosis, configuration, or remote session: Refund may not be possible unless the issue is still unresolved." },
        { type: "x", text: "After Service Is Completed - Cancellation is not allowed." }
      ]
    },
    {
      icon: FileText,
      title: "5. Return Policy (For Digital Services)",
      content: "Because all services are digital, performed live, or delivered remotely:",
      points: [
        { type: "x", text: "No physical returns" },
        { type: "x", text: "No product returns" },
        { type: "x", text: "No exchange of service once completed" }
      ]
    },
    {
      icon: Shield,
      title: "6. Service Validity",
      content: "If you purchase:",
      points: [
        { type: "check", text: "One-time fix – Valid only for the current issue" },
        { type: "check", text: "Subscription plan – Covered issues only" },
        { type: "check", text: "Annual support – Terms will be defined in the service description" }
      ],
      disclaimer: "Unused service time or partial use is not refundable."
    },
    {
      icon: HelpCircle,
      title: "7. Dispute Resolution",
      content: "If you are unhappy with your service:",
      points: [
        { type: "check", text: "Contact us first" },
        { type: "check", text: "We will attempt to resolve the issue" },
        { type: "check", text: "We may offer free re-troubleshooting or re-diagnosis" }
      ],
      warning: "Chargebacks filed with your bank without contacting us first may delay or void refund eligibility."
    },
    {
      icon: DollarSign,
      title: "8. How to Request a Refund",
      content: "To request a refund, please provide:",
      points: [
        { type: "list", text: "Full name" },
        { type: "list", text: "Email used during purchase" },
        { type: "list", text: "Receipt or transaction ID" },
        { type: "list", text: "Description of the issue" },
        { type: "list", text: "Date of service" },
        { type: "list", text: "Proof of unresolved issue (if applicable)" }
      ],
      contact: "Send to: support@microhubcare.com or call (844) 491-5152",
      disclaimer: "Refunds, once approved, will be processed within 5–10 business days."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <section className="relative py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Refund, Return & Cancellation Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Last Updated: January 2025
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">Micro Hub Care
            This Refund, Return & Cancellation Policy applies to all services purchased from  ("Company", "We", "Us", "Our"). By using our website or contacting our toll-free number (844) 491-5152, you agree to the terms below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Policy Sections */}
            <div className="lg:col-span-2 space-y-8">
              {policySections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-xl flex-shrink-0">
                        <Icon className="text-white w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>

                    {section.content && (
                      <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>
                    )}

                    {section.points && (
                      <div className="space-y-3 mb-6">
                        {section.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start gap-3">
                            {point.type === 'check' && (
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            )}
                            {point.type === 'x' && (
                              <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                            )}
                            {point.type === 'list' && (
                              <div className="w-2 h-2 bg-[#0095d4] rounded-full mt-2 flex-shrink-0" />
                            )}
                            <span className="text-gray-700">{point.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.disclaimer && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="text-amber-800 text-sm">{section.disclaimer}</p>
                      </div>
                    )}

                    {section.warning && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="text-red-800 text-sm font-medium">{section.warning}</p>
                      </div>
                    )}

                    {section.contact && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-blue-800 text-sm">{section.contact}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Toll-Free Support</p>
                      <p className="text-lg">(844) 491-5152</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <Mail className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm">support@microhubcare.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <Globe className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <p className="text-sm">https://microhubcare.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/20 rounded-xl">
                  <p className="text-sm text-white/90">
                    For refund requests, please have your transaction details ready.
                  </p>
                </div>
              </div>

              {/* Quick Help Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-[#0095d4]" />
                  Need Immediate Help?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our support team is available to assist you with any questions about our refund policy.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:8084681018" 
                    className="w-full bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a 
                    href="mailto:support@microhubcare.com" 
                    className="w-full border-2 border-[#0095d4] text-[#0095d4] py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Email Support
                  </a>
                </div>
              </div>

              {/* Policy Highlights */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#59c7b5]" />
                  Policy Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Full refund if service not started</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Refund for unresolved issues</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-500">
                    <XCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">No refund after service completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-500">
                    <XCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">No physical returns (digital service)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#59c7b5] to-[#0095d4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Clear & Fair Refund Policy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We believe in transparent policies and customer satisfaction. Contact us if you have any questions about our refund, return, or cancellation procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8084681018" 
              className="bg-white text-[#0095d4] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call (844) 491-5152
            </a>
            <a 
              href="mailto:support@microhubcare.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}