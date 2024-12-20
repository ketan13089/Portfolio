import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

import {
    Github,
    Linkedin,
    Twitter,
} from 'lucide-react';

export default function Hero() {
    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['<i>Let’s <strong>build</strong> something amazing together!<i>',],
            typeSpeed: 50,
            startDelaydelay: 2000,
            backDelay: 1000,
            backSpeed: 40,
            loop: true
        });

        // Cleanup
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className='h-screen pt-32 pb-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 relative'>
            <div className='absolute bgforall inset-0 bg-cover bg-center z-0' />

            <div className='max-w-7xl mx-auto text-center relative z-10'>
                <motion.h1
                    className='text-5xl font-bold text-gray-300 mb-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <h1 className="text-4xl font-bold text-white my-5">
                        <span className="animate-project">F</span>
                        <span className="animate-project">u</span>
                        <span className="animate-project">l</span>
                        <span className="animate-project mr-3">l</span>
                        <span className="animate-project">S</span>
                        <span className="animate-project">t</span>
                        <span className="animate-project">a</span>
                        <span className="animate-project">c</span>
                        <span className="animate-project mr-3">k</span>
                        <span className="animate-project">D</span>
                        <span className="animate-project">e</span>
                        <span className="animate-project">v</span>
                        <span className="animate-project">l</span>
                        <span className="animate-project">o</span>
                        <span className="animate-project">p</span>
                        <span className="animate-project">e</span>
                        <span className="animate-project">r</span>
                    </h1>
                </motion.h1>

                <motion.p
                    className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                >
                    I Love to Code in Java <i className="fab fa-java text-blue-600 text-4xl"></i>
                </motion.p>

                <motion.div
                    className='flex justify-center space-x-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link to="/contact" className="hero-btn text-white font-semibold py-3 px-6 transform transition-all duration-500 ease-in-out 
                    hover:scale-105 
                    hover:shadow-lg 
                    ">
                        <span>Contact</span>
                    </Link>
                    <Link to="/projects" className="btn-rev text-white font-semibold py-3 px-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-indigo-100 hover:text-white">
                        <span>Projects</span>
                    </Link>
                </motion.div>
            </div>

            {/* Summary */}
            <div className='max-w-4xl mx-auto text-center mt-20 relative z-10'>
                <motion.h2
                    className='text-3xl font-semibold text-gray-300 mb-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <h2 className='javaText text-4xl font-bold text-white my-5'>


                        <span className="javaD">J</span>
                        <span className="javaD">a</span>
                        <span className="javaD">v</span>
                        <span className="javaD mr-3">a</span>

                        <span className="javaD">D</span>
                        <span className="javaD">e</span>
                        <span className="javaD">v</span>
                        <span className="javaD">e</span>
                        <span className="javaD">l</span>
                        <span className="javaD">o</span>
                        <span className="javaD">p</span>
                        <span className="javaD">e</span>
                        <span className="javaD">r</span>


                    </h2>
                </motion.h2>

                <motion.p
                    className='text-lg text-gray-400 mb-6 max-w-3xl mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    I'm currently pursuing a BE in Information Technology with skills in React, Java, Python, and Spring Boot. I focus on writing clean, scalable code and enjoy solving complex problems. Driven by continuous learning, I thrive in collaborative environments.
                </motion.p>

                <motion.p
                    className='text-lg text-purple-200 build'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                >
                    <span id="element"></span>
                </motion.p>
            </div>

            {/* Social Media Links */}
            <div className='absolute bottom-10 left-4 flex items-center space-x-4 text-2xl'>
                <div className="flex space-x-6 mt-8">
                    {[
                        { Icon: Github, href: 'https://github.com/ketan13089', label: 'GitHub' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/ketan-ghumare/', label: 'LinkedIn' },
                        { Icon: Twitter, href: 'https://x.com/ketan_ghumare', label: 'Twitter' }
                    ].map(({ Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            className="transform hover:scale-105 text-indigo-300 hover:text-indigo-100 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}


