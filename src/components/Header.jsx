import React from "react"
import './styles.css'
import Navigation from "./Navigation"
import Footer from "./Footer"
import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Information from "./Information"

export default function Header({onSelectItem}) {

    return (
      <>
        <header>
            <img className="pp-img" src={logo} alt="logo" />
            <h1>Fabien Ortega</h1>
            <div className="media">
                <a href="https://www.instagram.com/fabienor" >
                    <img className="media-img" src={instagram} alt="INSTAGRAM" />
                </a>
                <a href="https://github.com/Fabien83560" >
                    <img className="media-img" src={github} alt="GITHUB" />
                </a>
                <a href="https://fr.linkedin.com/in/fabien-ortega-6bb720272?original_referer=https%3A%2F%2Fwww.google.com%2F" >
                    <img className="media-img" src={linkedin} alt="LINKEDIN" />
                </a>
            </div>
            <Navigation onSelectItem={onSelectItem}/>
            <div className="information">
                <ul>
                    <Information class_img="fa-solid fa-envelope" title="E-MAIL" sub_title="fabienortega.290604 @gmail.com" />
                    <Information class_img="fa-solid fa-phone" title="TÉLÉPHONE" sub_title="+33 6 52 15 81 00" />
                    <Information class_img="fa-solid fa-location-dot" title="LOCALISATION" sub_title="13800 - Istres" />
                </ul>
                </div>
            <Footer year={new Date().getFullYear()}/>
        </header>
      </>
    )
  }
