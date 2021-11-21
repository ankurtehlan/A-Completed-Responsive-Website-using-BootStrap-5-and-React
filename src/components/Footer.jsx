import React from "react";

const date = new Date();
const yyy = date.getFullYear();


const Footer = () => {
    {
        return (
            <>
                <footer className="w-100 bg-light text-center">
                    <p> ©️ {yyy}  Ankur Tehlan. All Rights Reserved | Terms and Conditions</p>
                </footer>
            </>
        );
    }
}

export default Footer;