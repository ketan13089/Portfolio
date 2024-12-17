import React from 'react';
import { motion } from 'framer-motion';
// import react from '/react.png'

const SkillCard = ({ skill, proficiency, characterImage }) => {
    return (
        <motion.div 
            className="skill-card relative w-full max-w-xs mx-auto group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <div className="skill-card-wrapper" />

            <div className="bg-gradient-to-r from-blue-300 to-indigo-300 rounded-lg shadow-sm p-6 text-center relative overflow-hidden">
                <h3 className="skill-card-title text-xl font-semibold text-gray-900 mb-2">
                    {skill}
                </h3>
        
                {characterImage && (
                    <img 
                        src={characterImage} 
                        alt={`${skill} skill icon`} 
                        className="skill-card-character absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80%] max-h-[80%] object-contain"
                    />
                )}
        
                <p className="text-gray-600 transition-all duration-500">
                    {proficiency}
                </p>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skills = [
        { skill: 'React', proficiency: 'Advanced' },
        { skill: 'JavaScript', proficiency: 'Advanced' },
        { skill: 'Tailwind CSS', proficiency: 'Intermediate' },
        { skill: 'Python', proficiency: 'Intermediate' },
        { skill: 'Three.js', proficiency: 'Beginner' },
        { skill: 'Java', proficiency: 'Advanced' },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="h-screen max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-gray-900 my-5">
                        <span className="animate-project">S</span>
                        <span className="animate-project">k</span>
                        <span className="animate-project">i</span>
                        <span className="animate-project">l</span>
                        <span className="animate-project">l</span>
                        <span className="animate-project">s</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            {...skill}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;