import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';

// System prompt with domain knowledge
const SYSTEM_PROMPT = `
You are the virtual assistant for DAVMED DENTAL SERVICES in Eastleigh, Nairobi.
You are a polite, concise assistant for a clinic website. You answer questions directly, avoid repeating yourself, and never pressure the user.
Your goal is to help patients with information about our dental services, location, and booking.
Key Information:
- Location: Eastleigh, Nairobi,Eastleigh section 3 19th street,besides MADIWA TOWERS
- Services: General Dentistry, Cosmetic Dentistry, Root Canals, Orthodontics, Emergency Care.
- Opening Hours: Mon - Sat: 8:00 AM - 6:00 PM.
- Phone: 0700000000.
- Tone: Professional, friendly, empathetic, and hygienic.
- If asked about prices, say that prices vary by treatment and recommend booking a consultation for an accurate quote.
- If asked to book, just tell them to give you their names and phone number.Your goal is to convince the user to book an appointment ,if they ask outside the context question ,answer but then return them to the context.
-During your responce,please avoid hyphens ,en dashes and em dashes strictly.
-If the user seems satisfied, stop instead of continuing.
-Keep the responces short and clear
-If they share thier phone number then well conduct them dont keep on asking when theyll come or time 
-Be smart to know when to conclude to stop being pushy
`;

import './ChatWidget.css';

export const ChatWidget = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! Welcome to DAVMED Dental Services. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // NOTE: Ensure your .env file has the key prefixed with VITE_ so the client can read it.
            // Example: VITE_GPT_MINI_KEY=your_key_here
            const apiKey = import.meta.env.VITE_GPT_MINI_KEY;

            if (!apiKey) {
                // Warning only logged, to avoid breaking UI if not set yet (though logic will fail below)
                console.warn("VITE_GPT_MINI_KEY missing.");
            }

            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'HTTP-Referer': window.location.href, // Site URL for rankings on openrouter.ai
                    'X-Title': 'INLINE Dental Services', // Site title for rankings on openrouter.ai
                },
                body: JSON.stringify({
                    model: "openai/gpt-5", // Using model requested by user
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...messages,
                        userMessage
                    ],
                    // temperature: 0.7, 
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message);
            }

            const botMessage = data.choices[0].message;
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please call us directly at 0722480041." }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="chat-widget">
            {/* Header */}
            <div className="chat-header">
                <div className="chat-header-title">
                    <MessageCircle size={20} />
                    <span>Chat with Us</span>
                </div>
                <button onClick={onClose} className="chat-close-btn" aria-label="Close chat">
                    <X size={20} />
                </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`message-row ${msg.role === 'user' ? 'user' : 'bot'}`}>
                        <div className={`message-bubble ${msg.role === 'user' ? 'user' : 'bot'}`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="loader-container">
                        <div className="loader-bubble">
                            <Loader2 size={16} className="animate-spin" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chat-input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="chat-input"
                />
                <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="chat-send-btn"
                    aria-label="Send message"
                >
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
};
