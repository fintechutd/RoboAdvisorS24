import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <header className="fintech-color p-4">
            <nav className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2 text-white">
                    <img
                        src={"logo.png"}
                        alt="FinTech Logo"
                        className="h-12"
                    />
                    <span className="text-white font-bold text-xl">FinTech Robo Advisor</span>
                </Link>
                <Link
                    to="/donate"
                    className={`px-4 py-2 rounded-full font-bold text-xl hover:bg-white hover:text-custom-color ${
                        props.active === "donate" ? "bg-white text-custom-color" : "text-white"
                    }`}
                >
                    Login
                </Link>
            </nav>
        </header>
    );
}
