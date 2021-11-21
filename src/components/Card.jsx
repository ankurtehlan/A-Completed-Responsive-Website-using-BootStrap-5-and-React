import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <>
            <div className="col-md-4  colClassName-10 mx-auto">
                <div ClassName="card">
                    <img src="https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?b=1&k=20&m=1311598658&s=170667a&w=0&h=Ln_dpeXRkCDCZjuqOe2r7AlWP29xHFbc9wyKzxajloA=" class="card-img-top" alt="..." />
                    <div ClassName="card-body">
                        <h5 ClassName="card-title font-weight-bold">Card title</h5>
                        <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" ClassName="btn btn-primary"> Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
