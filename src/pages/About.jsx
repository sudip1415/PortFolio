import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-900 text-white px-8 md:px-20 py-16 flex flex-col justify-center"
            style={{ width: '100vw' }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-extrabold mb-12 text-indigo-400 text-center md:text-left"
            >
                About Me
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-between gap-12">
                <motion.div
                    className="md:w-1/2 space-y-6 text-lg text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p>
                        I am an <strong className="text-indigo-400 font-semibold">💡 Innovative</strong> and <strong className="text-indigo-400 font-semibold">🚀 results-driven</strong> full-stack developer specializing in building <strong className="text-indigo-400 font-semibold">⚙️ scalable solutions</strong> using <em>Java</em>, <em>React</em>, and modern technologies.
                    </p>
                    <p>
                        With experience in <strong className="text-indigo-400 font-semibold">⚡ Agile development</strong> and <strong className="text-indigo-400 font-semibold">🛠️ performance optimization</strong>, I deliver applications optimized for <strong className="text-indigo-400 font-semibold">⚡ speed</strong> and <strong className="text-indigo-400 font-semibold">🎯 user-centered design</strong>.
                    </p>
                    <p>
                        I thrive in <strong className="text-indigo-400 font-semibold">🤝 collaborative environments</strong>, constantly learning and sharing knowledge to push the boundaries of software.
                    </p>
                    <p>
                        Passionate about solving complex problems, I implement solutions with <strong className="text-indigo-400 font-semibold">✨ clean, maintainable code</strong> and a focus on <strong className="text-indigo-400 font-semibold">📈 business impact</strong>.
                    </p>
                </motion.div>

                <motion.div
                    className="md:w-1/3 bg-indigo-800 bg-opacity-30 p-8 rounded-lg flex flex-col justify-center items-center text-center text-indigo-100 font-bold text-xl tracking-widest shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="mb-4">💡 Innovative</p>
                    <p className="mb-4">⚙️ Scalable Solutions</p>
                    <p className="mb-4">⚡ Agile Development</p>
                    <p className="mb-4">🛠️ Performance Optimized</p>
                    <p className="mb-4">🤝 Collaborative</p>
                    <p>🎯 Problem Solver</p>
                </motion.div>
            </div>
        </motion.section>
    );
}
