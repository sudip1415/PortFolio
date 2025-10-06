import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-8 md:px-20 py-16 space-y-10"
            style={{ width: '100vw' }}
        >
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-extrabold text-indigo-400 text-center md:text-left"
            >
                Welcome to My Portfolio
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg max-w-xl text-gray-300 text-center md:text-left"
            >
                Hi, I'm Sudip Nagane, a passionate full-stack developer specializing in modern web development with React, Java, and more. Explore my projects and skills below!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="flex space-x-6"
            >
                <button
                    onClick={() => navigate('/projects')}
                    className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition font-semibold"
                >
                    View Projects
                </button>
                <button
                    onClick={() => navigate('/contact')}
                    className="px-6 py-3 border border-indigo-600 rounded hover:bg-indigo-700 hover:text-white transition font-semibold"
                >
                    Contact Me
                </button>
            </motion.div>
        </motion.section>
    );
}
