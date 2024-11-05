import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' }, // Updated to use path
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.nav
            className={`fixed w-screen z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="w-screen bg-gray-300 rounded-b-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
                        <span className="text-lg text-white border-2 border-gray-700 px-1.5 py-0.25 bg-gray-700 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 shadow-md">
                            K
                        </span>
                        <span className="text-xl text-red-600 font-bold transition-all duration-300 ease-in-out hover:text-red-800 px-0.25">
                            G
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                {item.path ? (
                                    <Link to={item.path} className="text-gray-700 hover:text-red-600 transition-colors">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a href={item.href} className="text-gray-700 hover:text-red-600 transition-colors">
                                        {item.name}
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 transition-colors">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item) => (
                                <motion.div key={item.name} whileHover={{ x: 10 }}>
                                    {item.path ? (
                                        <Link to={item.path} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" onClick={() => setIsMenuOpen(false)}>
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a href={item.href} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" onClick={() => setIsMenuOpen(false)}>
                                            {item.name}
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
