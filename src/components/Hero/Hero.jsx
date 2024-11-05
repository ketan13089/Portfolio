import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className='h-screen pt-32 pb-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 relative'>

            <div className='absolute inset-0 bg-cover bg-center z-0' style={{ backgroundImage: 'url("/hero-background.jpg")' }} />

            <div className='max-w-7xl mx-auto text-center relative z-10'>
                <motion.h1
                    className='text-5xl font-bold text-gray-900 mb-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    Full Stack Developer
                </motion.h1>

                <motion.p
                    className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'
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
                    <a href="#contact" className="bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-3xl hover:bg-indigo-600">
                        Contact
                    </a>
                    <a href="#projects" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg border border-blue-600 transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105 active:scale-100 focus:ring-2 focus:ring-blue-300">
                        Projects
                    </a>
                </motion.div>
            </div>

            {/* Summary Section */}
            <div className='max-w-4xl mx-auto text-center mt-20 relative z-10'>
                <motion.h2
                    className='text-3xl font-semibold text-gray-900 mb-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    Java Developer
                </motion.h2>

                <motion.p
                    className='text-lg text-gray-700 mb-6 max-w-3xl mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0,color:'#6054e8'}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                   As a fresh graduate, I’m eager to leverage my skills in React, Java, Python, and Spring Boot to build efficient applications. I’m passionate about writing clean code, solving problems, and continuously learning in a collaborative environment.
                </motion.p>

                <motion.p
                    className='text-lg text-gray-700'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                >
                    Let’s build something amazing together!
                </motion.p>
            </div>

            {/* Social Media Links */}
            <div className='absolute bottom-10 left-4 flex items-center space-x-4 text-2xl'>
                <a href="https://www.linkedin.com/in/ketan-ghumare/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in text-gray-600 hover:text-indigo-500 transition-colors duration-300"></i>
                </a>
                <a href="https://github.com/ketan13089" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github text-gray-600 hover:text-indigo-500 transition-colors duration-300"></i>
                </a>
                <a href="https://x.com/ketan_ghumare" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-x-twitter text-gray-600 hover:text-indigo-500 transition-colors duration-300"></i>
                </a>
            </div>
        </section>
    );
}
