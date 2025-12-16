// components/AboutPage.jsx
"use client";
import { Shield, Target, Eye, Star, Mail, Phone, MapPin, Clock, Users, Laptop } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Shield, title: "Integrity and accountability", desc: "We stand behind our work with complete transparency" },
    { icon: Users, title: "Honest communication", desc: "Clear, straightforward advice you can trust" },
    { icon: Star, title: "Education over pressure selling", desc: "We empower you with knowledge, not push products" },
    { icon: Shield, title: "Data privacy and trust", desc: "Your information security is our top priority" },
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "50+", label: "States Served" },
    { number: "2+", label: "Years Experience" },
    { number: "Always", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#59c7b5]/10 to-[#0095d4]/10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#59c7b5]/20 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0095d4]/20 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in technology solutions January 2024
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-2xl">
                  <Users className="text-white w-7 h-7" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Micro Hub Care </strong> is a U.S.-registered information-technology company that provides expert assistance for computers, printers, and connected devices.
                </p>
                <p>
                 January 2024, we've helped customers nationwide through reliable technical support, clear communication, and step-by-step learning resources.
                </p>
                <p className="bg-gradient-to-r from-[#59c7b5]/10 to-[#0095d4]/10 p-6 rounded-2xl border-l-4 border-[#59c7b5]">
                  With thousands of devices repaired and serviced, we've built our reputation around honesty, expertise, and long-term relationships with customers who value quality service.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#59c7b5]/10 to-[#0095d4]/10 rounded-3xl p-8 h-full">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-xl">
                  <Target className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To simplify technology by offering transparent, professional, and educational tech support — empowering every customer to handle their devices with confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-xl">
                  <Eye className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted destination in America for printer support, computer optimization, and easy-to-understand printer setup content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#59c7b5]/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-gradient-to-br from-[#59c7b5]/5 to-[#0095d4]/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Company Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-lg">
                      <Laptop className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Registered Name</div>
                      <div className="text-gray-600">Micro Hub Care </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-lg">
                      <Clock className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Established</div>
                      <div className="text-gray-600">2024</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-lg">
                      <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Country</div>
                      <div className="text-gray-600">United States</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-lg">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">support@microhubcare.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-lg">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">[(844) 491-5152]</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-lg">
                      <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">[8457 Burnet Avenue Unit 9 
North Hills , CA 91343]</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-lg">
                      <Clock className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Hours</div>
                      <div className="text-gray-600">Remote Assistance</div>
                    </div>
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Professional Tech Support?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers who trust us with their technology needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0095d4] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}