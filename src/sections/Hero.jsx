import React from 'react';
import { Button } from '../components/ui/Button';

export const Hero = () => {
    return (
        <section id="home" className="relative h-[90vh] flex items-center bg-[var(--secondary)] overflow-hidden">
            {/* Background with abstract shape or gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-white/50 z-10" />
                {/* Placeholder for a nice dental image - using a colored div for now with pattern */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
            </div>

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-20">
                <div className="text-left">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 rounded-full bg-teal-50 border border-teal-100">
                        Welcome to DAVMED Dental Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-dark)] leading-tight">
                        Your Smile, Our <span className="text-[var(--primary)]">Passion</span>. <br />
                        World Class Care in Eastleigh.
                    </h1>
                    <p className="text-lg text-[var(--text-light)] mb-8 max-w-lg leading-relaxed">
                        Experience state-of-the-art dental care with a gentle touch.
                        From routine checkups to cosmetic makeovers, we are dedicated to your oral health.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Button size="lg" variant="primary">Book Appointment</Button>
                        <Button size="lg" variant="outline">Our Services</Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-sm text-[var(--text-light)]">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>Open Today until 6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                            <span>Accepting New Patients</span>
                        </div>
                    </div>
                </div>

                {/* Visual Element on the right */}
                <div className="hidden md:block relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
                            alt="Modern Dental Clinic"
                            className="w-full h-full object-cover"
                            style={{ height: '500px' }}
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--accent)] rounded-full z-0 opacity-20 blur-xl"></div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--primary)] rounded-full z-0 opacity-20 blur-xl"></div>
                </div>
            </div>
        </section>
    );
};
