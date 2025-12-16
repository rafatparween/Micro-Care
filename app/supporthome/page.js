'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FiSearch,
  FiHelpCircle,
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiAlertTriangle,
  FiDownload,
  FiUsers,
  FiFileText,
  FiSettings,
  FiCreditCard,
  FiTool,
  FiDatabase,
  FiShield,
  FiPlay,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

export default function SupportHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const faqList = [
    {
      question: "How can I reset my password?",
      answer: "Click on 'Forgot password' on the login page, enter your email, and follow the link sent to you."
    },
    {
      question: "Can I change my subscription plan anytime?",
      answer: "Yes, you can easily upgrade or downgrade your plan in your account settings."
    },
    {
      question: "How can I contact your technical team?",
      answer: "You can reach out via live chat or email at support@hewletthubsolutions.com"
    }
  ];

  const supportCategories = [
    { icon: <FiHelpCircle />, title: "Getting Started", description: "New user guides and setup" },
    { icon: <FiSettings />, title: "Account Settings", description: "Profile and security" },
    { icon: <FiCreditCard />, title: "Billing & Payments", description: "Subscriptions and invoices" },
    { icon: <FiTool />, title: "Troubleshooting", description: "Fix common issues" },
    { icon: <FiDatabase />, title: "API & Developers", description: "Integration guides" },
    { icon: <FiShield />, title: "Security", description: "Privacy and protection" }
  ];

  const supportOptions = [
    { icon: <FiMessageSquare />, title: "Live Chat", description: "Instant help from experts", color: "from-green-400 to-emerald-500" },
    { icon: <FiPhone />, title: "Call Us", description: "Speak directly with our support", color: "from-blue-400 to-blue-600" },
    { icon: <FiMail />, title: "Email Support", description: "Detailed queries with attachments", color: "from-purple-400 to-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 text-gray-800">
      <Head>
        <title>Support | EzTech-Printer-Solutions</title>
      </Head>

      {/* Hero Section */}
      <div className="relative text-white py-24 text-center" style={{ background: "linear-gradient(to right, #59c7b5, #0095d4)" }}>
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">We’re Here to Help You</h1>
        <p className="text-lg mb-10 opacity-90 max-w-4xl mx-auto">
          Get expert assistance, step-by-step guides, and instant support anytime.
        </p>

        {/* Search */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search help articles, FAQs, or guides..."
            className="text-white w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none shadow-lg focus:ring-4 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition">
            <FiSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Glow background shape */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_70%)]"></div>
      </div>

      <main className="max-w-7xl mx-auto py-16 px-6">
        {/* Quick Stats Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-16 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-indigo-600"></h3>
            <p className="text-gray-600"> Available Support</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-purple-600">1.2M+</h3>
            <p className="text-gray-600">Queries Resolved</p>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse Help Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Contact Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Need Immediate Assistance?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 text-white bg-gradient-to-br ${option.color} shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition`}
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="opacity-90">{option.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqList.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {expandedFaq === i ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Support Banner */}
        <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-xl mb-20 flex items-center">
          <FiAlertTriangle className="text-red-600 w-6 h-6 mr-4" />
          <p className="text-red-700">
            <strong>Emergency?</strong> Call our  line: <span className="font-bold">+1-800-911-HELP</span>
          </p>
        </div>

        {/* Community CTA */}
        <section className=" text-white rounded-2xl py-16 text-center shadow-xl" style={{ background: "linear-gradient(to right, #59c7b5, #0095d4)" }}>
          <div className="max-w-3xl mx-auto">
            <FiUsers className="w-14 h-14 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl font-bold mb-2">Join the EzTech-Printer-Solutions Community</h2>
            <p className="text-blue-100 mb-6">Ask, learn, and grow with others just like you.</p>
            <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow hover:scale-105 transition">
              Visit Community
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
}
