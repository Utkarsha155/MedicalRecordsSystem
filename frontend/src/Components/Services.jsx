import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: "\ud83c\udfe5",
      title: "Hospital Management",
      description: "Comprehensive hospital administration, patient management, and resource optimization tools.",
      features: ["Patient Registration", "Bed Management", "Staff Scheduling", "Inventory Control"],
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
      color: "blue",
      delay: 0
    },
    {
      icon: "\ud83d\udc68‍⚕",
      title: "Doctor Portal",
      description: "Advanced tools for healthcare providers to manage patients, records, and appointments.",
      features: ["Patient Records", "Treatment Plans", "Prescription Management", "Telemedicine"],
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      color: "emerald",
      delay: 200
    },
    {
      icon: "\ud83d\udccb",
      title: "Medical Records",
      description: "Secure, centralized storage and management of all patient medical information.",
      features: ["Digital Records", "Secure Storage", "Easy Access", "Compliance"],
      gradient: "from-rose-500 via-pink-600 to-purple-700",
      color: "rose",
      delay: 400
    },
    {
      icon: "\ud83d\udcca",
      title: "Analytics & Reports",
      description: "Data-driven insights to improve healthcare outcomes and operational efficiency.",
      features: ["Performance Metrics", "Patient Analytics", "Financial Reports", "Trend Analysis"],
      gradient: "from-amber-500 via-orange-600 to-red-700",
      color: "amber",
      delay: 600
    },
    {
      icon: "\ud83d\udd10",
      title: "Security & Compliance",
      description: "Enterprise-grade security with full HIPAA compliance and audit trails.",
      features: ["Data Encryption", "Access Control", "Audit Logs", "HIPAA Compliance"],
      gradient: "from-slate-500 via-gray-600 to-zinc-700",
      color: "slate",
      delay: 800
    },
    {
      icon: "\ud83d\udcf1",
      title: "Mobile Access",
      description: "Access your healthcare data and manage operations from anywhere, anytime.",
      features: ["Mobile App", "Responsive Design", "Offline Access", "Push Notifications"],
      gradient: "from-violet-500 via-purple-600 to-indigo-700",
      color: "violet",
      delay: 1000
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-healthcare-primary/5 to-healthcare-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-healthcare-secondary/5 to-healthcare-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/3 to-indigo-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-healthcare-text mb-6">
              <span className="bg-gradient-to-r from-healthcare-primary to-healthcare-secondary bg-clip-text text-transparent">
                Our Healthcare Solutions
              </span>
            </h2>
          </div>
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive healthcare management platform designed to streamline operations, 
              improve patient care, and ensure compliance across all healthcare facilities.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group transform transition-all duration-1000 delay-${service.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-healthcare-primary/20 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-${service.color}-400/30 rounded-full animate-float`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + i}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 text-center mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-3xl`}>
                    <span className="text-5xl group-hover:scale-125 transition-transform duration-700">{service.icon}</span>
                  </div>
                  
                  {/* Animated Underline */}
                  <div className="w-0 h-1 bg-gradient-to-r from-healthcare-primary to-healthcare-secondary rounded-full mx-auto group-hover:w-24 transition-all duration-700"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-healthcare-text mb-4 group-hover:text-healthcare-primary transition-colors duration-500 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-500">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-all duration-500 group-hover:translate-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 rounded-full mr-3 group-hover:scale-150 group-hover:bg-gradient-to-r group-hover:from-healthcare-primary group-hover:to-healthcare-secondary transition-all duration-500`}></div>
                      <span className="group-hover:font-medium transition-all duration-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <button className={`w-full py-4 px-6 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 relative overflow-hidden`}>
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        @keyframes move {
          0% { transform: translateX(0); }
          100% { transform: translateX(40px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default Services;