import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0b0c1a] text-gray-300 py-10 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                {/* About Me */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Sudip Nagane</h3>
                    <p>
                        Full-stack developer specializing in building scalable solutions using Java, React, and modern technologies. Passionate about clean, maintainable code, agile development, and always focused on impactful, user-centered web applications.
                    </p>
                </div>

                {/* Quick Links (grid within grid for 2-2-1 horizontal view) */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        <a href="/about" className="hover:text-indigo-500 transition">About Me</a>
                        <a href="/projects" className="hover:text-indigo-500 transition">Projects</a>
                        <a href="/skills" className="hover:text-indigo-500 transition">Skills</a>
                        <a href="/contact" className="hover:text-indigo-500 transition">Contact</a>
                        <a
                            href="https://github.com/sudip1415/portfolio-website/raw/main/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-500 transition col-span-2 flex items-center gap-1"
                        >
                            Resume
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M10 14l2-2 2 2"></path>
                                <path d="M12 12v6"></path>
                                <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Connect */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
                    <div className="grid grid-cols-5 gap-2 text-2xl">
                        <a href="https://github.com/sudip1415" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-500">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/sudip-nagane/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-500">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:sudip07770@gmail.com" aria-label="Email" className="hover:text-indigo-500">
                            <FaEnvelope />
                        </a>
                        <a href="tel:+7350687534" aria-label="Phone" className="hover:text-indigo-500">
                            <FaPhone />
                        </a>
                        <a href="https://wa.me/7350687534" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 mt-6 border-t border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2 items-center text-xs text-gray-500">
                <span>© 2025 Sudip Nagane. All rights reserved.</span>
                <span className="md:text-right">
                    Built with <span className="text-red-500">♥</span> using React &amp; Tailwind CSS.
                </span>
            </div>
        </footer>
    );
}
