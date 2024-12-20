import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectCard = ({ title, description, technologies, image, link, github }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#24243e] to-[#302b63] rounded-lg shadow-sm overflow-hidden projectCard "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >


      <div className="relative">
        <img
          src={image || "/api/placeholder/400/200"}
          alt={title}
          className="w-full h-48 object-cover tilt"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 hover:opacity-100 " />
      </div>



      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-500 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-indigo-600 bg-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-yellow-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faLink} size="1x" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-900 hover:text-yellow-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "VoxFox",
      description: "Transcription React app",
      technologies: ["React"],
      image: "voxfox.png",
      link: "https://voxfox.netlify.app/",
      github: "https://github.com/ketan13089/VoxFox"
    },
    {
      title: "CriCatalyst",
      description: "Cricket analysis python app",
      technologies: ["Python", "Tkinter"],
      image: "Cricatalyst.png",
      link: "#",
      github: "https://github.com/ketan13089/CricCatalyst"
    },
    {
      title: "PeerStation",
      description: "A platform to connect with peers and solve and ask problems",
      technologies: ["React", "Python", "TailwindCss"],
      image: "peerstation.png",
      link: "#",
      github: "https://github.com/ketan13089/peerstation"
    },

  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bgforall">
      <div className="h-full max-w-7xl mx-auto ">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 my-5">
            <span className="animate-project">P</span>
            <span className="animate-project">r</span>
            <span className="animate-project">o</span>
            <span className="animate-project">j</span>
            <span className="animate-project">e</span>
            <span className="animate-project">c</span>
            <span className="animate-project">t</span>
            <span className="animate-project">s</span>
          </h1>
        </motion.div>

        <motion.div
          className="project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;