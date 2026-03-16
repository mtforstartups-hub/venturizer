"use client"

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
    { label: 'About', href: '#values' },
    { label: 'Solutions', href: '#solution' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Ecosystem', href: '#ecosystem' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
                <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo Placeholder */}
                    {/* <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            V
                        </div>
                        <span className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}>Venture<span className="text-red-500">Scale</span></span>
                    </div> */}
                    <Image src={isScrolled ? '/logo.png' : '/logo-inverted.png'} alt="Logo" width={160} height={40} />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="#contact" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-gray-500" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden py-4 px-6 flex flex-col space-y-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-gray-800 font-medium py-2 border-b border-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="#contact" className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium w-full">
                            Contact Us
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}