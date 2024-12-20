import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
    Github,
    Linkedin,
    Twitter,
} from 'lucide-react';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lsru1yb', 'template_gjh6vke', form.current, '_0cFm_wv9AC9EjY66')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });

        e.target.reset();
    };

    return (
        <section id="contact" className='h-screen pt-32 pb-20 px-4 bgforall relative'>

            <div className='absolute inset-0 bg-cover bg-center z-0' />

            <div className='max-w-7xl mx-auto text-center relative z-10'>
                <motion.h1
                    className='text-5xl font-bold text-gray-300 mb-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className="animate-project">G</span>
                    <span className="animate-project">e</span>
                    <span className="animate-project mr-3">t</span>
   
                    <span className="animate-project">I</span>
                    <span className="animate-project mr-3">n</span>

                    <span className="animate-project">T</span>
                    <span className="animate-project">o</span>
                    <span className="animate-project">u</span>
                    <span className="animate-project">c</span>
                    <span className="animate-project">h</span>

                </motion.h1>

                <motion.p
                    className='text-xl text-gray-400 mb-8 max-w-2xl mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                >
                    Feel free to reach out for collaborations.
                </motion.p>

                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className='max-w-xl mx-auto space-y-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div>
                        <input
                            type="text"
                            name="user_name"
                            className="contactform w-full p-4 text-lg border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="user_email"
                            className="contactform w-full p-4 text-lg border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows="4"
                            className="contactform w-full p-4 text-lg border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <motion.button
                            type="submit"
                            className="hero-btn py-3 px-6 bg-gradient-to-r from-purple-300 to-indigo-500 text-white font-semibold rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-indigo-600 hover:text-white-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                           <span>Send</span>
                        </motion.button>
                    </div>
                </motion.form>
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
