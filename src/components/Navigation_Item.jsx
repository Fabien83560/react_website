import React from "react";
import './styles.css'

export default function Navigation_Item({ page , class_img , name }) {

    return (
        <>
            <li>
                <a href={page}>
                    <span className="icon">
                        <i className={class_img}></i>
                    </span>
                    <span className="text"> {name}</span>
                </a>
            </li>
        </>
    );
}