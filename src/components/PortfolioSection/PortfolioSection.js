import React from 'react';
import { Link } from "react-scroll";

import './PortfolioSection.scss';

import PortfolioCards from '../Cards/PortfolioCards/PortfolioCards';

import Pixtool from '../../assets/images/Pixtool.png'
import SevenStarTraining from '../../assets/images/SevenStarTraining.png'
import Novospace from '../../assets/images/Novospace.png'
import EberhardCapital from '../../assets/images/EberhardCapital.png'
import EHJAndSJConsultancy from '../../assets/images/EHJAndSJConsultancy.png'
import Nexter from '../../assets/images/Nexter.png'
import Trillo from '../../assets/images/Trillo.png'
import Natours from '../../assets/images/Natours.png'

function PortfolioSection() {
    return (
        <section id="portfolioSection" className="portfolioSection">
            <h2 className="section-heading">My Recent Work</h2>
            <p className="section-intro">Here are a few projects I've worked on recently. Want to see more?
                <Link
                    activeClass="active"
                    to="contactSection"
                    spy={true}
                    smooth={true}
                    duration={600}
                    className="emailLink"
                >
                    &nbsp;Email me
                </Link>
            </p>

            <div className="cardsGallery">
                <PortfolioCards logo={Pixtool} title="Pixtool" description="A Saas web app for video editing, sharing & stage simulation." link="https://pixtool-66579.firebaseapp.com/home" />
                <PortfolioCards logo={EberhardCapital} title="Eberhard Capital" description="Official website of  Eberhard Capital." link="http://eberhardcapital.com/" />
                <PortfolioCards logo={EHJAndSJConsultancy} title="EHJ & SJ Contultancy" description="Official website of EHJ & SJ Contultancy." link="https://ehjsjconsultancy.com/" />
                <PortfolioCards logo={Natours} title="Natours" description="A website for fictional tour company Natours" link="https://usamazuberi.github.io/Natours/" />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="A Saas web app for apprentiseship trainings." link="https://star-309014.ew.r.appspot.com/" />
                <PortfolioCards logo={Nexter} title="Nexter" description="A website for fictional real state company Nexter" link="https://usamazuberi.github.io/Nexter/" />
                <PortfolioCards logo={Trillo} title="Trillo" description="A website for fictional all in one tour company Trillo" link="https://usamazuberi.github.io/Trillo/" />
                <PortfolioCards logo="" title="Cylinder" description="A website for complex daily hot water requirements calculation of people." link="https://cylinder-41ed8.firebaseapp.com/" />
                <PortfolioCards logo={Novospace} title="Novospace" description="A Saas web app for Novospace for hardware & products configurations." link="https://novo-back.herokuapp.com/" />
            </div>
        </section>
    )
}

export default PortfolioSection
