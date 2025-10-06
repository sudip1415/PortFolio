import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${form.name}! Your message has been received.`);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-900 text-white px-8 md:px-20 py-16 flex justify-center items-center"
            style={{ width: '100vw' }}
        >
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bg-gray-800 p-8 rounded-lg max-w-lg w-full shadow"
            >
                <h2 className="text-3xl font-extrabold mb-6 text-indigo-400 text-center">Contact Me</h2>
                <label className="block mb-4">
                    <span className="text-sm mb-1 block text-gray-300">Name</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500 text-gray-200"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-sm mb-1 block text-gray-300">Email</span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500 text-gray-200"
                    />
                </label>
                <label className="block mb-6">
                    <span className="text-sm mb-1 block text-gray-300">Message</span>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500 text-gray-200"
                    ></textarea>
                </label>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 py-3 rounded hover:bg-indigo-700 transition font-semibold"
                >
                    Send Message
                </button>
            </motion.form>
        </motion.section>
    );
}

