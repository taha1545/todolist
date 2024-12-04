import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();

    return (
        <nav className="bg-blue-950  top-0 w-full flex items-center justify-between px-6 py-3 shadow-md z-10">
           
            <div className="flex items-center space-x-4">
                <img
                    className="w-12 h-12 rounded-full"
                    alt="logo"
                    src="https://th.bing.com/th/id/OIP.9LrVs6DYgR-bzvEYq6a4-AHaGC?rs=1&pid=ImgDetMain"
                />
                <h1 className="text-white text-2xl font-bold">TO DO List</h1>
            </div>

           
            <div className="hidden md:flex items-center space-x-8">
                <Link
                    to="/"
                    className={`${
                        location.pathname === "/"
                            ? "text-blue-400 font-semibold"
                            : "text-white"
                    } hover:text-blue-400 transition duration-300`}
                >
                    Home
                </Link>
                <Link
                    to="/login"
                    className={`${
                        location.pathname === "/login"
                            ? "text-blue-400 font-semibold"
                            : "text-white"
                    } hover:text-blue-400 transition duration-300`}
                >
                    Login
                </Link>
                <Link to="/signup">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-500 transition duration-300">
                        Try for Free
                    </button>
                </Link>
            </div>

         
            <div className="md:hidden">
                <button className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Nav;
