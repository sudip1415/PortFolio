import React from 'react';

export default function CodingEarth() {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-indigo-700 via-purple-900 to-pink-700 shadow-xl backdrop-blur-lg hover:shadow-cyan-500 hover:scale-105 transform transition duration-500 cursor-pointer select-none overflow-hidden">
            {/* Rotating globe */}
            <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Outer circle */}
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="rgba(255 255 255 / 0.4)"
                    strokeWidth="4"
                />

                {/* Latitude lines */}
                <circle cx="100" cy="100" r="70" stroke="rgba(255 255 255 / 0.2)" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="40" stroke="rgba(255 255 255 / 0.2)" strokeWidth="1" />

                {/* Longitude lines */}
                <path stroke="rgba(255 255 255 / 0.3)" strokeWidth="1" d="M100 10v180" />
                <path stroke="rgba(255 255 255 / 0.3)" strokeWidth="1" d="M60 25a100 100 0 0 0 80 150" />
                <path stroke="rgba(255 255 255 / 0.3)" strokeWidth="1" d="M140 175a100 100 0 0 0 -80 -150" />

                {/* Code brackets */}
                <text
                    x="50"
                    y="110"
                    fill="rgba(255 255 255 / 0.6)"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="monospace"
                >
                    {'{'}
                </text>
                <text
                    x="140"
                    y="110"
                    fill="rgba(255 255 255 / 0.6)"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="monospace"
                >
                    {'}'}
                </text>

                {/* Connecting nodes */}
                <circle cx="100" cy="40" r="5" fill="rgba(255 255 255 / 0.9)" className="pulse" />
                <circle cx="60" cy="120" r="5" fill="rgba(255 255 255 / 0.8)" className="pulse delay-200" />
                <circle cx="140" cy="130" r="5" fill="rgba(255 255 255 / 0.8)" className="pulse delay-400" />

                <line x1="100" y1="40" x2="60" y2="120" stroke="rgba(255 255 255 / 0.5)" strokeWidth="1" />
                <line x1="100" y1="40" x2="140" y2="130" stroke="rgba(255 255 255 / 0.5)" strokeWidth="1" />
                <line x1="60" y1="120" x2="140" y2="130" stroke="rgba(255 255 255 / 0.5)" strokeWidth="1" />
            </svg>
        </div>
    );
}
