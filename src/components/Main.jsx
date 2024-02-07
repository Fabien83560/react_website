import React from "react"
import About from "./MainComponents/About.jsx"
import Skills from "./MainComponents/Skills.jsx"
import Portfolio from "./MainComponents/Portfolio.jsx"
import Cv from "./MainComponents/Cv.jsx"

export default function({ selectedItem }) {

    let ComponentToRender;

    switch (selectedItem) {
        case 'À Propos':
            ComponentToRender = About;
            break;
        case 'Compétences':
            ComponentToRender = Skills;
            break;
        case 'PortFolio':
            ComponentToRender = Portfolio;
            break;
        case 'CV':
            ComponentToRender = Cv;
            break;
        default:
            ComponentToRender = About;
    }

    return (
        <>
            <main>
                <ComponentToRender />
            </main>
        </>
    );
}