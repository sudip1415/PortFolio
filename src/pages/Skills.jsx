import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Java', percent: 90, level: 'advanced' },
    { name: 'Spring Boot', percent: 75, level: 'intermediate' },
    { name: 'React', percent: 85, level: 'advanced' },
    { name: 'JavaScript', percent: 70, level: 'intermediate' },
    { name: 'Tailwind CSS', percent: 60, level: 'basic' },
    { name: 'HTML & CSS', percent: 95, level: 'advanced' },
    { name: 'SQL & Databases', percent: 65, level: 'basic' },
    { name: 'Git & GitHub', percent: 80, level: 'intermediate' },
    { name: 'RESTful APIs', percent: 55, level: 'basic' },
    { name: 'JWT Authentication', percent: 45, level: 'basic' },
];

const levelColors = {
    basic: 'bg-yellow-400',
    intermediate: 'bg-red-500',
    advanced: 'bg-blue-600',
};

export default function Skills() {
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
                My Skills
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {skills.map(({ name, percent, level }) => (
                    <motion.div
                        key={name}
                        whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(168, 85, 247, 0.6)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-lg p-4 shadow-md cursor-pointer"
                    >
                        <span className="font-semibold text-base mb-2">{name}</span>
                        <div className="w-full h-3 bg-gray-700 rounded relative overflow-hidden flex items-center px-2">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percent}%` }}
                                transition={{ duration: 3 }}
                                className={`${levelColors[level]} h-full rounded`}
                            />
                            <span className="ml-2 text-xs text-white select-none pointer-events-none">
                                {percent}%
                            </span>
                        </div>
                        <small className="mt-1 text-xs capitalize select-none text-gray-300">{level}</small>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
