import React from "react"
import './styles.css'

export default function({ class_img , title , sub_title }) {

    return (
        <>
            <li>
                <div className="icon-container">
                    <span className="icon"><i className={class_img}></i></span>
                </div>
                <div className="text-container">
                    <h4>{title}</h4>
                    <p>{sub_title}</p>
                </div>
            </li>
        </>
    );
}