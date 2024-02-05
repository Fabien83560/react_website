import React from "react";
import './styles.css';

export default function Navigation_Item({ class_img, name, onSelect }) {
    const handleClick = (e) => {
        e.preventDefault();
        onSelect(name);
    };

    return (
        <li onClick={handleClick}>
            <a href="">
                <span className="icon">
                    <i className={class_img}></i>
                </span>
                <span className="text"> {name}</span>
            </a>
        </li>
    );
}
