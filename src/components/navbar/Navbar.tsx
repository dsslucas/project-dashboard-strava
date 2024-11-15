import React, { useState } from "react"
import ImagePoweredStrava from "../../assets/images/strava/api_logo_pwrdBy_strava_horiz_light.png";
import H1 from "../h1/H1";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(true);

    const toggleMenu = () => {
        setIsHidden(!isHidden);
    }

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/*  Mobile menu button */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                            onClick={toggleMenu}>
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/*
                            Icon when menu is closed.

                            Menu open: "hidden", Menu closed: "block"
                        */}
                            <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/*
                            Icon when menu is open.

                            Menu open: "block", Menu closed: "hidden"
                        */}
                            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a href="/dashboard" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <H1 text2xl uppercase fontBold textCenter textOrange>Strava Dashboard Project</H1>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <img src={ImagePoweredStrava} className="w-64" alt="strava-logo"/>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div
                id="mobile-menu"
                className={`sm:hidden transition-all duration-500 ease-in-out overflow-hidden z-10 ${isHidden ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
                    }`}
            >
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <H1 text2xl uppercase fontBold textCenter textOrange>Strava Dashboard Project</H1>
                    <a href="/dashboard" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;