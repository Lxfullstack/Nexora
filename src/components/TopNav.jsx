import logo from '../assets/images/nexoraLogo.svg'
import searchBotton from '../assets/images/searchIcon.svg'
import { useState, useRef } from 'react'




export default function TopNav() {
    const [menuOpen, setMenuOpen] = useState(false)
   

    return (
        <nav className="navbar bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">

                {/* Logo */}
                <a href="#" className="shrink-0">
                    <img src={logo} alt="Nexora Logo" className="h-8" />
                </a>

                {/* Search — hidden on mobile */}
                <div className="hidden lg:flex items-center gap-2 w-72 lg:w-96 border border-neutral-400 px-4 py-1">
                    <input
                        type="text"
                        placeholder="Search a product in nexora"
                        className="flex-1 border-none focus:outline-none text-sm"
                    />
                    <button className="search-btn shrink-0">
                        <img src={searchBotton} alt="search button" className="w-5 h-5" />
                    </button>
                </div>

                {/* Nav links — hidden on mobile */}
                <div className="hidden lg:flex items-center gap-8 lg:gap-14">
                    <a href="#" className="text-sm text-neutral-700 hover:text-black transition-colors">Marketplace</a>
                    <a href="#" className="text-sm text-neutral-700 hover:text-black transition-colors">About</a>
                    <a href="#" className="text-sm text-neutral-700 hover:text-black transition-colors">Blog</a>
                    <a href="#" className="text-sm text-neutral-700 hover:text-black transition-colors">Contact</a>
                </div>

                {/* CTA — hidden on mobile */}
                <button className="hidden lg:flex items-center justify-center px-4 py-2 bg-(--color-primary) text-white rounded text-sm">
                    Get Started
                </button>

                {/* Hamburger — visible on mobile only */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-5 flex flex-col gap-4 border-t border-neutral-100">

                    {/* Mobile search */}
                    <div className="flex items-center gap-2 border border-neutral-400 px-4 py-2 mt-4">
                        <input
                            type="text"
                            placeholder="Search a product in nexora"
                            className="flex-1 border-none focus:outline-none text-sm"
                        />
                        <button className="shrink-0">
                            <img src={searchBotton} alt="search button" className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile nav links */}
                    <a href="#" className="text-sm text-neutral-700 hover:text-black py-1 transition-colors">Marketplace</a>
                    <a href="#" className="text-sm text-neutral-700 hover:text-black py-1 transition-colors">About</a>
                    <a href="#" className="text-sm text-neutral-700 hover:text-black py-1 transition-colors">Blog</a>
                    <a href="#" className="text-sm text-neutral-700 hover:text-black py-1 transition-colors">Contact</a>

                    {/* Mobile CTA */}
                    <button className="flex justify-center items-center px-4 py-3 bg-(--color-primary) text-white rounded text-sm">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}