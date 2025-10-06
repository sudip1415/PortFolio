import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white px-8 md:px-20 py-16 space-y-10 md:space-y-0 md:space-x-20"
            style={{ width: '100vw' }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 flex justify-center"
                style={{ perspective: 1200 }}
            >
                <motion.img
                    src="https://img.freepik.com/premium-vector/software-development-programming-language-coding_284092-33.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Software development illustration"
                    className="w-60 sm:w-64 md:w-72 rounded-xl shadow-xl object-cover"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                        rotateZ: [0, 360],
                        skewX: [0, 15, -15, 15, -15, 0],
                        skewY: [0, 15, -15, 15, -15, 0],
                        skewZ: [0, 10, -10, 10, -10, 0],
                        scale: [1, 0.95, 1.05, 1],
                    }}
                    transition={{
                        rotateX: { repeat: Infinity, duration: 15, ease: 'linear' },
                        rotateY: { repeat: Infinity, duration: 18, ease: 'linear' },
                        rotateZ: { repeat: Infinity, duration: 20, ease: 'linear' },
                        skewX: { repeat: Infinity, duration: 12, ease: 'easeInOut', repeatType: 'mirror' },
                        skewY: { repeat: Infinity, duration: 14, ease: 'easeInOut', repeatType: 'mirror' },
                        skewZ: { repeat: Infinity, duration: 10, ease: 'easeInOut', repeatType: 'mirror' },
                        scale: { repeat: Infinity, duration: 8, ease: 'easeInOut', repeatType: 'mirror' },
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        skewX: 0,
                        skewY: 0,
                        skewZ: 0,
                        boxShadow: '0 30px 50px rgba(79, 70, 229, 0.4)',
                        transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 0.98 }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 flex flex-col justify-center space-y-6"
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
                    className="flex space-x-6 justify-center md:justify-start"
                >
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition font-semibold shadow-md hover:shadow-indigo-900/30"
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
            </motion.div>
        </motion.section>
    );
}
