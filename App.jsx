import React from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';

function App() {
  return (
    <div className="font-sans text-[var(--text-dark)] bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />

        {/* About Section Placeholder */}
        <section id="about" className="section-padding bg-[var(--secondary)]">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div>
              <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm mb-2 block">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experienced Dentists Who Care</h2>
              <p className="text-[var(--text-light)] mb-6 text-lg">
                Located in the heart of Eastleigh, Nairobi, DAVMED Dental Services is committed to providing top-quality dental care in a modern, hygienic, and friendly environment.
              </p>
              <p className="text-[var(--text-light)] mb-8">
                Our team of specialists uses the latest technology to ensure your treatments are effective and comfortable. We believe that a healthy smile is the gateway to confidence.
              </p>
              <button className="text-[var(--primary)] font-bold hover:underline">Read Our Story &rarr;</button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-[var(--primary)] text-white text-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Ready for a Brighter Smile?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Book your appointment today and take the first step towards optimal oral health.
              Walk-ins are welcome at our Eastleigh clinic.
            </p>
            <button className="bg-white text-[var(--primary)] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Call Us: +254 700 000 000
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--text-dark)] text-gray-400 py-12 text-sm">
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">INLINE DENTAL</h3>
              <p className="mb-4">Eastleigh, Nairobi</p>
              <p>Mon - Sat: 8am - 6pm</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">General Dentistry</a></li>
                <li><a href="#" className="hover:text-white">Cosmetic</a></li>
                <li><a href="#" className="hover:text-white">Orthodontics</a></li>
                <li><a href="#" className="hover:text-white">Emergency</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full hover:bg-[var(--primary)] hover:text-white">FB</a>
                <a href="#" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full hover:bg-[var(--primary)] hover:text-white">IG</a>
                <a href="#" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full hover:bg-[var(--primary)] hover:text-white">TW</a>
              </div>
            </div>
          </div>
          <div className="container mt-12 pt-8 border-t border-gray-800 text-center">
            &copy; {new Date().getFullYear()} DAVMED Dental Services. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
