import React from "react"
import './styles.css'
import Navigation_Item from "./Navigation_Item"

export default function Navigation({ onSelectItem }) {

    return (
      <>
        <nav>
            <ul>
                <Navigation_Item class_img="fa-solid fa-user" name="À Propos" onSelect={onSelectItem}/>
                <Navigation_Item class_img="fa-solid fa-head-side-virus" name="Compétences" onSelect={onSelectItem}/>
                <Navigation_Item class_img="fa-solid fa-book" name="PortFolio" onSelect={onSelectItem}/>
                <Navigation_Item class_img="fa-solid fa-file" name="CV" onSelect={onSelectItem}/>
            </ul>
        </nav>
      </>
    )
}