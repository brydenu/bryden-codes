import React from "react";
import griffey from "images/pictures/griffey.png";
import "./Home.scss";

export function Home() {
    return (
        <div>
            <div className="home">
                <div>
                    This website is still being developed, so for now, here is a picture of my really cool dog, Griffey :)
                </div>
                <img className="griffey" src={griffey} alt="Bryden's dog Griffey. Griffey is a really good boy." />
            </div>
        </div>
    );
}
