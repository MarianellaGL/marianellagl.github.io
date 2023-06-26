import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";

const Header = () => {
    return (
        <>
            <header>
                <nav className="container flex justify-between px-4 py-8 mx-auto bg-white">
                    <div>
                        <h3 className="text-2xl font-medium text-blue-500">Marianella Gomez Luna</h3>
                    </div>
                    <div className="hidden space-x-8 lg:flex">
                        <Link to="/about" element={<About />} >About Me</Link>
                        <a href="/projects">Projects</a>
                        <a href="/cv">My CV</a>
                        <a href="/contactform">Contact me!</a>
                    </div>
                    <div class="flex lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                </nav>
            </header>
        </>


    );
}

export default Header;