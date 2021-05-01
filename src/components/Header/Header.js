import React from 'react';
import { Link, Redirect, Route, Switch } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="logo">Usama Zuberi</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to="./"><span></span></Link></li>
                    <li className="navigation__item"><Link to="./"><span></span></Link></li>
                    <li className="navigation__item"><Link to="./"><span></span></Link></li>
                    <li className="navigation__item"><Link to="./"><span></span></Link></li>
                    <li className="navigation__item"><Link to="./"><span></span></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
