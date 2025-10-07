import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'Real Chat App',
        technologies: ['React', 'Node.js', 'Socket.io', 'Spring Boot', 'WebSocket', 'JWT', 'MongoDB', 'BootStrap'],
        githubUrl: 'https://github.com/sudip1415/ChatApp',
    },
    {
        name: 'Expense Tracker',
        technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'React'],
        githubUrl: 'https://github.com/sudip1415/expenseTracker',
    },
    {
        name: 'Portfolio Website',
        technologies: ['React', 'Tailwind CSS', 'Vite'],
        githubUrl: 'https://github.com/sudip1415/PortFolio',
    },
    {
        name: 'Task Manager',
        technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
        githubUrl: 'https://github.com/sudip1415/TaskManager',
    },
    {
        name: 'Calculator',
        technologies: ['JavaScript', 'Html', 'CSS'],
        githubUrl: 'https://github.com/sudip1415/Calculator',
    },
    {
        name: 'Weather App',
        technologies: ['React', 'API Integration', 'Tailwind CSS'],
        githubUrl: 'https://github.com/sudip1415/WeatherApp',
    }
];

const baseBgColors = ['#2f2c57', '#3c3578', '#474086'];  // Dark blues and purples closer to background
const hoverBgColors = ['#5e88ff', '#a855f7', '#6374ff']; // Bright but harmonious blue/purple for hover

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 md:px-20 py-16 w-full box-border"
        >
            <div className="max-w-6xl mx-auto w-full box-border">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-extrabold mb-12 text-indigo-400 text-center md:text-left"
                >
                    My Projects
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map(({ name, technologies, githubUrl }, i) => (
                        <motion.a
                            key={name}
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, translateY: 20, translateX: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: `0 12px 30px ${hoverBgColors[i % hoverBgColors.length]}66`,
                                backdropFilter: 'blur(10px)',
                                backgroundColor: hoverBgColors[i % hoverBgColors.length],
                                transition: { duration: 0.28 },
                            }}
                            className="flex flex-col p-6 rounded-xl shadow-lg bg-opacity-40 cursor-pointer hover:text-white transition-colors duration-300 w-full box-border"
                            style={{
                                backgroundImage: `linear-gradient(135deg, ${baseBgColors[i % baseBgColors.length]} 0%, rgba(0,0,0,0.0) 100%)`,
                                fontSize: '0.95rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            <h3 className="font-extrabold text-2xl mb-3">{name}</h3>
                            <p className="mb-5 text-gray-300">
                                <strong>Technologies:</strong> {technologies.join(', ')}
                            </p>
                            <span className="underline hover:text-cyan-300">View on GitHub</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
