import React from "react";
// import Common from "./Common";
import Card from "./Card";

function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Welcome to Our Service Page </h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto"></div>
                    <div className="row gy-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Service;
