"use client"

import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Github, Twitter, Chrome, Link } from 'lucide-react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Sign in attempt:', formData);
    setIsLoading(false);
  };

  const socialLogins = [
    { icon: <Chrome className="w-5 h-5" />, name: 'Google', color: 'hover:bg-red-500/20 border-red-400/30' },
    { icon: <Github className="w-5 h-5" />, name: 'GitHub', color: 'hover:bg-gray-500/20 border-gray-400/30' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', color: 'hover:bg-blue-500/20 border-blue-400/30' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#59c7b5] via-[#0095d4] to-[#0077b6] flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-md">
        {/* Glass Morphism Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-cyan-100 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">
                  🖨️
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-white/70 text-sm">
              Sign in to your EzTech-Printer-Solutions account
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/50 group-focus-within:text-cyan-300 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-cyan-300/30 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-white/80">
                    Password
                  </label>
                  <Link href="#" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/50 group-focus-within:text-cyan-300 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-12 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-cyan-300/30 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border-2 rounded transition-all duration-200 ${
                      formData.rememberMe 
                        ? 'bg-cyan-400 border-cyan-400' 
                        : 'bg-white/10 border-white/30'
                    }`}>
                      {formData.rememberMe && (
                        <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-white/80">Remember me</span>
                </label>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:scale-100 disabled:cursor-not-allowed shadow-lg relative overflow-hidden group"
              >
                <div className="relative z-10 flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-3 gap-4">
              {socialLogins.map((social, index) => (
                <button
                  key={social.name}
                  className={`flex items-center justify-center p-3 border rounded-xl bg-white/5 backdrop-blur-sm text-white/80 hover:text-white transition-all duration-300 transform hover:scale-105 ${social.color} hover:shadow-lg`}
                >
                  {social.icon}
                </button>
              ))}
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-white/70 text-sm">
                Don't have an account?{' '}
                <Link href="#" className="text-cyan-300 hover:text-cyan-200 font-semibold transition-colors">
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-300/30 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300/40 rounded-full blur-sm animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 -right-6 w-4 h-4 bg-white/20 rounded-full blur-sm animate-pulse"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm mb-[20px]">
        © 2024 EzTech-Printer-Solutions. All rights reserved.
      </div>
    </div>
  );
};

export default SignIn;