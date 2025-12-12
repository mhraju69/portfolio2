import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './Testimonial.css';

const TESTIMONIALS = [
    {
        id: 1,
        rating: 5,
        quote:
            "The smart contract architecture they built for our DeFi protocol was bulletproof. Gas optimization was top-tier, saving our users over 30% in transaction fees.",
        name: "Alex Rivera",
        role: "CTO",
        company: "Nexus Finance",
        avatarUrl: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
    },
    {
        id: 2,
        rating: 5,
        quote:
            "Bridging the gap between complex blockchain logic and a seamless UI is rare. They delivered a dApp experience that feels as smooth as Web2.",
        name: "Elena Zhang",
        role: "Product Lead",
        company: "EtherScale",
        avatarUrl: "https://images.pexels.com/photos/33577256/pexels-photo-33577256.jpeg",
    },
    {
        id: 3,
        rating: 5,
        quote:
            "Instrumental in launching our NFT marketplace. Their deep understanding of the ERC-721 standard and IPFS integration ensured a flawless minting day.",
        name: "Marcus Thorne",
        role: "Founder",
        company: "PixelVault",
        avatarUrl: "https://images.pexels.com/photos/1235522/pexels-photo-1235522.jpeg",
    },
    {
        id: 4,
        rating: 5,
        quote:
            "A true expert in Solidity security patterns. The audit feedback was actionable and precise, helping us secure $5M TVL within the first week.",
        name: "Sarah Jenkins",
        role: "Lead Developer",
        company: "ChainGuardians",
        avatarUrl: "https://images.pexels.com/photos/20718288/pexels-photo-20718288.jpeg",
    }
];

export default function TestimonialSlider({ id }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
        );
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section id={id} className=" bg-black flex flex-col items-center justify-center px-4">
            <div className="text-center mb-16 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Feedbacks</h2>
                <p className="text-neutral-400 text-lg">
                    Don't just take my word for it. Here's what industry leaders have to say about working with me.
                </p>
            </div>

            <div className="max-w-[1200px] w-full bg-neutral-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-[600px]">

                    {/* Left Side - Dynamic Content */}
                    <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative">
                        <div key={currentIndex} className="space-y-8 max-w-xl animate-fade-in-up">

                            {/* Stars */}
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < currentTestimonial.rating
                                            ? "fill-amber-400 text-amber-400"
                                            : "fill-neutral-700 text-neutral-700"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight">
                                {currentTestimonial.quote}
                            </h2>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={currentTestimonial.avatarUrl}
                                        alt={currentTestimonial.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-neutral-800 shadow-sm"
                                    />
                                    <div>
                                        <div className="font-semibold text-white text-lg">
                                            {currentTestimonial.name}
                                        </div>
                                        <div className="text-neutral-400 text-sm">
                                            {currentTestimonial.role}, {currentTestimonial.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={handlePrevious}
                                        className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 group active:scale-95 duration-200"
                                        aria-label="Previous testimonial"
                                    >
                                        <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 group active:scale-95 duration-200"
                                        aria-label="Next testimonial"
                                    >
                                        <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image Collage */}
                    <div className="hidden lg:block flex-1 bg-black p-8 lg:p-12 overflow-hidden">
                        <div className="h-full w-full grid grid-cols-2 gap-6 content-center">
                            {/* Column 1 - Staggered Up */}
                            <div className="flex flex-col gap-6 -mt-12">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 w-full transform hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg" alt="Architecture" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 w-full transform hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.pexels.com/photos/33577256/pexels-photo-33577256.jpeg" alt="Workspace" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Column 2 - Staggered Down */}
                            <div className="flex flex-col gap-6 mt-12">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 w-full transform hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.pexels.com/photos/1235522/pexels-photo-1235522.jpeg" alt="Meeting" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 w-full transform hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.pexels.com/photos/20718288/pexels-photo-20718288.jpeg" alt="Modern Office" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}