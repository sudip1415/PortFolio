import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Skills', path: '/skills' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Contact', path: '/contact' },
	{ name: 'About', path: '/about' },
];

// Replace the SVG icon with your profile photo
const profileLogo = (
	<img
		src="/src/assets/profile.webp" // Replace with your profile photo URL
		alt="Profile"
		className="w-8 h-8 rounded-full border-2 border-indigo-500 hover:border-white transition"
	/>
);

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth < 768);
			if (window.innerWidth >= 768) setMenuOpen(false);
		}

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 right-0 z-50">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
				<div className="text-lg font-semibold tracking-wider select-none cursor-default">
					Sudip's Portfolio
				</div>
				{/* Desktop Menu */}
				{!isMobile && (
					<ul className="flex space-x-8 items-center">
						{navItems.map(({ name, path }) => (
							<li key={name}>
								<NavLink
									to={path}
									className={({ isActive }) =>
										isActive
											? 'text-indigo-400 border-b-2 border-indigo-400 pb-1 font-semibold text-sm'
											: 'hover:text-indigo-400 text-sm transition'
									}
								>
									{name}
								</NavLink>
							</li>
						))}
						<li>
							<NavLink to="/profile">{profileLogo}</NavLink>
						</li>
					</ul>
				)}

				{/* Mobile Toggle */}
				{isMobile && (
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
						className="focus:outline-none"
					>
						{menuOpen ? (
							<XIcon className="w-7 h-7" />
						) : (
							<MenuIcon className="w-7 h-7" />
						)}
					</button>
				)}
			</div>

			{/* Mobile Menu */}
			{isMobile && menuOpen && (
				<ul className="flex flex-col bg-gray-800 text-white space-y-4 py-4 px-4 border-t border-gray-700">
					{navItems.map(({ name, path }) => (
						<li key={name}>
							<NavLink
								to={path}
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive
										? 'text-indigo-400 font-semibold block'
										: 'hover:text-indigo-400 block transition'
								}
							>
								{name}
							</NavLink>
						</li>
					))}
					<li>
						<NavLink to="/profile" onClick={() => setMenuOpen(false)}>
							{profileLogo}
						</NavLink>
					</li>
				</ul>
			)}
		</nav>
	);
}
