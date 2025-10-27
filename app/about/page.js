'use client';

import React from 'react';
import { Users, Target, Award, Shield, Heart, Star, TrendingUp, Globe, ShoppingCart, Lightbulb } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Wide Range of Options",
      description: "Thousands of electronic gadgets from different leading brands Nationwide"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Easy to Navigate",
      description: "Simple instructions to fulfill orders and help you find what you need in a click"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Immersive Experience",
      description: "100% client satisfaction at every turn is a promise we live by"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Total Transparency",
      description: "Complete pricing and feature transparency available  for all consumers"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Qualified partners to guide you on your buying journey"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best Value",
      description: "Get the best products at reasonable prices unlike anywhere else"
    }
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Products Available" },
    { number: "Always", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#59c7b5] to-[#0095d4] py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="text-cyan-100">Micro Hub Care</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A leading retailer for electronic gadgets, serving customers nationwide with excellence for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Welcome to <span className="text-[#0095d4]">Micro Hub Care</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A driving retailer for electronic gadgets, Micro Hub Care has both an internet and offline nearness to serve customers. 
                  The store is curated to meet the requests of both online and offline customers and have been working towards client 
                  fulfillment for about a decade presently.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The company boasts of a group of professionally prepared people who can sort any issue and reply to each need of 
                  the clients Nationwide.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Target className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-white/90">Delivering exceptional electronic solutions with unmatched customer service</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Award className="w-12 h-12 mb-4 text-[#0095d4]" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                    <p className="text-gray-600">To be the nation's most trusted electronics retailer</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Users className="w-12 h-12 mb-4 text-[#59c7b5]" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Team</h3>
                    <p className="text-gray-600">Professional experts dedicated to your satisfaction</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#0095d4] to-[#0077b6] rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Heart className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Promise</h3>
                    <p className="text-white/90">100% customer satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-[#0095d4] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why <span className="text-[#59c7b5]">Choose</span> Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working towards giving a custom-made arrangement for all clients, Micro Hub Care takes pride in bringing 
              domestic your requirements at a reasonable cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:border-[#59c7b5]/30"
              >
                <div className="text-[#0095d4] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Commitment Section */}
          <div className="mt-16 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl p-12 text-center text-white shadow-2xl">
            <Lightbulb className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment to Excellence
            </h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              At Micro Hub Care, we esteem client fulfillment and work judgment above everything, and it sparkles through 
              our benefit and our items, as expressed in numerous of our customer testimonials. It is our steady endeavor 
              to guarantee our clients get the leading at reasonable costs not at all like anyplace.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Micro Hub Care for their electronic needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] hover:from-[#59c7b5] hover:to-[#0077b6] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Shop Now
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}