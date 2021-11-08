import React from "react";
import "../styles/Card.css";

export default function Card({ children, cardClass = false, header = false }) {
    const generateClassName = (section) => {
        if (cardClass) {
            return `${cardClass}-card card-${section}`;
        }
        return `card-${section}`;
    };

    const generateHeader = () => {
        if (header) {
            return (
                <div className={generateClassName("header")}>
                    <h1 className={generateClassName("title")}>
                        {header.title}
                    </h1>
                    <p className={generateClassName("subtitle")}>
                        {header.subtitle}
                    </p>
                    <hr />
                </div>
            );
        }
    };
    return (
        <div className={generateClassName("wrapper")}>
            {generateHeader()}
            <div className={generateClassName("content")}>{children}</div>
        </div>
    );
}
