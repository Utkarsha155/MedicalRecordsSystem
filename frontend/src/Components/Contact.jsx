import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-white animate-fadeIn">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-healthcare-text mb-6 animate-slideInDown">Contact Us</h2>
      <p className="text-xl text-green-900/80 mb-8 animate-fadeInUp">Have questions or need help? Reach out to us!</p>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Name" className="flex-1 px-6 py-3 rounded-lg border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60 text-lg transition-all duration-300" />
          <input type="email" placeholder="Email" className="flex-1 px-6 py-3 rounded-lg border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60 text-lg transition-all duration-300" />
        </div>
        <textarea placeholder="Your Message" rows="4" className="w-full px-6 py-3 rounded-lg border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60 text-lg transition-all duration-300"></textarea>
        <button type="submit" className="bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white px-8 py-3 rounded-full text-lg font-bold shadow-glow hover:brightness-110 transition-all duration-300">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;