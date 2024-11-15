import React from "react";
import StravaButton from "../assets/images/strava/btn_strava_connectwith_orange@2x.png"
import StravaPowered from "../assets/images/strava/api_logo_pwrdBy_strava_horiz_light.png"
import Span from "../components/span/Span"
import Button from "../components/button/Button"
import H1 from "../components/h1/H1";
import Img from "../components/img/Img";
import Section from "../components/section/Section";

const Home = () => {
    const buttonClick = () => {
        console.log("hi")
    }

    return (
        <>
            <Section flex flexCol itemsCenter justifyCenter>
                <H1
                    textCenter
                    textOrange
                    text2xl
                    uppercase
                    fontBold
                >
                    Strava Dashboard Project
                </H1>
                <Img alt="strava-logo" image={StravaPowered} height12 />
            </Section>
            <Section flex flex1 flexCol itemsCenter justifyCenter textCenter>
                <Span>
                    This project shows the dashboard of physical exercises registered in Strava.
                </Span>
                <Span>
                    Click on this button below:
                </Span>
                <Button type="button" onClick={buttonClick}>
                    <Img alt="strava-button" image={StravaButton} height12 />
                </Button>
            </Section>
        </>
    );
}

export default Home;