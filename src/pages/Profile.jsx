import React from 'react';
import { motion } from 'framer-motion';

export default function Profile() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-900 text-white px-8 md:px-20 py-16 flex flex-col items-center"
            style={{ width: '100vw', paddingTop: '5rem' }}
        >
            <motion.img
                src="/src/assets/profile.webp"
                alt="Profile"
                initial={{ filter: 'blur(12px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full mb-8 shadow-lg object-cover"
            />

            <motion.h1
                initial={{ filter: 'blur(8px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.3, ease: 'easeOut' }}
                className="text-5xl font-extrabold mb-2 text-indigo-400 text-center"
            >
                Sudip Nagane
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-2xl text-indigo-400 mb-6 text-center"
            >
                Full-Stack Developer
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.7 }}
                className="max-w-xl text-center text-gray-300 px-4 md:px-0 text-lg leading-relaxed"
            >
                Passionate developer with experience building modern web applications using React, Java, Spring Boot, and more. Dedicated to clean, maintainable code and solving challenging problems with scalable solutions.
            </motion.p>
        </motion.section>
    );
}
