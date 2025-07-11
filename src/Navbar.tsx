import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
    ];

    return (
        <nav className="text-white w-full shadow-lg fixed top-0 left-0 z-50 shadow">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-xl font-blod">OskarSwiatek.dev</div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                      <a key={link.name}
                         href={link.href}
                         className="font-bold hover:text-white/60 transition duration-300"
                      >
                          {link.name}
                      </a>
                    ))}

                    <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 10 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
                    {navLinks.map((link) => (
                        <a  key={link.name}
                            href={link.href}
                            className="block hover:text-indigo-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}