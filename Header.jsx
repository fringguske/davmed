import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { ChatWidget } from './ChatWidget';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
                {/* Top Bar */}
                <div className="bg-[var(--primary)] text-white py-2 text-sm hidden md:block">
                    <div className="container flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone size={14} />
                                <span>+254 700 000 000</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin size={14} />
                                <span>Eastleigh, Nairobi</span>
                            </div>
                        </div>
                        <div>
                            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="container py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-[var(--primary)] tracking-tight">
                                DAVMED <span className="text-[var(--text-dark)]">DENTAL</span>
                            </h1>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="hover:text-[var(--primary)] font-medium">Home</a>
                            <a href="#about" className="hover:text-[var(--primary)] font-medium">About</a>
                            <a href="#services" className="hover:text-[var(--primary)] font-medium">Services</a>
                            <a href="#contact" className="hover:text-[var(--primary)] font-medium">Contact</a>

                            <button
                                onClick={() => setIsChatOpen(!isChatOpen)}
                                className="flex items-center space-x-1 text-[var(--text-dark)] hover:text-[var(--primary)] font-medium transition-colors"
                            >
                                <MessageCircle size={20} />
                                <span>Chat</span>
                            </button>

                            <Button variant="accent" size="sm">Book Appointment</Button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-lg">
                        <nav className="flex flex-col space-y-4">
                            <a href="#home" className="block py-2 hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>Home</a>
                            <a href="#about" className="block py-2 hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>About</a>
                            <a href="#services" className="block py-2 hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>Services</a>
                            <a href="#contact" className="block py-2 hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>Contact</a>
                            <button
                                onClick={() => { setIsChatOpen(true); setIsOpen(false); }}
                                className="flex items-center space-x-2 py-2 w-full text-left hover:text-[var(--primary)]"
                            >
                                <MessageCircle size={18} />
                                <span>Chat with Us</span>
                            </button>
                            <Button variant="accent" className="w-full">Book Appointment</Button>
                        </nav>
                    </div>
                )}
            </header>

            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
    );
};
