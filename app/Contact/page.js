"use client"
import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Email, 
  LocationOn, 
  Schedule,
  VerifiedUser,
  SupportAgent,
  ArrowRight,
  CheckCircle
} from '@mui/icons-material';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-[1360px] mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-6 py-3 rounded-full mb-6">
            <SupportAgent className="mr-2" />
            <span className="font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We love to hear from you! Please fill out the form below and we will get in touch with you shortly.
          </p>
        </div>

        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-3xl p-8 text-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-8">Get Connected</h2>
                
                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-white/20 p-3 rounded-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-white/80">(844) 491-5152</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-white/20 p-3 rounded-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Email className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-white/80">support@microhubcare.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-white/20 p-3 rounded-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Schedule className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Business Hours</h3>
                      <p className="text-white/80">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <VerifiedUser className="text-white mr-3" />
                    <h3 className="font-bold text-lg">Why Choose Us?</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="text-white/90 mr-2 text-sm" />
                      <span className="text-white/90 text-sm"> Customer Support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-white/90 mr-2 text-sm" />
                      <span className="text-white/90 text-sm">Expert Technicians</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-white/90 mr-2 text-sm" />
                      <span className="text-white/90 text-sm">Quick Response Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-2xl mr-4">
                    <Send className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#59c7b5] focus:ring-2 focus:ring-[#59c7b5]/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 text-lg bg-gray-50/50 group-hover:bg-white"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <div className="w-2 h-2 bg-[#59c7b5] rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#59c7b5] focus:ring-2 focus:ring-[#59c7b5]/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 text-lg bg-gray-50/50 group-hover:bg-white"
                        placeholder="Enter your email address"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <div className="w-2 h-2 bg-[#59c7b5] rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#59c7b5] focus:ring-2 focus:ring-[#59c7b5]/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 text-lg bg-gray-50/50 group-hover:bg-white resize-none"
                        placeholder="Tell us how we can help you..."
                        rows="6"
                      ></textarea>
                      <div className="absolute top-4 right-4 pr-4 flex items-start">
                        <div className="w-2 h-2 bg-[#59c7b5] rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center items-center py-5 px-8 border border-transparent text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-[#59c7b5] to-[#0095d4] hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Send className="mr-3 text-xl group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                      <ArrowRight className="ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </form>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 rounded-2xl flex items-center animate-pulse">
                    <CheckCircle className="text-green-500 text-2xl mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
                      <p className="text-green-600">Your response has been submitted! We will get back to you shortly.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#59c7b5]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-[#59c7b5] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">Speak with our support team immediately</p>
              <p className="text-2xl font-bold text-[#0095d4]">(844) 491-5152</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#0095d4]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Email className="text-[#0095d4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email for detailed inquiries</p>
              <p className="text-lg font-bold text-[#59c7b5]">support@microhubcare.com</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-[#59c7b5]/10 to-[#0095d4]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Schedule className="text-[#59c7b5] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Contact;