import React from "react";
import Common from "./Common";
import Social from "../images/Social.svg"

function About() {
    return (
        <Common
            name="Welcome to About page"
            imgsrc={Social}
            visit="/Contact"
            btname="Contact Now"
        />
    );
}

export default About;
