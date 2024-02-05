import React from "react"
import './styles.css'
import Navigation_Item from "./Navigation_Item"

export default function Navigation() {

    return (
      <>
        <nav>
            <ul>
                <Navigation_Item page="#about" class_img="fa-solid fa-user" name="À Propos" />
                <Navigation_Item page="#skills" class_img="fa-solid fa-head-side-virus" name="Compétences" />
                <Navigation_Item page="#portfolio" class_img="fa-solid fa-book" name="PortFolio" />
                <Navigation_Item page="#cv" class_img="fa-solid fa-file" name="CV" />
            </ul>
        </nav>
      </>
    )
}