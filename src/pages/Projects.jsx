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
        githubUrl: 'https://github.com/your-username/portfolio-website',
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

const baseBgColors = ['rgb(55, 48, 163)', 'rgb(109, 40, 217)', 'rgb(99, 102, 241)'];
const hoverBgColors = ['rgb(94, 192, 255)', 'rgb(168, 85, 247)', 'rgb(99, 179, 255)'];

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-900 text-white px-8 md:px-20 py-16"
            style={{ width: '100vw' }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-extrabold mb-12 text-indigo-400 text-center md:text-left"
            >
                My Projects
            </motion.h2>
            <ul className="max-w-5xl mx-auto space-y-8">
                {projects.map(({ name, technologies, githubUrl }, i) => (
                    <motion.li
                        key={name}
                        initial={{ opacity: 0, translateX: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.4 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 25px rgb(0, 0, 0)',
                            backgroundColor: hoverBgColors[i % hoverBgColors.length],
                            transition: { duration: 0.3 },
                        }}
                        className="p-6 rounded-xl shadow-lg backdrop-blur-sm cursor-pointer transition-colors duration-300"
                        style={{
                            backgroundColor: baseBgColors[i % baseBgColors.length],
                            fontSize: '0.9rem',
                            color: 'white',
                        }}
                    >
                        <h3 className="font-extrabold text-2xl mb-2">{name}</h3>
                        <p className="mb-4 text-gray-200">
                            <strong>Technologies:</strong> {technologies.join(', ')}
                        </p>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-cyan-300 transition-colors"
                        >
                            View on GitHub
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
}
