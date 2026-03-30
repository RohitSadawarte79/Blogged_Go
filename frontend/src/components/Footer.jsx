import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#111111] text-[#a3a3a3] py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm tracking-widest mt-auto z-10 relative">
            {/* Left side */}
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="text-[#cc0000] font-bold text-sm sm:text-base">BLOGGED</span>
                <span>© {new Date().getFullYear()}</span>
            </div>

            {/* Middle Links */}
            <div className="flex items-center gap-6 mb-4 md:mb-0 uppercase font-sans">
                <a href="#" className="hover:text-white transition-colors duration-200">Archive</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
                {/* Terminal Icon */}
                <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Terminal">
                    <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                        <polyline points="6 9 10 12 6 15" />
                        <line x1="13" x2="18" y1="15" y2="15" />
                    </svg>
                </a>
                {/* RSS Icon */}
                <a href="#" className="hover:text-white transition-colors duration-200" aria-label="RSS Feed">
                    <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 11a9 9 0 0 1 9 9" />
                        <path d="M4 4a16 16 0 0 1 16 16" />
                        <circle cx="5" cy="19" r="1" />
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
