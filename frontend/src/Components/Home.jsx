import React from 'react'

const Home = () => (
  <section id="home" className="pb-20 mt-20 min-h-screen flex items-center justify-center animate-fadeIn bg-healthcare-radial">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-healthcare-text mb-6 drop-shadow-lg animate-slideInDown">
          Unified Medical
          <div className="bg-gradient-to-r from-healthcare-primary to-healthcare-secondary bg-clip-text text-transparent">Repository</div>
        </h1>
        <p className="text-xl md:text-2xl text-green-900/80 mb-8 animate-fadeInUp">
          A clean, secure, and modern healthcare platform with centralized records for patients, doctors, and hospitals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <a href="#services" className="inline-block px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white shadow-glow hover:brightness-110 transition-all">Explore Services</a>
          <a href="#about" className="inline-block px-8 py-4 rounded-full text-lg font-semibold border border-healthcare-primary/30 bg-white hover:bg-healthcare-bg text-healthcare-text transition-all">Why HealthCare+</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center animate-fadeInUp">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-healthcare-primary to-healthcare-accent rounded-[32px] blur opacity-30 animate-float"></div>
          <img src="undraw_doctors_djoj.svg" alt="Healthcare" className="relative rounded-3xl shadow-2xl w-2/3 max-w-xl border-8 border-white" />
        </div>
      </div>
    </div>
  </section>
);

export default Home
