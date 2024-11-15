import React from "react";
import StravaButton from "../assets/images/strava/btn_strava_connectwith_orange@2x.png"
import StravaPowered from "../assets/images/strava/api_logo_pwrdBy_strava_horiz_light.png"
const Home = () => {
    const buttonClick = () => {
        console.log("hi")
    }

    return (
        <>
            <section className="flex flex-col items-center justify-center">
                <h1 className="text-[#FC4C02] text-2xl uppercase font-sans font-bold">Strava Dashboard Project</h1>
                <img src={StravaPowered} alt="" className="h-12"/>
            </section>
            <section className="flex flex-1 flex-col items-center justify-center text-center">
                <span>This project shows the dashboard of physical exercises registered in Strava.</span>
                <span>Click on this button below:</span>
                <button type="button" onClick={buttonClick}>
                    <img src={StravaButton} alt="" className="h-12"/>
                </button>
            </section>
        </>
    );
}

export default Home;