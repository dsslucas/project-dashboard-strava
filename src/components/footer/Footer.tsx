import React from "react";
import A from "../a/A";
import Span from "../span/Span";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center px-2">
            <Span> 
                Developed by <A href="https://dsslucas.github.io/en" text="Lucas Souza" /> according to <A href="https://developers.strava.com/" text="Strava Developers" />, <A href="https://www.strava.com/legal/api" text="Terms of Service" /> and <A href="https://developers.strava.com/guidelines/" text="Brand Guidelines" />
            </Span>
            <Span>The data from Strava is just for read. In this project, we not insert or upload activities of user.</Span>
        </footer>
    );
}

export default Footer;