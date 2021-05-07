import React from 'react';
import { Link } from "react-scroll";

import './BannerSection.scss';

import BannerImage from '../../assets/images/bannerImg.png';
import CV from '../../assets/cv/Muhammad_Usama_Zuberi_CV.pdf';
import Button from '../Button/Button';

function BannerSection() {

    return (
        <section className="bannerSection">
            <div className="bannerSection__left">
                <div className="introText">
                    <span className="introText__salutation">Hello! I'm</span>
                    <h1 className="introText__name">Muhammad Usama Zuberi</h1>
                    <span className="introText__title">Front-end Web Developer</span>
                    <span className="introText__bio">I design beautiful, engaging user experiences and intuitive user interfaces for the web. I pride myself on reliable communication and being an easy to work with , friendly guy.</span>
                    <a href={CV} download="Muhammad_Usama_Zuberi_CV.pdf" className="bannerButtons">
                        <Button type="button" text="Download CV" onClick={() => { }} />
                    </a>
                </div>
            </div>
            <div className="bannerSection__right">
                <img src={BannerImage} alt="Muhammad Usama Zuberi" className="bannerImg" />
            </div>
            <Link
                activeClass="active"
                to="portfolioSection"
                spy={true}
                smooth={true}
                duration={500}
                className="mouseScroll"
            >
                <i class="fas fa-angle-double-down"></i>
            </Link>
        </section>
    )
}

export default BannerSection
