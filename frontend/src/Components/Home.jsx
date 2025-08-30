import React from 'react'

const Home = () => (
  <section id="home" className="pt-8 pb-20 bg-gradient-to-br from-green-50 via-white to-lime-50 min-h-screen flex items-center justify-center animate-fadeIn">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-healthcare-text mb-6 drop-shadow-lg animate-slideInDown">
          Unified Medical
          <div className="text-healthcare-primary">Repository</div>
        </h1>
        <p className="text-xl md:text-2xl text-green-900/80 mb-8 animate-fadeInUp">
          A clean, secure, and modern healthcare platform with centralized records for patients, doctors, and hospitals.
        </p>
        <a href="#services" className="inline-block bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-black px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300">
          Explore Services
        </a>
      </div>
      <div className="flex-1 flex justify-center animate-fadeInUp">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-healthcare-primary to-healthcare-accent rounded-[32px] blur opacity-30"></div>
          <img src="undraw_doctors_djoj.svg" alt="Healthcare" className="relative rounded-3xl shadow-2xl w-2/3 max-w-xl border-8 border-white" />
        </div>
      </div>
    </div>
  </section>
);

export default Home
