import React from "react"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center bg-gray-300">            
            <span className="text-center">Developed by <a href="https://dsslucas.github.io/en" target="_blank" className="underline">Lucas Souza</a> according to <a href="https://developers.strava.com/" target="_blank" className="underline">Strava Developers</a>, <a href="https://www.strava.com/legal/api" target="_blank" className="underline">Terms of Service</a> and <a href="https://developers.strava.com/guidelines/" target="_blank" className="underline">Brand Guidelines</a>.</span>
            <span className="text-center">The data from Strava is just for read. In this project, we not insert or upload activities of user.</span>
        </footer>
    );
}

export default Footer;