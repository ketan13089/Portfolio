import React from 'react';
import { motion } from 'framer-motion';
import { FaReact,FaPython,FaJava,FaCss3Alt    } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandThreejs } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";



import {FileCode2} from 'lucide-react';

const getSkillIcon = (skill) => {
    switch (skill.toLowerCase()) {
        case 'react':
            return FaReact;
        case 'javascript':
            return IoLogoJavascript ;
        case 'tailwind css':
            return RiTailwindCssFill;
        case 'python':
            return FaPython ;
        case 'three.js':
            return TbBrandThreejs ;
        case 'java':
            return FaJava ;
        case 'spring boot':
            return SiSpringboot;
        case 'css':
            return FaCss3Alt;
        default:
            return FileCode2;
    }
};

const SkillCard = ({ skill, proficiency }) => {
    const Icon = getSkillIcon(skill);
    
    return (
        <motion.div 
            className="relative w-full max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.09 }}
        >
            <div className="relative rounded-lg p-6 bg-gradient-to-br from-[#24243e] to-[#302b63] shadow-lg">
                <div className="flex flex-col items-center space-y-4">
    
                    <Icon className="w-8 h-8 text-indigo-300" />
                    
                    <h3 className="text-lg font-semibold text-white">
                        {skill}
                    </h3>

                    <p className="text-sm text-indigo-200">
                        {proficiency}
                    </p>


                    <div className="w-full h-1 bg-[#0f0c29] rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-indigo-400"
                            initial={{ width: 0 }}
                            whileInView={{ 
                                width: proficiency === 'Advanced' ? '85%' : 
                                       proficiency === 'Intermediate' ? '60%' : '30%' 
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skills = [
        { skill: 'Java', proficiency: 'Advanced' },
        { skill: 'React', proficiency: 'Advanced' },
        { skill: 'Python', proficiency: 'Intermediate' },
        { skill: 'HTML', proficiency: 'Advanced' },
        { skill: 'CSS', proficiency: 'Advanced' },
        { skill: 'JavaScript', proficiency: 'Advanced' },
        { skill: 'Tailwind CSS', proficiency: 'Intermediate' },
        { skill: 'Spring Boot', proficiency: 'Beginner' }
        
    ];

    return (
        <section id="skills" className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-white">
                        <span className="animate-project">S</span>
                        <span className="animate-project">k</span>
                        <span className="animate-project">i</span>
                        <span className="animate-project">l</span>
                        <span className="animate-project">l</span>
                        <span className="animate-project">s</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
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