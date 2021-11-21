import React from "react";
import Common from "./Common";
import Rocket from "../images/Rocket.svg"


function Home() {
    return (
        <>
            <Common
                name={["Grow Your Business With  ", <strong className="brand-name">Ankur EnterPrise</strong>, ""]}
                imgsrc={Rocket}
                visit="/Service"
                btname="Get Started"
            />

        </>
    );
}

export default Home;
