import React, { useState } from 'react';
import { Link } from "react-scroll";

import './Home.scss';

import BannerSection from '../../components/BannerSection/BannerSection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import ContactSection from '../../components/ContactSection/ContactSection';

function Home() {

    const [show, setShow] = useState(false)

    document.addEventListener('scroll', function () {
        let scrollTop = document.getElementById("scrollTop");

        if (scrollTop) {
            if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                setShow(true);

            } else {
                setShow(false);
            }
        }
    });

    return (
        <div className="home">
            <BannerSection />
            <PortfolioSection />
            <ContactSection />
            <div className="footer">
                Copyright&copy; 2021 Muhammad Usama Zuberi
                <br />
                All rights reserved.
            </div>

            <Link
                activeClass="active"
                to="bannerSection"
                spy={true}
                smooth={true}
                duration={500}
            >
                <div id="scrollTop" className={`scrollTop ${show ? "show" : ""}`}>
                    <i class="fas fa-chevron-up"></i>
                </div>
            </Link>
        </div>
    )
}

export default Home
