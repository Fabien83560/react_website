import React from "react"
import './styles.css'

export default function Footer({ year }) {

    return (
        <>
            <footer>
                <div className="footer-copyright">
                    <div className="container center-align">© {year} Fabien ORTEGA | Tous droits réservés</div>
                </div>
            </footer>
        </>
    );
}