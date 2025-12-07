import React from 'react';
import { ShieldCheck, Sparkles, Smile, Activity } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-50 group">
        <div className="w-14 h-14 bg-[var(--secondary)] rounded-full flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-[var(--text-dark)]">{title}</h3>
        <p className="text-[var(--text-light)] leading-relaxed mb-4">{description}</p>
        <a href="#" className="text-[var(--primary)] font-medium hover:underline text-sm inline-flex items-center">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </a>
    </div>
);

export const Services = () => {
    const services = [
        {
            icon: ShieldCheck,
            title: "General Dentistry",
            description: "Comprehensive exams, cleanings, and fillings to keep your smile healthy and strong."
        },
        {
            icon: Sparkles,
            title: "Cosmetic Dentistry",
            description: "Teeth whitening, veneers, and bonding to give you the stunning smile you deserve."
        },
        {
            icon: Activity,
            title: "Root Canals",
            description: "Pain-free root canal therapy to save your natural teeth and relieve toothache."
        },
        {
            icon: Smile,
            title: "Orthodontics",
            description: "Straighten your teeth with modern braces and clear aligners for a perfect alignment."
        }
    ];

    return (
        <section id="services" className="section-padding bg-[var(--white)]">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-dark)]">Our Services</h2>
                    <p className="text-[var(--text-light)] text-lg">
                        We provide a wide range of dental treatments tailored to your individual needs in a comfortable environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};
